import { NextFunction } from "express";
import getFollowedUsers from "./processingfuncs/getfollowedusers";
import {
  fullTweetObject,
  getTweetsFromFollowed,
} from "./processingfuncs/getTweets";
import { orderTweetsByTime } from "./processingfuncs/orderbytime";
import selectRandomCeleb from "./processingfuncs/selectrandomceleb";
import validateHandle, {
  validHandleObj,
} from "./processingfuncs/validatehandle";
const randomizeController = async (next: NextFunction) => {
  // randomly pick one of hardcoded list
  const randomHandle: string = selectRandomCeleb();

  const validatedHandle: validHandleObj | undefined = await validateHandle(
    randomHandle,
    next
  );

  //2. get followed accs
  const followedUsers: validHandleObj[] | undefined = await getFollowedUsers(
    validatedHandle,
    next
  );

  //3. get tweets from followed accs
  const tweetsFromFollowers: fullTweetObject[] | undefined =
    await getTweetsFromFollowed(followedUsers, next);

  //4. organize tweets in chronological order
  const tweetsInChronoOrder = orderTweetsByTime(tweetsFromFollowers, next);
  return [tweetsInChronoOrder, validatedHandle?.name];
};

export default randomizeController;
