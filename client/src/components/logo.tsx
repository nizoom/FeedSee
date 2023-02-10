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
      <style>
        {`  @media (max-width: 600px){
            .responsive-logo{
              width: 50vw;
              margin: auto;
            }
          }
          @media(max-width: 600px){
            .logo-mobile{
              display: none
            }
            .handle{
              width: 108%;
              margin: 40px  auto ;
              transform: translateY-50%);
              text-align: center;
            }
          }
        }`}
      </style>
      <div className="responsive-logo">
        {handle ? (
          <Flex alignItems={"center"}>
            <Heading
              mr="-10px"
              fontSize={{ base: "16px", md: "24x", lg: "39.06px" }}
              className="logo-mobile"
              sx={theme.heading}
            >
              FeedSee:
            </Heading>
            <Text
              fontFamily={`"Montserrat Alternates", sans-serif`}
              fontSize={{ base: "16px", md: "24x", lg: "30px" }}
              display="inline-block"
              pt="0"
              alignSelf={"center"}
              fontWeight="500"
              letterSpacing="6px"
              className="handle"
            >
              {handle}
            </Text>
          </Flex>
        ) : (
          <Text
            sx={theme.heading}
            fontSize={{ base: "16px", md: "24x", lg: "39.06px" }}
          >
            FeedSee
          </Text>
        )}
      </div>
    </ChakraProvider>
  );
};

export default Logo;
