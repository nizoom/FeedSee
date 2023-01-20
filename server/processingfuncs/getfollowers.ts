import validateHandle, { validHandleObj } from "./validatehandle";
import { NextFunction } from "express";
import twitterClient from "./twitterClient";

const getFollowers = async (searchedAcc: validHandleObj) => {
  try {
    const response = await twitterClient().v2.followers(searchedAcc.id);
    const { data } = response;
    console.log(data);
  } catch (err: unknown) {}
};

export default getFollowers;
