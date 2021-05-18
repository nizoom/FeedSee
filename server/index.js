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

            // console.log(inititalizingId);

            const allFollowers = await getFollowers(inititalizingId, credentials)


            // console.log(allFollowers);


            if (allFollowers.length < 1) {
                // not following anyone
            } else {

                const tweets = await getTweets(allFollowers)

                let response = []

                tweets.forEach(tweet => deleteTweetID(tweet)); //remove tweet ID which isn't needed
                function deleteTweetID(tweet) {
                    delete tweet.id
                    response.push(tweet);
                }



                res.send(response)
            }


        } else {
            //invalid name 

            console.log("There's an error / deleted account")
        }



    }

    //console.log(finalReturn);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


//validateHandle("kendricklamar14554", credentials)
