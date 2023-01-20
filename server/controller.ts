// import validateHandle from "./processingfuncs/validatehandle";
import { NextFunction, Request, Response } from "express";
import { credentials } from "./index.module";
import getFollowers from "./processingfuncs/getfollowers";
import validateHandle from "./processingfuncs/validatehandle";
const controller = async (handle: string, next: NextFunction) => {
  //   1. validate Handle
  const validatedHandle = await validateHandle(handle, next);

  //2. get followers
  const followers = await getFollowers(validatedHandle);
};

export default controller;
