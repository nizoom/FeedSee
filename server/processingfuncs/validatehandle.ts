import { credentials } from "../index.module";
import { TwitterApi } from "twitter-api-v2";

const validateHandle = async (handle: string) => {
  const twitterClient = new TwitterApi(credentials.bearer_token);
  const readOnlyClient = twitterClient.readOnly;
  const checkIfNameExists = await readOnlyClient.v2.userByUsername(handle);
  console.log(checkIfNameExists);
};

export default validateHandle;

validateHandle("Bob");
