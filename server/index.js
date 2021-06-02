require('dotenv').config();

const express = require("express");

const app = express();

const ta = require("time-ago");

const validateHandle = require("./twitterAPI/validateHandle");

const getFollowers = require("./twitterAPI/getfollowers");

const getTweets = require("./twitterAPI/gettweets");

const processTweets = require("./processtweets")

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

                const processedTweets = await processTweets(tweets)
                //process tweets is going to add relative time, filter out undefined tweets, 
                // add tweet author, 

                // console.log(tweets);
                //break down and rebuild tweet object to sort by most recent
                console.log("got tweets")
                let sortable = []

                for (let i = 0; i < tweets.length; i++) {
                    if (tweets[i] != undefined) {
                        sortable.push([tweets[i].author_id, tweets[i].recencyLevel])
                    }
                }


                //2. sort tweets array by size of relative time in seconds 
                sortable.sort(function (a, b) {
                    return b[1] - a[1]; //finding largest recency level
                })

                //console.log(sortable)


                //3. rebuild based on id, not index 
                function matchUp(timeStamp) {

                    for (let x = 0; x < tweets.length; x++) {
                        //if timestamp id = tweet author id then they should combine into one object
                        if (tweets[x] !== undefined && timeStamp !== undefined) {
                            if (timeStamp[0] === tweets[x].author_id) {
                                // combo logic 
                                const sortedTweet = Object.assign({}, tweets[x])

                                //console.log(sortedTweet);
                                //arrOfSortedTweets.push(sortedTweet);
                                return sortedTweet
                            }
                        } else {
                            continue;
                        }
                    }
                }
                //sortable.forEach(timestamp => matchUp(timestamp)) //new array every time 
                //console.log(` number of tweets ${tweets.length}`);
                //console.log(` number of sortables ${sortable.length}`)
                let arrOfSortedTweets = []

                //matches the sorted index with the correct tweet metadata
                for (let y = 0; y < tweets.length; y++) {
                    const nextTweet = matchUp(sortable[y])
                    //console.log(nextTweet)
                    if (nextTweet !== undefined) {
                        arrOfSortedTweets.push(nextTweet)
                    }
                }
                console.log("sorted tweets")
                //console.log("Hello " + JSON.stringify(arrOfSortedTweets))

                // delete extranneous properties from tweet obj 
                arrOfSortedTweets.forEach(tweet => deleteTweetID(tweet));
                //remove tweet ID which isn't needed
                function deleteTweetID(tweet) {
                    if (tweet === undefined || tweet === null) {
                        //console.log(tweet)
                        tweets.splice(tweets.indexOf(tweet), 1)
                    } else {
                        delete tweet.id
                        delete tweet.created_at
                        response.push(tweet);
                    }

                }

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
