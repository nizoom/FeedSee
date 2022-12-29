import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/authpages.css";
import OverlappingCards from "../../media/overlappingcards.png";
import {
  Box,
  Flex,
  Image,
  Show,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Stack,
  Container,
  Text,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../../components/logo";
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
              top="1%"
              right="23%"

              // display="inline-block"
              // mt="-110px"
              // mr="-45%"
              // className="overlapping-cards"
            />
          </Show>
        </div>
        {signupForm === "Signup" ? (
          <Flex h="100%" alignItems="center" justifyContent="center" mt="5%">
            <Flex
              flexDirection="column"
              w={350}
              p={35}
              pt={45}
              pb={45}
              borderRadius={16}
              boxShadow="lg"
              bg={theme.colors.TrypanBlueDark}
            >
              <FormControl>
                <Flex direction="column">
                  <FormHelperText letterSpacing="3px" mb="5px" w="60%">
                    Username
                  </FormHelperText>
                  <Input
                    type="text"
                    mb="25px"
                    h="35px"
                    borderRadius={8}
                    backgroundColor="#cbe0e8"
                  />
                  <FormHelperText letterSpacing="3px" mb="5px">
                    Password
                  </FormHelperText>
                  <Input
                    type="password"
                    mb="25px"
                    h="35px"
                    borderRadius={8}
                    backgroundColor="#cbe0e8"
                  />
                  <FormHelperText letterSpacing="3px" mb="5px">
                    Confirm Password
                  </FormHelperText>
                  <Input
                    type="password"
                    mb="25px"
                    h="35px"
                    borderRadius={8}
                    backgroundColor="#cbe0e8"
                  />
                  <Flex
                    gap="20px"
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
        ) : (
          <div className="auth-form-box">
            <form>
              <div className="input-div">
                <label>Username</label>
                <input type="text" className="auth-input" />
              </div>
              <div className="input-div">
                <label>Password</label>
                <input type="password" className="auth-input" />
              </div>
              <button type="submit" className="auth-form-btn">
                <p> Login</p>
              </button>
              <button
                type="submit"
                className="auth-form-btn go-back"
                onClick={goBack}
              >
                <p>Go back </p>
              </button>
            </form>
          </div>
        )}
      </Box>
    </div>
  );
};

export default AuthPages;

{
  /* <form>
                <div className="input-div">
                  <label>Username</label>
                  <input type="text" className="auth-input" autoFocus />
                </div>
                <div className="input-div">
                  <label>Password</label>
                  <input type="password" className="auth-input" />
                </div>
                <div className="input-div">
                  <label>Confirm Password</label>
                  <input type="password" className="auth-input" />
                </div>

                <button type="submit" className="auth-form-btn">
                  <p>Sign Up </p>
                </button>
                <button
                  type="button"
                  className="auth-form-btn go-back"
                  onClick={goBack}
                >
                  <p>Go back </p>
                </button>
              </form> */
}
