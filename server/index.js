require('dotenv').config();

const express = require("express");

const app = express();

const validateHandle = require("./twitterAPI/validateHandle");

const getFollowers = require("./twitterAPI/getfollowers");

const getTweets = require("./twitterAPI/gettweets");

const processTweets = require("./processTweets/processtweets")

const sortByMostRecent = require("./processTweets/mostrecenttweets")

const processText = require("./wordcloud/wordcloud");

const PORT = process.env.PORT || 3001; //process.env 

const credentials = {
    consumer_key: `${process.env.CONSUMER_KEY}`,
    consumer_secret: `${process.env.CONSUMER_SECRET}`,
    access_token_key: `${process.env.ACCESS_TOKEN_KEY}`,
    access_token_secret: `${process.env.ACCESS_TOKEN_SECRET}`
}



app.get("/api/users/:handle", (req, res) => {
    //res.json({ message: "Hello from server" })

    //i80i
    //console.log(require('dotenv').config())

    //console.log(credentials)

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

        console.log(obj);

        let drillDown = obj[0][0];

        //invalid name 

        if (drillDown.id != undefined) { // valid name -> get followers -> get tweets of followers

            console.log("We are valid")

            let inititalizingId = obj[0][0].id

            // console.log(inititalizingId);

            const allFollowers = await getFollowers(inititalizingId, credentials)

            console.log("Got " + allFollowers.length + " followers.")
            // console.log(allFollowers);
            let response = []

            if (allFollowers.length < 1) {
                // not following anyone
                response.push("This account is not following anyone") // THIS USE CASE NEEDS ATTENTION

                res.send(response)

            } else {

                const tweets = await getTweets(allFollowers, credentials)

                const processedTweets = await processTweets(tweets);

                const sortedMostRecentTweets = await sortByMostRecent(processedTweets);


                //ALL OF THE ABOVE IS TO CREATE THE TWEET CARDS 

                //This section below is to process the tweets to be sent to the front end 

                //the object will be word: " " and frequency: # (for frequency of appearance)

                /*let allTweetText = ""

                arrOfSortedTweets.forEach(tweet => extractAndAddText(tweet));

                function extractAndAddText(tweet) {
                    allTweetText += tweet.text
                }
                   */
                //const arrOfText = processText(allTweetText);

                console.log("sending to front end")

                res.send(sortedMostRecentTweets)


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
