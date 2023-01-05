import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Tweet } from "./homecomponents";
import TwtCrdImage from "../media/tweetcard.png";
import "@fontsource/montserrat-alternates";

interface TweetCardProps {
  tweet: Tweet;
}
const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  return (
    <Container position="relative" ml="2px">
      <Image src={TwtCrdImage} minH="400px" minWidth="300px" />
      <Center w="220px">
        <Card
          top="-300px"
          left="30px"
          fontFamily={`"Montserrat Alternates", sans-serif`}
        >
          <CardHeader>
            <Heading mb="2%" fontSize="large">
              {tweet.author}
            </Heading>
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

export default TweetCard;
