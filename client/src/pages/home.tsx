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
  return (
    <Container className="landingpage-wrapper">
      <Logo />
      <SignOutAndGoBackBtns />
      {/* <ViewRandomTweets /> */}
      {/* <ViewTweetsFrmInputedHandle /> */}
      <ViewTweetsFrmSubscription />
    </Container>
  );
};

export default HomePage;
