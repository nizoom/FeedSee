import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import { theme } from "../pages/css/theme";
import "@fontsource/montserrat-alternates";
import useFetchTweets from "../customhooks/usefetchtweets";
import TweetCard from "./tweetcard";
import { v4 as uuidv4 } from "uuid";
export interface Tweet {
  author: string;
  content: string;
  date: Date;
}

export const RandomTweetView: React.FC = () => {
  const handleFetchRandomTwts = () => {
    // logic where you get top 100 accounts and select one at random and return tweets
  };
  const testTweet = useFetchTweets("Bob");
  return (
    <Container>
      <Flex direction="column">
        <Center>
          <Button
            bg={theme.colors.DarkPurple}
            borderRadius={30}
            p={20}
            fontFamily={`"Montserrat Alternates", sans-serif`}
            transition=".25s ease-in"
            w={200}
            _hover={{
              background: "#42b2d4",
              color: "#B5179E",
              transition: ".25 ease-in",
              fontWeight: "700",
              fontSize: "20px",
            }}
            onClick={handleFetchRandomTwts}
          >
            Randomize
          </Button>
        </Center>
        <RenderTweetsComponent listOfTweets={testTweet} />
      </Flex>
    </Container>
  );
};

interface TweetComponentProps {
  listOfTweets: Tweet[];
}
export const RenderTweetsComponent: React.FC<TweetComponentProps> = ({
  listOfTweets,
}) => {
  const listTweets = listOfTweets.map((tweet) => {
    return (
      <GridItem justifySelf="center" key={uuidv4()}>
        <TweetCard tweet={tweet} />
      </GridItem>
    );
  });
  return (
    <SimpleGrid
      minChildWidth="250px"
      spacing="40px"
      width="80%"
      m="auto"
      mt="100px"
    >
      {listTweets}
    </SimpleGrid>
  );
};

{
  /* <SimpleGrid minChildWidth="120px" spacing="40px">
<Box bg="tomato" height="80px"></Box>
<Box bg="tomato" height="80px"></Box>
<Box bg="tomato" height="80px"></Box>
<Box bg="tomato" height="80px"></Box>
<Box bg="tomato" height="80px"></Box>
<Box bg="tomato" height="80px"></Box>
<Box bg="tomato" height="80px"></Box>
<Box bg="tomato" height="80px"></Box>
<Box bg="tomato" height="80px"></Box>
</SimpleGrid> */
}
