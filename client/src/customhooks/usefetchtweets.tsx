import React, { useEffect, useState } from "react";
import { Tweet } from "../components/homecomponents";

// const add placeholder tweets
function useFetchTweets(twitterHandle: string) {
  const [listOfTweets, setListOfTweets] = useState<Tweet[]>();
  useEffect(() => {
    // fetch tweets
    // setListOfTweets(fetchedTweets)
  });
  return listOfTweets;
}

export default useFetchTweets;
