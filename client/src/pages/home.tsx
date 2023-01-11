import { Container, Progress } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/logo";
import {
  ViewRandomTweets,
  ViewTweetsFrmInputedHandle,
} from "../components/homecomponents";

const HomePage = (props: {
  history: { location: { state: { pathSelection: string } } };
}) => {
  return (
    <Container className="landingpage-wrapper">
      <Logo />
      <ViewRandomTweets />
      {/* <ViewTweetsFrmInputedHandle /> */}
    </Container>
  );
};

export default HomePage;
