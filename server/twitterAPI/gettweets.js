
const credentials = {
    consumer_key: `${process.env.CONSUMER_KEY}`,
    consumer_secret: `${process.env.CONSUMER_SECRET}`,
    access_token_key: `${process.env.ACCESS_TOKEN_KEY}`,
    access_token_secret: `${process.env.ACCESS_TOKEN_SECRET}`
}

async function getTweets() {

    const Twitter = require('twitter-v2');

    const client = new Twitter(credentials);

    const tweets = await client.get();
}

getTweets(id, credentials)



