import { credentials } from "../index.module";
import { TwitterApi } from "twitter-api-v2";
import { NextFunction, Request, Response } from "express";
import { readFileIntoBuffer } from "twitter-api-v2/dist/esm/v1/media-helpers.v1";
import { nextTick } from "process";

interface validHandleObj {
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

const reportError = ({ message }: { message: string }) => {
  // send the error to our logging service...
};

const validateHandle = async (handle: string, next: NextFunction) => {
  const twitterClient = new TwitterApi(credentials.bearer_token);
  const readOnlyClient = twitterClient.readOnly;

  try {
    const response = await readOnlyClient.v2.userByUsername(handle);
    // console.log(response);
    if (isValidHandleObj(response)) {
      const { data: validHandleObj } = response;
      return validHandleObj;
    } else if (isInvalidHandleObj(response)) {
      const errorDetails: string = response.errors[0]["detail"];
      throw new Error(errorDetails);
    }
    throw new Error("Search failed, please try again");
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
      next(err);
      return {
        message: err.message,
      };
    }
  } finally {
  }
};

export default validateHandle;

// validateHandle("JoeBiden555z", next);
