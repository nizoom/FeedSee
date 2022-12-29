import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/authpages.css";
import OverlappingCards from "../../media/overlappingcards.png";
import {
  Box,
  Flex,
  Image,
  Show,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center,
} from "@chakra-ui/react";
import Logo from "../../components/logo";
import { AuthFormInput, AuthFormLabel } from "../../components/inputs+labels";
import { theme } from "../css/theme";
const AuthPages = (props: {
  history: { location: { state: { loginOrSignup: string } } };
}) => {
  const [signupForm, setSignupForm] = useState("");
  const history = useHistory();

  useEffect(() => {
    const userHasRefreshed = props.history.location.state;
    if (userHasRefreshed) {
      const userDecision = props.history.location.state.loginOrSignup;
      setSignupForm(userDecision);
    } else {
      // go back to landing page on refresh
      history.push("/");
    }
  }, [props]);

  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="auth-page-wrapper">
      <Logo />
      <Box>
        <div>
          <Show above="1100px">
            <Image
              src={OverlappingCards}
              position="absolute"
              top="2%"
              right="23%"
            />
          </Show>
        </div>
        {signupForm === "Signup" ? (
          <div>
            <Center>
              <FormLabel
                mr="360px"
                mb="25px"
                p={7}
                bg={theme.colors.TrypanBlueDark}
                borderRadius={8}
                letterSpacing="2px"
              >
                Sign Up
              </FormLabel>
            </Center>

            <Flex h="100%" alignItems="center" justifyContent="center" mt="2%">
              <Flex
                flexDirection="column"
                w={450}
                p={35}
                pt={45}
                pb={45}
                mt="-2%"
                borderRadius={18}
                boxShadow="lg"
                bg={theme.colors.TrypanBlueDark}
              >
                <FormControl>
                  <Flex direction="column">
                    <AuthFormLabel labelName="Username" />
                    <AuthFormInput inputType="text" />
                    <AuthFormLabel labelName="Password" />
                    <AuthFormInput inputType="password" />
                    <AuthFormLabel labelName="Confirm Password" />
                    <AuthFormInput inputType="password" />
                    <Flex
                      gap="40px"
                      justify="center"
                      direction="column"
                      mt="10px"
                    >
                      <Button
                        sx={theme.buttons}
                        h="40px"
                        letterSpacing="3px"
                        w="70%"
                        m="auto"
                      >
                        Submit
                      </Button>
                      <Button
                        sx={theme.buttons}
                        h="40px"
                        letterSpacing="3px"
                        w="70%"
                        m="auto"
                        onClick={goBack}
                      >
                        Go back
                      </Button>
                    </Flex>
                  </Flex>
                </FormControl>
              </Flex>
            </Flex>
          </div>
        ) : (
          <div>
            <Center>
              <FormLabel
                mr="380px"
                mb="35px"
                p={7}
                bg={theme.colors.TrypanBlueDark}
                borderRadius={8}
                letterSpacing="2px"
              >
                Login
              </FormLabel>
            </Center>

            <Flex h="100%" alignItems="center" justifyContent="center" mt="2%">
              <Flex
                flexDirection="column"
                w={450}
                p={35}
                pt={45}
                pb={45}
                mt="-2%"
                borderRadius={18}
                boxShadow="lg"
                bg={theme.colors.TrypanBlueDark}
              >
                <FormControl>
                  <Flex direction="column">
                    <AuthFormLabel labelName="Username" />
                    <AuthFormInput inputType="text" />
                    <AuthFormLabel labelName="Password" />
                    <AuthFormInput inputType="password" />

                    <Flex
                      gap="40px"
                      justify="center"
                      direction="column"
                      mt="10px"
                    >
                      <Button
                        sx={theme.buttons}
                        h="40px"
                        letterSpacing="3px"
                        w="70%"
                        m="auto"
                      >
                        Login
                      </Button>
                      <Button
                        sx={theme.buttons}
                        h="40px"
                        letterSpacing="3px"
                        w="70%"
                        m="auto"
                        onClick={goBack}
                      >
                        Go back
                      </Button>
                    </Flex>
                  </Flex>
                </FormControl>
              </Flex>
            </Flex>
          </div>
        )}
      </Box>
    </div>
  );
};

export default AuthPages;
