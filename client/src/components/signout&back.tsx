import { SmallCloseIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../firebasefuncs";

const SignOutAndGoBackBtns: React.FC = () => {
  const history = useHistory();
  const handleSignout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await logout();
    history.push("/auth");
  };
  const handleBackBtn = () => {
    history.push("/mainmenu");
  };
  return (
    <Flex position="absolute" top="10px" right="1%" gap={30}>
      <Button
        border="2px solid white"
        borderRadius={8}
        p={5}
        title="Back to main menu"
        _hover={{
          border: "2px solid #7209B7",
          transition: ".25s ease-in",
        }}
        onClick={handleBackBtn}
      >
        <ArrowBackIcon boxSize={24} />
      </Button>
      <Button
        border="2px solid white"
        borderRadius={8}
        p={5}
        title="Sign out"
        _hover={{
          border: "2px solid #7209B7",
          transition: ".25s ease-in",
        }}
        onClick={handleSignout}
      >
        <SmallCloseIcon boxSize={24} />
      </Button>
    </Flex>
  );
};

export default SignOutAndGoBackBtns;
