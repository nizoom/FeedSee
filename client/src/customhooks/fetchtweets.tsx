// import React, { useEffect, useState } from "react";
import { Tweet } from "../components/homecomponents";

const FetchTweets = async (handle) => {
  const testTweet = {
    author: "Bob",
    content: "this is Bob's tweet",
    date: new Date(),
  };
  const typedTweet = testTweet as Tweet;

  const fetchResponse = await fetch(
    `http://localhost:3001/api/users/${handle}`
  ).then((response) => {
    if (response.body) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");
      return reader.read().then(function (result) {
        console.log(decoder.decode(result.value));
        return decoder.decode(result.value);
      });
    }
  });

  //[typedTweet, typedTweet, typedTweet, typedTweet];
  return fetchResponse;
};

export default FetchTweets;
