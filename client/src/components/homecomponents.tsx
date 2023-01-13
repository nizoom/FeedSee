import React, { useState, useEffect } from "react";
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

export interface TweetComponentProps {
  listOfTweets: Tweet[] | undefined;
  noTweets: null;
}

export const RenderTweetsComponent: React.FC<TweetComponentProps> = ({
  listOfTweets,
  noTweets,
}) => {
  if (listOfTweets) {
    // if there are tweets
    const listTweets = listOfTweets.map((tweet) => {
      return (
        <GridItem justifySelf="center" key={uuidv4()}>
          <TweetCard tweet={tweet} author={tweet.author} />
        </GridItem>
      );
    });

    return (
      <Fade in={listOfTweets.length > 0 ? true : false}>
        <SimpleGrid
          minChildWidth="250px"
          spacing="60px"
          width="80%"
          m="auto"
          mt="100px"
        >
          {listTweets}
        </SimpleGrid>
      </Fade>
    );
  } // else
  return noTweets;
};

export const ViewRandomTweets: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listOfTweetsState, setListOfTweetsState] = useState<
    TweetComponentProps["listOfTweets"] | undefined
  >();

  const returnTestTweets = useFetchTweets();

  useEffect(() => {
    if (isLoading) {
      setListOfTweetsState(undefined);
      setTimeout(async () => {
        // replace setTimeout with named function
        console.log("getting tweets");
        // const testTweets = await returnTestTweets();
        setListOfTweetsState(returnTestTweets);
        setIsLoading(false);
      }, 4000);
    }
  }, [isLoading]);
  const handleFetchRandomTwts = () => {
    setListOfTweetsState(undefined);
    setIsLoading(true);
    // useEffect is triggered and handles the rest
  };

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
        <ProgressBar isLoading={isLoading} />
        <RenderTweetsComponent
          listOfTweets={listOfTweetsState}
          noTweets={null}
        />
      </Flex>
    </Container>
  );
};

export const ViewTweetsFrmInputedHandle: React.FC = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [listOfTweetsState, setListOfTweetsState] = useState<
    TweetComponentProps["listOfTweets"] | undefined
  >();

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyDownIsEnter = event.key === "Enter";
    if (keyDownIsEnter && inputValue !== "") {
      setIsLoading(true);
      // begin search
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const characterInput = event.target.value;
    setInputValue(characterInput);
  };
  const returnTestTweets = useFetchTweets();
  const handleeSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputValue !== "") {
      setIsLoading(true);
      setListOfTweetsState(undefined);
      setTimeout(async () => {
        // replace setTimeout with named function
        console.log("getting tweets");
        // const testTweets = await returnTestTweets();
        setListOfTweetsState(returnTestTweets);
        setIsLoading(false);
      }, 4000);
    } else {
      // please enter a handle modal
    }
  };
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
          onKeyDown={handleEnterKey}
          onChange={(event) => handleInputChange(event)}
          value={inputValue}
        />
        <Button
          type="submit"
          p={15}
          borderRadius={20}
          transition=".25s ease-in"
          fontWeight={400}
          fontSize="small"
          bg={theme.colors.DodgerBlue}
          color="white"
          w="90px"
          h="50px"
          _hover={{
            color: "#4895EF",
            backgroundColor: "#9437D1",
            transition: ".25 ease-in",
            fontSize: "medium",
            w: "90px",
            h: "50px",
            fontWeight: "500",
          }}
          onClick={handleeSubmit}
        >
          Submit
        </Button>
      </Center>
      <ProgressBar isLoading={isLoading} />
      <RenderTweetsComponent listOfTweets={listOfTweetsState} noTweets={null} />
    </Container>
  );
};

export const ViewTweetsFrmInputedSubscription: React.FC = () => {
  return <Container></Container>;
};
