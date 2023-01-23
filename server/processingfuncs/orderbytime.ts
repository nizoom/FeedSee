import { NextFunction } from "express";
import { fullTweetObject } from "./getTweets";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const orderTweetsByTime = (
  tweets: fullTweetObject[] | undefined,
  next: NextFunction
) => {
  if (!tweets) {
    return;
  }
  const reorderedTweetsByTime = reOrderByTimeStamp(tweets, next);
  const tweetsWithRelativeTime = changeTimeStampToRelativeTime(
    reorderedTweetsByTime,
    next
  );
  return tweetsWithRelativeTime;
};

const reOrderByTimeStamp = (
  tweets: fullTweetObject[] | undefined,
  next: NextFunction
) => {
  const tweetsWithoutTimeStamp = tweets?.filter((tweet) => !tweet.timeStamp);
  const tweetsWithTimeStamp = tweets?.filter((tweet) => tweet.timeStamp);
  if (!tweetsWithoutTimeStamp) {
    next("An error occured while fetching tweets");
    return;
  }
  tweetsWithTimeStamp?.sort((a, b) => {
    if (dayjs(a.timeStamp).isAfter(dayjs(b.timeStamp))) {
      return -1;
    }
    return 1;
  });
  return tweetsWithTimeStamp?.concat(tweetsWithoutTimeStamp);
};

const changeTimeStampToRelativeTime = (
  tweets: fullTweetObject[] | undefined,
  next: NextFunction
) => {
  if (!tweets) {
    next("An error occured while fetching tweets");
    return;
  }
  dayjs.extend(relativeTime);
  const changedTweetObjs = tweets.map((tweet) => {
    if (!tweet.timeStamp) {
      tweet.timeStamp = "publish time unavailable";
      return tweet;
    }
    const relativeTime = dayjs(tweet.timeStamp).fromNow();
    tweet.timeStamp = relativeTime;
    return tweet;
  });
  return changedTweetObjs;
};
