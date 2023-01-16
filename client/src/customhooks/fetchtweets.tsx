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
  );

  console.log(fetchResponse);

  //[typedTweet, typedTweet, typedTweet, typedTweet];
  return fetchResponse;
};

export default FetchTweets;
