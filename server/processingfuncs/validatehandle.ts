import { NextFunction } from "express";
import twitterClient from "./twitterClient";
export interface validHandleObj {
  id: string;
  name: string;
  username: string;
}

interface validationErrObj {
  errors: [];
}

const isValidHandleObj = (responseObj: any): responseObj is validHandleObj => {
  return responseObj.data !== undefined;
};

const isInvalidHandleObj = (
  responseObj: any
): responseObj is validationErrObj => {
  return responseObj.errors !== undefined;
};

const validateHandle = async (
  handle: string,
  next: NextFunction
): Promise<validHandleObj> => {
  try {
    const response = await twitterClient().v2.userByUsername(handle);
    // console.log(response);
    if (isValidHandleObj(response)) {
      const { data } = response;
      const specifiedAcc = data as validHandleObj;
      return specifiedAcc;
    } else if (isInvalidHandleObj(response)) {
      const errorDetails: string = response.errors[0]["detail"];
      throw new Error(errorDetails);
    }
    throw new Error("Search failed, please try again");
  } catch (err: unknown) {
    if (err instanceof Error) {
      next(err);
    }
  }

  const satisfyingTS = {
    id: "string",
    name: "string",
    username: "string",
  } as validHandleObj;
  return satisfyingTS;
};

export default validateHandle;
