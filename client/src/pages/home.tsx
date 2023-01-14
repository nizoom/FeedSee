import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../components/logo";
import {
  ViewRandomTweets,
  ViewTweetsFrmInputedHandle,
  ViewTweetsFrmSubscription,
} from "../components/homecomponents";
import SignOutAndGoBackBtns from "../components/signout&back";
import { TweetComponentProps } from "../components/homecomponents";

const HomePage = (props: {
  history: { location: { state: { pathSelection: string } } };
}) => {
  interface FeedState extends TweetComponentProps {
    isLoading: boolean;
  }
  const [feedState, setFeedState] = useState<FeedState>({
    isLoading: false,
    noTweets: null,
    listOfTweets: undefined,
  });
  const displayViewSelection = () => {
    const selectedViewType = props.history.location.state.pathSelection;
    switch (selectedViewType) {
      case "Randomize":
        return <ViewRandomTweets />;
      case "Enter handle":
        return <ViewTweetsFrmInputedHandle />;
      case "Pick from subscriptions":
        return <ViewTweetsFrmSubscription />;
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
