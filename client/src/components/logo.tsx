import React from "react";
import { Text, Heading, ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../pages/css/theme";
import "@fontsource/hind";
import "@fontsource/montserrat-alternates";

interface LogoProps {
  handle: string;
}
const Logo: React.FC<LogoProps> = ({ handle }) => {
  return (
    <ChakraProvider theme={theme}>
      {handle ? (
        <Flex alignItems={"center"}>
          <Heading sx={theme.heading} mr="-10px">
            FeedSee
          </Heading>
          <Text
            fontFamily={`"Montserrat Alternates", sans-serif`}
            fontSize={"30px"}
            display="inline-block"
            pt="0"
            alignSelf={"center"}
            fontWeight="500"
            letterSpacing="8px"
          >
            - {handle}
          </Text>
        </Flex>
      ) : (
        <Heading sx={theme.heading}>FeedSee</Heading>
      )}
    </ChakraProvider>
  );
};

export default Logo;
