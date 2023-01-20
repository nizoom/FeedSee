import { TwitterApi } from "twitter-api-v2";
import { credentials } from "../index.module";

function twitterClient() {
  const twitterClient = new TwitterApi(credentials.bearer_token);
  const readOnlyClient = twitterClient.readOnly;
  return readOnlyClient;
}

export default twitterClient;
