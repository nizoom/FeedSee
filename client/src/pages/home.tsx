import { Container } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/logo";
import { RandomTweetView } from "../components/homecomponents";

const HomePage = (props: {
  history: { location: { state: { pathSelection: string } } };
}) => {
  return (
    <Container className="landingpage-wrapper">
      <Logo />
      <RandomTweetView />
    </Container>
  );
};

export default HomePage;
