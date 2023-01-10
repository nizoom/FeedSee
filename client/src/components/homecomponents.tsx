import React from "react";
import {
  Button,
  Center,
  Container,
  Flex,
  GridItem,
  Input,
  SimpleGrid,
  Fade,
} from "@chakra-ui/react";
import { theme } from "../pages/css/theme";
import "@fontsource/montserrat-alternates";
import useFetchTweets from "../customhooks/usefetchtweets";
import TweetCard from "./tweetcard";
import ProgressBar from "./progressbar";
import { v4 as uuidv4 } from "uuid";
export interface Tweet {
  author: string;
  content: string;
  date: Date;
}

export const ViewRandomTweets: React.FC = () => {
  const handleFetchRandomTwts = () => {
    // should add returning type tweet object
    // logic where you get top 100 accounts and select one at random and return tweets
  };
  const handleFetchTweetsFromHandle = (handle: string) => {
    // should add returning type tweet object /
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

export const ViewTweetsFrmInputedHandle: React.FC = ({}) => {
  const testTweet = useFetchTweets("Bob");
  return (
    <Container>
      <Center gap="50px">
        <Input
          variant="flushed"
          placeholder="Enter handle"
          textIndent="10px"
          color="white"
          bg={theme.colors.DodgerBlue}
          height="50px"
          _placeholder={{ color: "white", fontSize: "smaller" }}
          borderRadius={10}
        />
        <Button
          type="submit"
          bg={theme.colors.DodgerBlue}
          p={15}
          borderRadius={30}
          fontSize="smaller"
          transition=".25s ease-in"
          _hover={{
            background: "#42b2d4",
            color: "#B5179E",
            transition: ".25 ease-in",
            fontWeight: "700",
            fontSize: "small",
          }}
        >
          {" "}
          Submit{" "}
        </Button>
      </Center>
      <ProgressBar />
      <RenderTweetsComponent listOfTweets={testTweet} />
    </Container>
  );
};
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
      spacing="60px"
      width="80%"
      m="auto"
      mt="100px"
    >
      {listTweets}
    </SimpleGrid>
  );
};
