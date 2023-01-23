import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Logo from "../components/logo";
import {
  Tweet,
  ViewRandomTweets,
  ViewTweetsFrmInputedHandle,
  ViewTweetsFrmSubscription,
} from "../components/homecomponents";
import SignOutAndGoBackBtns from "../components/signout&back";
import { FetchTweets, ReturnbObject } from "../components/fetchtweets";

const HomePage = (props: {
  history: { location: { state: { pathSelection: string } } };
}) => {
  interface FeedState {
    isLoading: boolean;
    listOfTweets: Tweet[] | undefined;
    handle: string;
  }
  const [feedState, setFeedState] = useState<FeedState>({
    isLoading: false,
    listOfTweets: undefined,
    handle: "",
  });

  const handleSearchInit = async (handle: string = "randomizeSearch") => {
    // init fetch logic
    console.log("loading");
    setFeedState({ isLoading: true, listOfTweets: undefined, handle: "" });
    setTimeout(async () => {
      const fetchResponse = await FetchTweets(handle);
      const { data, responseStatus } = fetchResponse as ReturnbObject;
      if (responseStatus === 200) {
        const tweets = JSON.parse(data);
        setFeedState({
          isLoading: false,
          listOfTweets: tweets,
          handle: handle,
        });
      }
    }, 2000);
  };
  const displayViewSelection = () => {
    const selectedViewType = props.history.location.state.pathSelection;
    switch (selectedViewType) {
      case "Randomize":
        return (
          <ViewRandomTweets
            handleSearchInit={handleSearchInit}
            isLoading={feedState.isLoading}
            tweets={feedState.listOfTweets}
          />
        );
      case "Enter handle":
        return (
          <ViewTweetsFrmInputedHandle
            handleSearchInit={handleSearchInit}
            isLoading={feedState.isLoading}
            tweets={feedState.listOfTweets}
          />
        );
      case "Pick from subscriptions":
        return (
          <ViewTweetsFrmSubscription
            handleSearchInit={handleSearchInit}
            isLoading={feedState.isLoading}
            tweets={feedState.listOfTweets}
          />
        );
    }
  };
  return (
    <Container className="landingpage-wrapper">
      <Logo handle={feedState.handle} />
      <SignOutAndGoBackBtns />
      {displayViewSelection()}
    </Container>
  );
};

export default HomePage;
