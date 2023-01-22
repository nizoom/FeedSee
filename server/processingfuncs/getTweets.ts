import { validHandleObj } from "./validatehandle";
import { NextFunction } from "express";
import twitterClient from "./twitterClient";
import { TweetV2, UserV2 } from "twitter-api-v2";

export interface fullTweetObject {
  name: string;
  username: string;
  text: string;
  profileUrl: string;
  timeStamp: Date | null;
}
export const getTweetsFromFollowed = async (
  followedUsers: validHandleObj[] | undefined,
  next: NextFunction
) => {
  if (!followedUsers) {
    return;
  }
  const listOfFolowedUsernames: string[] = followedUsers?.map(
    (user) => `from:${user.username}`
  );
  const wholeStringOfFollowedAccs = listOfFolowedUsernames.join(" OR ");
  const followedAccsQuery = cutAndReturnQueryString(wholeStringOfFollowedAccs);
  const idsOfRecentTweetFromFollowedUsers =
    await getidsOfRecentTweetFromFollowedUsers(followedAccsQuery, next);
  if (!idsOfRecentTweetFromFollowedUsers) {
    next("Could not find followed accounts. Please try a different handle");
    return;
  }
  const listOfTweetsAndListOfUsers = await getlistOfTweetsAndListOfUsers(
    idsOfRecentTweetFromFollowedUsers,
    next
  );
  if (
    !listOfTweetsAndListOfUsers?.data ||
    !listOfTweetsAndListOfUsers.includes?.users
  ) {
    next("Error occured while fetching tweets");
    return;
  }

  const [tweetsMetaData, authorMetaData] = [
    listOfTweetsAndListOfUsers.data,
    listOfTweetsAndListOfUsers.includes.users,
  ];
  const listOfTweetObjectsWithAuthorData = matchUpTweetsWithTheirAuthor(
    tweetsMetaData,
    authorMetaData
  );
  return listOfTweetObjectsWithAuthorData;
};

// the length limit for rules on Twitter's API is 512
const cutAndReturnQueryString = (wholeString: string): string => {
  //  // "from:JoeBiden OR from:susan_daitch"
  const hardCutOffAt512 = wholeString.slice(0, 513);
  const indexOfLastOrStatement = hardCutOffAt512.lastIndexOf("OR");
  const syntacticallyCorrectShortenedQueryString = hardCutOffAt512.slice(
    0,
    indexOfLastOrStatement - 1
  );
  return syntacticallyCorrectShortenedQueryString;
};

// https://api.twitter.com/2/tweets?expansions=author_id&user.fields=username,name&ids=1616935003832582150,1616958246241316865

const getidsOfRecentTweetFromFollowedUsers = async (
  followedAccsQuery: string,
  next: NextFunction
) => {
  try {
    const tweetResponseObj = await twitterClient().v2.search(followedAccsQuery);
    const idsOfRecentTweetFromFollowedUsers: string[] =
      tweetResponseObj.data.data.map((tweetObj) => tweetObj.id);
    return idsOfRecentTweetFromFollowedUsers;
  } catch (err: unknown) {
    if (err instanceof Error) {
      next(err);
    }
  }
};

const getlistOfTweetsAndListOfUsers = async (
  idsOfRecentTweetFromFollowedUsers: string[],
  next: NextFunction
) => {
  try {
    const listOfTweetsAndListOfUsers = await twitterClient().v2.tweets(
      idsOfRecentTweetFromFollowedUsers,
      {
        expansions: ["author_id"],
        "tweet.fields": ["created_at", "author_id"],
        "user.fields": ["name", "username"],
      }
    );
    return listOfTweetsAndListOfUsers;
  } catch (err: unknown) {
    if (err instanceof Error) {
      next(err);
    }
  }
};

//iterate over tweetsMetaData and find the matching author -> then add user and username to the tweetObj
const matchUpTweetsWithTheirAuthor = (
  tweetsMetaData: TweetV2[],
  authorMetaData: UserV2[]
) => {
  const listOfTweetObjectsWithAuthorData = tweetsMetaData.map((tweet) => {
    const [matchingAuthor] = authorMetaData.filter(
      (authorObj) => authorObj.id === tweet.author_id
    );
    return {
      name: matchingAuthor.name,
      username: matchingAuthor.username,
      text: tweet.text,
      profileUrl: `https://twitter.com/${matchingAuthor.username}`,
      timeStamp: !tweet.created_at ? null : new Date(tweet.created_at), //new Date(tweet.created_at);
    } as fullTweetObject;
  });
  return listOfTweetObjectsWithAuthorData;
};
