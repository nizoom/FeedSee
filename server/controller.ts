// import validateHandle from "./processingfuncs/validatehandle";
import { NextFunction } from "express";
import getFollowedUsers from "./processingfuncs/getfollowedusers";
import {
  fullTweetObject,
  getTweetsFromFollowed,
} from "./processingfuncs/getTweets";
import validateHandle, {
  validHandleObj,
} from "./processingfuncs/validatehandle";
import { orderTweetsByTime } from "./processingfuncs/orderbytime";
const controller = async (handle: string, next: NextFunction) => {
  //   1. validate Handle
  const validatedHandle: validHandleObj | undefined = await validateHandle(
    handle,
    next
  );

  //2. get followers
  const followedUsers: validHandleObj[] | undefined = await getFollowedUsers(
    validatedHandle,
    next
  );

  //3. get tweets from followers
  const tweetsFromFollowers: fullTweetObject[] | undefined =
    await getTweetsFromFollowed(followedUsers, next);

  //4. organize tweets in chronological order
  const tweetsInChronoOrder = orderTweetsByTime(tweetsFromFollowers, next);
  return tweetsInChronoOrder;
};

export default controller;
