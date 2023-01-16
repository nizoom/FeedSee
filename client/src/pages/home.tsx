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
import { TweetComponentProps } from "../components/homecomponents";
import useFetchTweets from "../customhooks/usefetchtweets";

const HomePage = (props: {
  history: { location: { state: { pathSelection: string } } };
}) => {
  interface FeedState {
    isLoading: boolean;
    listOfTweets: Tweet[] | undefined;
  }
  const [feedState, setFeedState] = useState<FeedState>({
    isLoading: false,
    listOfTweets: undefined,
  });

  const returnTestTweets = useFetchTweets();
  const handleSearchInit = (handle: string = "randomize") => {
    // init fetch logic
    console.log("loading");
    setFeedState({ isLoading: true, listOfTweets: undefined });
    setTimeout(() => {
      // replace setTimeout with named function
      // if string is randomize than execute random search
      // else do specific handle search
      setFeedState({ isLoading: false, listOfTweets: returnTestTweets });
      fetch("http://localhost:3001/api/users/Bob");
    }, 4000);
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
      <Logo />
      <SignOutAndGoBackBtns />
      {displayViewSelection()}
    </Container>
  );
};

export default HomePage;
