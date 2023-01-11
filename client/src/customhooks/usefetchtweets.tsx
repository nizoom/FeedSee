import React, { useEffect, useState } from "react";
import { Tweet, TweetComponentProps } from "../components/homecomponents";

// const add placeholder tweets
const useFetchTweets = () => {
  const testTweet = {
    author: "Bob",
    content: "this is Bob's tweet",
    date: new Date(),
  };

  const typedTweet = testTweet as Tweet;
  const [listOfTweets, setListOfTweets] = useState<
    TweetComponentProps["listOfTweets"]
  >([typedTweet, typedTweet, typedTweet, typedTweet]);
  // useEffect(() => {
  // fetch tweets
  // setListOfTweets(fetchedTweets)
  // });
  return listOfTweets;
};

export default useFetchTweets;

// { author: "Bob", content: "this is Bob's tweet", date: new Date() },
// { author: "Tom", content: "this is Tom's tweet", date: new Date() },
// { author: "Vivek", content: "this is Vivek's tweet", date: new Date() },
// { author: "Sarah", content: "this is Sarah's tweet", date: new Date() },

// tweet: [
//     { author: "Bob", content: "this is Bob's tweet", date: new Date() },
//   ],
