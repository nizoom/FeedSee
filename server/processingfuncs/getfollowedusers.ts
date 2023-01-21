import { validHandleObj } from "./validatehandle";
import { NextFunction } from "express";
import twitterClient from "./twitterClient";
// import { basicFollowersList } from "../interfaces";

const getFollowedUsers = async (
  searchedAcc: validHandleObj | undefined,
  next: NextFunction
) => {
  if (!searchedAcc) {
    return;
  }
  try {
    const response = await twitterClient().v2.following(searchedAcc.id);
    const { data } = response;
    if (!data) {
      throw new Error(`${searchedAcc.name} isn't following anyone`);
    }
    if (data.length < 1) {
      throw new Error(`${searchedAcc.name} isn't following anyone`);
    }
    const followedUsers = data as validHandleObj[];
    return followedUsers;
  } catch (err: unknown) {
    if (err instanceof Error) {
      // console.error("this is from getting followers" + "\n" + err);
      next(err);
    }
  }
};

export default getFollowedUsers;
