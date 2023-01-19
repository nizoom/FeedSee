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
  Divider,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { theme } from "../pages/css/theme";
import "@fontsource/montserrat-alternates";
import useFetchTweets from "../customhooks/fetchtweets";
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
  viewType: string;
}

export const RenderTweetsComponent: React.FC<TweetComponentProps> = ({
  listOfTweets,
  viewType,
}) => {
  if (listOfTweets) {
    // if there are tweets
    const { author } = listOfTweets[0];
    const listTweets = listOfTweets.map((tweet) => {
      return (
        <GridItem justifySelf="center" key={uuidv4()}>
          <TweetCard tweet={tweet} author={tweet.author} />
        </GridItem>
      );
    });

    return (
      <Fade in={listOfTweets.length > 0 ? true : false}>
        {viewType !== "ViewTweetsFrmSubscription" ? (
          <Box gridColumn="span">
            <Text
              fontSize="larger"
              letterSpacing={2}
              fontWeight={600}
              fontFamily={`"Montserrat Alternates", sans-serif`}
              mt={60}
              mb={-70}
              pb={5}
              ml={20}
              // center when screen is narrow
            >
              Current Feed: {author}
            </Text>
          </Box>
        ) : null}
        <SimpleGrid minChildWidth="250px" spacing="60px" mt="100px">
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
            h={65}
            _hover={{
              background: "#42b2d4",
              color: "#B5179E",
              transition: ".25 ease-in",
              fontWeight: "700",
              fontSize: "20px",
              h: "65",
            }}
            onClick={handleSearchInit}
          >
            Randomize
          </Button>
        </Center>

        <ProgressBar isLoading={isLoading} />
        <RenderTweetsComponent
          listOfTweets={tweets}
          viewType="ViewRandomTweets"
        />
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
  const [errStatus, setErrStatus] = useState<boolean>(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const characterInput = event.target.value;
    setInputValue(characterInput);
  };

  const checkIfUsernameIsValid = (handle: string): boolean => {
    const regex = new RegExp("^[a-zA-Z0-9_]*$");
    const isValid: boolean = regex.test(handle) && handle !== "";
    return isValid;
  };
  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyDownIsEnter = event.key === "Enter";
    if (keyDownIsEnter) {
      if (checkIfUsernameIsValid(inputValue)) {
        setErrStatus(false);
        handleSearchInit(inputValue);
      } else {
        setErrStatus(true);
      }
    }
  };

  const handleeSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (checkIfUsernameIsValid(inputValue)) {
      setErrStatus(false);
      handleSearchInit(inputValue);
    } else {
      setErrStatus(true);
    }
  };
  return (
    <Container>
      <Center gap="50px">
        <FormControl isInvalid={errStatus}>
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
            maxLength={15}
            minLength={4}
          />
          <FormErrorMessage
            mt="10px"
            color="#F72585"
            bg="#3A0CA3"
            p={6}
            borderRadius={10}
            position="absolute"
          >
            Only use letters A-Z, numbers, and underscores
          </FormErrorMessage>
        </FormControl>
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
      <RenderTweetsComponent
        listOfTweets={tweets}
        viewType="ViewTweetsFrmInputedHandle"
      />
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
      <RenderTweetsComponent
        listOfTweets={tweets}
        viewType="ViewTweetsFrmSubscription"
      />
    </Container>
  );
};
