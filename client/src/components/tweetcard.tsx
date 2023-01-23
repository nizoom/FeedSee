import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Fade,
  Heading,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Tweet } from "./homecomponents";
import TwtCrdImage from "../media/tweetcard.png";
import "@fontsource/montserrat-alternates";
import { theme } from "../pages/css/theme";

interface TweetCardProps {
  tweet: Tweet;
}
const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  console.log(tweet);
  const [subscribeMenuStatus, setSubscribeMenuStatus] =
    useState<boolean>(false);
  const handleMouseOnCard = () => {
    setSubscribeMenuStatus(true);
  };
  const closeMenu = () => {
    setSubscribeMenuStatus(false);
  };

  return (
    <Container position="relative" ml="2px">
      <Image src={TwtCrdImage} minH="400px" minWidth="300px" />
      <Center w="220px" onMouseOver={handleMouseOnCard} onMouseOut={closeMenu}>
        <Card
          top="-340px"
          left="30px"
          fontFamily={`"Montserrat Alternates", sans-serif`}
        >
          <CardHeader>
            <Heading mb="5%" fontSize="large">
              {tweet.author}
            </Heading>
            <SubscribeMenu
              active={subscribeMenuStatus}
              author={tweet.author}
              closeMenuWithCancel={closeMenu}
              profileUrl={tweet.profileUrl}
            />
            <CardBody overflow="scroll" height="275px">
              <Text fontSize="medium" mb="4%">
                {tweet.text}
              </Text>
              <Text fontSize="small">{tweet.timeStamp}</Text>
            </CardBody>
          </CardHeader>
        </Card>
      </Center>
    </Container>
  );
};

interface SubscribeMenuProps {
  active: boolean;
  author: string;
  closeMenuWithCancel: () => void;
  profileUrl: string;
}
const SubscribeMenu: React.FC<SubscribeMenuProps> = ({
  active,
  author,
  closeMenuWithCancel,
  profileUrl,
}) => {
  const [checkmarkStatus, setCharkMarkStatus] = useState<boolean>(false);
  const handleSubscribeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCharkMarkStatus(true);
    setTimeout(() => {
      setCharkMarkStatus(false);
    }, 1500);
  };
  const closeMenuBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    closeMenuWithCancel();
  };
  return (
    <Fade in={active}>
      <Popover placement="left">
        <PopoverTrigger>
          <Button
            position="absolute"
            right="-70px"
            top="40%"
            bg={theme.colors.DodgerBlue}
            borderRadius="50%"
            w="45px"
            h="45px"
            fontSize={25}
            color="#B5179E"
            boxShadow="1px 1px 4px #3D077C"
          >
            +
          </Button>
        </PopoverTrigger>
        <PopoverContent bg="black" mb="20px" borderRadius={30}>
          <PopoverArrow />
          <PopoverBody p={20} bg="#7209B7" borderRadius={30}>
            <Flex direction="column" gap={15}>
              <Button
                bg="#B5179E"
                p={20}
                borderRadius={10}
                fontSize="medium"
                _hover={{
                  bg: "#3A0CA3",
                }}
                onClick={handleSubscribeClick}
              >
                Subscribe to {author}
              </Button>
              <Button
                bg="#B5179E"
                p={20}
                borderRadius={10}
                fontSize="medium"
                _hover={{
                  bg: "#3A0CA3",
                }}
              >
                <a href={profileUrl} target="_blank" rel="noreferrer">
                  Visit {author}{" "}
                </a>
              </Button>
              <Button
                bg="#F72585"
                p={15}
                borderRadius={10}
                fontSize="small"
                _hover={{
                  bg: "#3A0CA3",
                }}
                onClick={closeMenuBtn}
              >
                Close
              </Button>
              <Fade in={checkmarkStatus}>
                <CheckCircleIcon
                  color="#2BF1AF"
                  boxSize={40}
                  position="absolute"
                  top="0px"
                  right="-10px"
                />
              </Fade>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Fade>
  );
};

export default TweetCard;
