import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { ChevronDownIcon, DeleteIcon } from "@chakra-ui/icons";
import { deleteSubscription } from "../firestorefuncs";
import { getAuth } from "firebase/auth";
const auth = getAuth();

interface SubsListProps {
  listOfSubs: string[] | undefined;
  sendSelectionToParent: (string) => any;
  refreshSubsList: () => void;
}
const SubsList: React.FC<SubsListProps> = ({
  listOfSubs,
  sendSelectionToParent,
  refreshSubsList,
}) => {
  const handleMenuSelection = (sub: string) => {
    sendSelectionToParent(sub);
  };
  if (!listOfSubs) {
    return null;
  }
  //type checking
  const arrayOfSubs = listOfSubs[0];
  if (!Array.isArray(arrayOfSubs)) {
    return null;
  }

  //   uid: string | undefined,
  // subToRemove: string,
  // originalSubsList: string[]
  const handleDeleteClick = (subToRemove: string) => {
    const currentUser = auth.currentUser;
    deleteSubscription(currentUser?.uid, subToRemove, arrayOfSubs);
    refreshSubsList();
  };
  const generateSubsListHtml = arrayOfSubs.map((sub) => {
    return (
      <div key={uuidv4()} style={{ margin: "0 10% 10% 10%" }}>
        <MenuItem
          display="flex"
          justifyContent="space-between"
          m="auto"
          w="100%"
          mb="20px"
          backgroundColor="#4895EF"
          h="40px"
          boxShadow="2px 1px 5px #458ADA"
        >
          <Text ml="10px" onClick={() => handleMenuSelection(sub)}>
            {sub}
          </Text>
          <DeleteIcon
            onClick={() => handleDeleteClick(sub)}
            paddingRight={4}
            color="purple"
            w="50"
            _hover={{
              color: "red",
            }}
          />
        </MenuItem>
      </div>
    );
  });

  return (
    <Menu>
      <MenuButton
        borderRadius={4}
        w="200px"
        as={Button}
        bg="#4895EF"
        rightIcon={<ChevronDownIcon color="rgba(75,11,116,1)" boxSize={36} />}
      >
        Subscriptions
      </MenuButton>
      <MenuList
        bg="linear-gradient(90deg, rgba(72, 149, 239 ,1) 0%, rgba(66,97,238,1) 100%)"
        w="250px"
        pt="20px"
        pb=".1%"
        borderRadius={4}
      >
        {generateSubsListHtml}
      </MenuList>
    </Menu>
  );
};

export default SubsList;
