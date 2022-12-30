import { Container } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/logo";

type SelectedPath = {
  selectedPath: string;
};
const HomePage: React.FC<SelectedPath> = (props: SelectedPath) => {
  return (
    <Container className="landingpage-wrapper">
      <Logo />
    </Container>
  );
};

export default HomePage;
