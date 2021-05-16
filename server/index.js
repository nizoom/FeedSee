require('dotenv').config();

const express = require("express");

const app = express();

const validateHandle = require("./twitterAPI/validateHandle");

const getFollowers = require("./twitterAPI/getfollowers");

const getTweets = require("./twitterAPI/gettweets");

const PORT = process.env.PORT || 3001;

const credentials = {
    consumer_key: `${process.env.CONSUMER_KEY}`,
    consumer_secret: `${process.env.CONSUMER_SECRET}`,
    access_token_key: `${process.env.ACCESS_TOKEN_KEY}`,
    access_token_secret: `${process.env.ACCESS_TOKEN_SECRET}`
}



app.get("/api/users/:handle", (req, res) => {
    //res.json({ message: "Hello from server" })


    function TweetData(tweet, name) {  //keep track of both name and tweet of each follower 
        this.name = name;
        this.tweet = tweet
    }

    let finalReturn = [] //where each new tweet and name will be stored 

    validation()

    async function validation() {

        const twitterHandle = req.params.handle

        const valid = await validateHandle(twitterHandle, credentials)

        let obj = Object.values(valid)

        let drillDown = obj[0][0];

        //invalid name 

        if (drillDown.id != undefined) { // valid name -> get followers -> get tweets of followers

            console.log("We are valid")

            let inititalizingId = obj[0][0].id

            const allFollowers = await getFollowers(inititalizingId, credentials)

            const tweets = getTweets(allFollowers);



            // for (let i = 0; i < allFollowers.length; i++) {

            //     all
            //     //console.log("This is me line 52   " + allFollowers[i].id)
            //     //const mostRecentTweet = await getTweet(allFollowers[i].id); // here is tweet 

            //     console.log(mostRecentTweet);

            //     const tweetAndName = new TweetData(mostRecentTweet, allFollowers[i].name);

            //     //console.log(tweetAndName);

            //     //store tweet and name pairing 

            //     finalReturn.push(tweetAndName);

            // }

        } else {
            //invalid name 

            console.log("There's an error / deleted account")
        }


        //res.send(req.params)
    }

    //console.log(finalReturn);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


//validateHandle("kendricklamar14554", credentials)
