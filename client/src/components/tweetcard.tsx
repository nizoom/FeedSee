import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Tweet } from "./homecomponents";
import TwtCrdImage from "../media/tweetcard.png";
import "@fontsource/montserrat-alternates";
import { theme } from "../pages/css/theme";

interface TweetCardProps {
  tweet: Tweet;
}
const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  const [subscribeMenuStatus, setSubscribeMenuStatus] =
    useState<boolean>(false);
  const handleMouseOnCard = () => {
    setSubscribeMenuStatus(true);
  };
  const handleMouseOutOfCard = () => {
    setSubscribeMenuStatus(false);
  };
  return (
    <Container position="relative" ml="2px">
      <Image src={TwtCrdImage} minH="400px" minWidth="300px" />
      <Center w="220px">
        <Card
          top="-300px"
          left="30px"
          fontFamily={`"Montserrat Alternates", sans-serif`}
          onMouseOver={handleMouseOnCard}
          onMouseOut={handleMouseOutOfCard}
        >
          <CardHeader>
            <Heading mb="2%" fontSize="large">
              {tweet.author}
            </Heading>
            <SubscribeMenu active={subscribeMenuStatus} />
            <CardBody>
              <Text fontSize="medium" mb="2%">
                {tweet.content}
              </Text>
              <Text fontSize="small">{tweet.date.toString()}</Text>
            </CardBody>
          </CardHeader>
        </Card>
      </Center>
    </Container>
  );
};

interface SubscribeMenuProps {
  active: boolean;
}
const SubscribeMenu: React.FC<SubscribeMenuProps> = ({ active }) => {
  return (
    <Button
      position="absolute"
      right="-90px"
      top="50%"
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
  );
};

export default TweetCard;
