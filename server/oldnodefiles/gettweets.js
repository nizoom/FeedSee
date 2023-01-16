async function getTweets(allFollowers, credentials) {
  //Follower { name: 'The Washington Post', id: '2467791' },

  const ta = require("time-ago");

  const Twitter = require("twitter-v2");

  const client = new Twitter(credentials);

  let ids = [];

  allFollowers.forEach((follower) => ids.push(follower));

  console.log(ids);

  const calcRecency = (creationTimestamp) => {
    const date = new Date(creationTimestamp);

    const seconds = date.getTime() / 1000;

    //seconds since Jan 1, 1970 from when the tweet was published
    return Math.round(seconds);
    //bigger the number the more recent the tweet
  };

  async function getFirstTweetFromAcc(idNumber) {
    const fetchedTweet = await client
      .get(`users/${idNumber}/tweets`, {
        max_results: 5,
        user: { fields: "username", fields: "profile_image_url" },
        tweet: {
          fields: "created_at",
        },
        expansions: "author_id",
      }) // get first tweet
      .then(function (tweets) {
        const textAndUTC = tweets.data[0];

        const tweetMetaData = Object.values(tweets.includes)[0][0];

        const allDataForTweet = [textAndUTC, tweetMetaData];

        return allDataForTweet;
      })
      .catch(function (error) {
        console.log(error);
      });

    return await fetchedTweet;
  }

  const promisedTweets = async () => {
    return Promise.all(
      ids.map((id) => getFirstTweetFromAcc(id, ids.indexOf(id)))
    ); //an async function
  };

  const tweets = await promisedTweets().then((data) => {
    return data;
  });
  return tweets;
}

module.exports = getTweets;
