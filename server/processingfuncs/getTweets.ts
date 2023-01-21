import { validHandleObj } from "./validatehandle";
import { NextFunction } from "express";
import twitterClient from "./twitterClient";
import {
  TweetSearchRecentV2Paginator,
  Tweetv2SearchParams,
} from "twitter-api-v2";
// TTweetv2UserField
const getTweetsFromFollowed = async (
  followedUsers: validHandleObj[] | undefined,
  next: NextFunction
) => {
  if (!followedUsers) {
    return;
  }
  const listOfFolowedUsernames: string[] = followedUsers?.map(
    (user) => `from:${user.username}`
  );
  const wholeStringOfFollowedAccs = listOfFolowedUsernames.join(" OR ");
  const followedAccsQuery = cutAndReturnQueryString(wholeStringOfFollowedAccs);
  const tweetResponseObj = await twitterClient().v2.search(followedAccsQuery);

  const idsOfRecentTweetFromFollowedUsers: string[] =
    tweetResponseObj.data.data.map((tweetObj) => tweetObj.id);
  const listOfTweetsResponse = await twitterClient().v2.tweets(
    idsOfRecentTweetFromFollowedUsers,
    { expansions: "user.fields": 'username' }
  );
  console.log(
    "🚀 ~ file: getTweets.ts:30 ~ listOfTweetsResponse",
    listOfTweetsResponse
  );
};

export default getTweetsFromFollowed;

// the length limit for rules on Twitter's API is 512
const cutAndReturnQueryString = (wholeString: string): string => {
  //  // "from:JoeBiden OR from:susan_daitch"
  const hardCutOffAt512 = wholeString.slice(0, 513);
  const indexOfLastOrStatement = hardCutOffAt512.lastIndexOf("OR");
  const syntacticallyCorrectShortenedQueryString = hardCutOffAt512.slice(
    0,
    indexOfLastOrStatement - 1
  );
  return syntacticallyCorrectShortenedQueryString;
};
