import React from "react";
import { Button, Center, Container, Flex } from "@chakra-ui/react";
import { theme } from "../pages/css/theme";
import "@fontsource/montserrat-alternates";
import useFetchTweets from "../customhooks/usefetchtweets";

export const RandomTweetView: React.FC = () => {
  const handleFetchRandomTwts = () => {
    // useFetchTweets(twitterHandle);
  };
  return (
    <Container>
      <Center>
        <Button
          bg={theme.colors.DarkPurple}
          borderRadius={30}
          p={20}
          fontFamily={`"Montserrat Alternates", sans-serif`}
          transition=".25s ease-in"
          _hover={{
            background: "#42b2d4",
            color: "#B5179E",
            transition: ".3 ease-in",
            fontWeight: "700",
            fontSize: "20px",
          }}
          onClick={handleFetchRandomTwts}
        >
          Randomize
        </Button>
        <RenderTweetsComponent />
      </Center>
    </Container>
  );
};

export type Tweet = {
  author: string;
  content: string;
  date: Date;
};
export const RenderTweetsComponent: React.FC<Tweet[]> = (props: Tweet[]) => {
  return (
    <Center>
      <Flex></Flex>
    </Center>
  );
};
