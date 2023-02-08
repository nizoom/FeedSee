import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../components/logo";
import {
  Tweet,
  ViewRandomTweets,
  ViewTweetsFrmInputedHandle,
  ViewTweetsFrmSubscription,
} from "../components/homecomponents";
import SignOutAndGoBackBtns from "../components/signout&back";
import { FetchTweets, ReturnbObject } from "../components/fetchtweets";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createUserInFirestore, getSubsList } from "../firestorefuncs";
const HomePage = (props: {
  history: { location: { state: { pathSelection: string } } };
}) => {
  interface FeedState {
    isLoading: boolean;
    listOfTweets: Tweet[] | undefined;
    handle: string;
    err: string;
  }
  const [feedState, setFeedState] = useState<FeedState>({
    isLoading: false,
    listOfTweets: undefined,
    handle: "",
    err: "",
  });
  const auth = getAuth();
  const [loadedSubscriptions, setLoadedSuscriptions] = useState<boolean>(false);
  const [listOfSubs, setListOfSubs] = useState<string[]>([]);
  React.useEffect(() => {
    if (!loadedSubscriptions) {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (currentUser) {
        (async () => {
          console.log("checking db");
          const uid = currentUser.uid;
          const { userExists, subs } = await getSubsList(uid);
          if (userExists) {
            setListOfSubs(subs);
          } else {
            createUserInFirestore(currentUser.email, currentUser.uid);
          }
        })();
      }
      setLoadedSuscriptions(true);
    }
  });
  const refreshSubsList = async () => {
    const currentUser = auth.currentUser;
    const { subs } = await getSubsList(currentUser?.uid);
    setListOfSubs(subs);
  };

  const handleSearchInit = async (handle: string = "randomizesearch") => {
    // init fetch logic
    console.log("loading");
    setFeedState({
      isLoading: true,
      listOfTweets: undefined,
      handle: "",
      err: "",
    });
    setTimeout(async () => {
      const fetchResponse = await FetchTweets(handle);
      const { data, responseStatus } = fetchResponse as ReturnbObject;
      if (responseStatus === 200) {
        const tweets = JSON.parse(data);

        setFeedState({
          isLoading: false,
          err: "",
          listOfTweets: handle === "randomizesearch" ? tweets[0] : tweets,
          handle: handle === "randomizesearch" ? tweets[1] : handle,
        });
      } else {
        const errMsg = data;
        setFeedState({
          isLoading: false,
          err: errMsg,
          listOfTweets: undefined,
          handle: "",
        });
        setTimeout(() => {
          //remoing err message
          setFeedState({
            isLoading: false,
            err: "",
            listOfTweets: undefined,
            handle: "",
          });
        }, 3000);
      }
    }, 2000);
  };
  const displayViewSelection = () => {
    const selectedViewType = props.history.location.state.pathSelection;
    switch (selectedViewType) {
      case "Randomize":
        return (
          <ViewRandomTweets
            refreshSubsList={refreshSubsList}
            handleSearchInit={handleSearchInit}
            isLoading={feedState.isLoading}
            tweets={feedState.listOfTweets}
            errMsg={feedState.err}
          />
        );
      case "Enter handle":
        return (
          <ViewTweetsFrmInputedHandle
            refreshSubsList={refreshSubsList}
            handleSearchInit={handleSearchInit}
            isLoading={feedState.isLoading}
            tweets={feedState.listOfTweets}
            errMsg={feedState.err}
          />
        );
      case "Pick from subscriptions":
        return (
          <ViewTweetsFrmSubscription
            handleSearchInit={handleSearchInit}
            isLoading={feedState.isLoading}
            tweets={feedState.listOfTweets}
            errMsg={feedState.err}
            listOfSubs={listOfSubs}
            refreshSubsList={refreshSubsList}
          />
        );
    }
  };
  return (
    <Container className="landingpage-wrapper">
      <Logo handle={feedState.handle} />
      <SignOutAndGoBackBtns />
      {displayViewSelection()}
    </Container>
  );
};

export default HomePage;
