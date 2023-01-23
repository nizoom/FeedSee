// import React, { useEffect, useState } from "react";
import { Tweet } from "./homecomponents";
export interface ReturnbObject {
  data: string;
  responseStatus: number;
}
export const FetchTweets = async (handle) => {
  if (handle === "randomizeSearch") {
    const fetchResponse = await initFetch("randomizeSearch");
    return fetchResponse;
  }
  const fetchResponse = await initFetch(handle);
  return fetchResponse;
};

const initFetch = async (handle: string) => {
  const fetchResponse = await fetch(
    `http://localhost:3001/api/users/${handle}`
  ).then((response) => {
    if (response.body) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");
      return reader.read().then(function (result) {
        return {
          data: decoder.decode(result.value),
          responseStatus: response.status,
        } as ReturnbObject;
      });
    }
  });
  return fetchResponse;
};
