import { Container } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/logo";
import {
  ViewRandomTweets,
  ViewTweetsFrmInputedHandle,
  ViewTweetsFrmSubscription,
} from "../components/homecomponents";
import SignOutAndGoBackBtns from "../components/signout&back";

const HomePage = (props: {
  history: { location: { state: { pathSelection: string } } };
}) => {
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
