import React from "react";
import { Text, Heading, ChakraProvider } from "@chakra-ui/react";
import { theme } from "../pages/css/theme";
import "@fontsource/hind";
import "@fontsource/montserrat-alternates";

const Logo: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      {/* <Heading fontFamily={theme.fonts.primary}>FeedSee</Heading> */}
      <Heading sx={theme.heading}>FeedSee</Heading>
    </ChakraProvider>
  );
};

export default Logo;
