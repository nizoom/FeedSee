// import validateHandle from "./processingfuncs/validatehandle";
import { NextFunction, Request, Response } from "express";
import { credentials } from "./index.module";
import getFollowedUsers from "./processingfuncs/getfollowedusers";
import getTweetsFromFollowed from "./processingfuncs/getTweets";
import validateHandle, {
  validHandleObj,
} from "./processingfuncs/validatehandle";
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
  const tweetsFromFollowers = await getTweetsFromFollowed(followedUsers, next);
};

export default controller;
