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
  Text,
  Box,
} from "@chakra-ui/react";
import { theme } from "../pages/css/theme";
import "@fontsource/montserrat-alternates";
import useFetchTweets from "../customhooks/usefetchtweets";
import TweetCard from "./tweetcard";
import ProgressBar from "./progressbar";
import SubsList from "./subslist";
import { v4 as uuidv4 } from "uuid";

export interface Tweet {
  author: string;
  content: string;
  date: Date;
}

export interface TweetComponentProps {
  listOfTweets: Tweet[] | undefined;
}

export const RenderTweetsComponent: React.FC<TweetComponentProps> = ({
  listOfTweets,
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
  } // else return none found msg IMPLEMENT LATER
  return null;
};
interface TweetViewFuncs {
  handleSearchInit: (string) => void;
  isLoading: boolean;
  tweets: Tweet[] | undefined;
}
export const ViewRandomTweets: React.FC<TweetViewFuncs> = ({
  handleSearchInit,
  isLoading,
  tweets,
}) => {
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
            onClick={handleSearchInit}
          >
            Randomize
          </Button>
        </Center>
        <ProgressBar isLoading={isLoading} />
        <RenderTweetsComponent listOfTweets={tweets} />
      </Flex>
    </Container>
  );
};

export const ViewTweetsFrmInputedHandle: React.FC<TweetViewFuncs> = ({
  handleSearchInit,
  isLoading,
  tweets,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const characterInput = event.target.value;
    setInputValue(characterInput);
  };

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyDownIsEnter = event.key === "Enter";
    if (keyDownIsEnter && inputValue !== "") {
      handleSearchInit(inputValue);
    }
  };

  const handleeSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputValue !== "") {
      handleSearchInit(inputValue);
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
      <RenderTweetsComponent listOfTweets={tweets} />
    </Container>
  );
};

export const ViewTweetsFrmSubscription: React.FC<TweetViewFuncs> = ({
  handleSearchInit,
  isLoading,
  tweets,
}) => {
  const temporaryNames = ["Lebron", "Rihanna", "Conan", "Cleetus", "ryyde"];
  const [currentlyViewing, setCurrentlyViewing] = useState<string>("");

  const getSelectionFromChildComp = (sub: string) => {
    setCurrentlyViewing(sub);
    handleSearchInit(sub);
  };

  return (
    <Container>
      <Center position={"relative"} zIndex="10">
        <Flex direction="row-reverse" gap={40}>
          <SubsList
            listOfSubs={temporaryNames}
            sendSelectionToParent={getSelectionFromChildComp}
          />
          <Box bg="#4895EF" p={10} w="200px">
            <Text>{currentlyViewing} </Text>
          </Box>
        </Flex>
      </Center>
      <ProgressBar isLoading={isLoading} />
      <RenderTweetsComponent listOfTweets={tweets} />
    </Container>
  );
};
