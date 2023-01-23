import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../components/logo";
import { theme } from "./css/theme";
import "@fontsource/montserrat-alternates";
import "./css/landingpage.css";
type FeatureContent = {
  title: string;
  desc: string;
};

const Feature: React.FC<FeatureContent> = (props: FeatureContent) => {
  const history = useHistory();
  const handleFeatureClick = (selectionTitle) => {
    history.push({
      pathname: "/homepage",
      state: { pathSelection: selectionTitle },
    });
  };
  return (
    <Box
      borderRadius={7}
      p={5}
      shadow="md"
      color="white"
      minW="100%"
      cursor="pointer"
      onClick={() => handleFeatureClick(props.title)}
      _hover={{
        background: "#4895EF",
        color: "white",
      }}
    >
      <Heading
        fontSize="20px"
        fontFamily={`"Montserrat Alternates", sans-serif`}
        fontWeight="600"
        letterSpacing="1px"
      >
        {props.title}
      </Heading>
      <Text mt={4}>{props.desc}</Text>
    </Box>
  );
};
const MainMenu: React.FC = () => {
  return (
    <Container className="landingpage-wrapper">
      <Logo handle={""} />
      <Center mt={120}>
        <Heading
          as="h1"
          fontSize="25px"
          mr="285px"
          pl={10}
          pr={10}
          pt={5}
          pb={5}
          bg={theme.colors.DarkPurple}
          fontFamily={`"Montserrat Alternates", sans-serif`}
          borderRadius={8}
          fontWeight="500"
        >
          Pick a path
        </Heading>
      </Center>
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="center"
        mt={30}
        direction="column"
      >
        <Flex
          flexDirection="column"
          w={450}
          p={35}
          pt={45}
          pb={45}
          borderRadius={8}
          boxShadow="lg"
          bg={theme.colors.DarkPurple}
        >
          <VStack>
            <Feature
              title="Randomize"
              desc="See the feed of a random public figure"
            />
            <Divider orientation="horizontal" border="1px solid #B5179E" />
            <Feature
              title="Enter handle"
              desc="See the feed from a specific account"
            />
            <Divider orientation="horizontal" border="1px solid #B5179E" />
            <Feature
              title="Pick from subscriptions"
              desc="Select from your list of faves"
            />
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MainMenu;
