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
  PopoverAnchor,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Tweet } from "./homecomponents";
import TwtCrdImage from "../media/tweetcard.png";
import "@fontsource/montserrat-alternates";
import { theme } from "../pages/css/theme";

interface TweetCardProps {
  tweet: Tweet;
  author: string;
}
const TweetCard: React.FC<TweetCardProps> = ({ tweet, author }) => {
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
      <Center
        w="220px"
        onMouseOver={handleMouseOnCard}
        onMouseOut={handleMouseOutOfCard}
      >
        <Card
          top="-300px"
          left="30px"
          fontFamily={`"Montserrat Alternates", sans-serif`}
        >
          <CardHeader>
            <Heading mb="2%" fontSize="large">
              {tweet.author}
            </Heading>
            <SubscribeMenu active={subscribeMenuStatus} author={author} />
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
  author: string;
}
const SubscribeMenu: React.FC<SubscribeMenuProps> = ({ active, author }) => {
  const [checkmarkStatus, setCharkMarkStatus] = useState<boolean>(true);
  const handleSubscribeClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <Fade in={active}>
      <Popover placement="left">
        <PopoverTrigger>
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
        </PopoverTrigger>
        {/* <Portal backgroundColor="black"> */}
        <PopoverContent bg="black" mb="20px" borderRadius={30}>
          <PopoverArrow />
          <PopoverBody p={20} bg="#7209B7" borderRadius={30}>
            <Flex direction="column" gap={15}>
              <Button
                bg="#B5179E"
                p={20}
                borderRadius={10}
                fontSize="large"
                _hover={{
                  bg: "#3A0CA3",
                }}
                onClick={handleSubscribeClick}
              >
                Subscribe to {author}
              </Button>
              <Button
                bg="#F72585"
                p={15}
                borderRadius={10}
                fontSize="small"
                _hover={{
                  bg: "#3A0CA3",
                }}
              >
                Cancel
              </Button>
              {/* <Fade in={}>

              </Fade> */}
            </Flex>
          </PopoverBody>
        </PopoverContent>
        {/* </Portal> */}
      </Popover>
    </Fade>
  );
};

export default TweetCard;
