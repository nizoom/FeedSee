const path = require("path");
require("dotenv").config({ path: __dirname + "/./../.env" });
const express = require("express");
const app = express();
const createError = require("createerror");
const validateHandle = require("./oldnodefiles/twitterAPI/validateHandle");
const getFollowers = require("./oldnodefiles/twitterAPI/getfollowers");
const getTweets = require("./oldnodefiles/twitterAPI/gettweets");
// const processTweets = require("./processTweets/processtweets");
// const sortByMostRecent = require("./processTweets/mostrecenttweets");
// const textToWordCloud = require("./wordcloud/wordcloud");
const cors = require("cors");
const indexRouter = require("./routes");

const PORT = process.env.PORT || 3001; //process.env

const credentials = {
  consumer_key: `${process.env.REACT_APP_CONSUMER_KEY}`,
  consumer_secret: `${process.env.REACT_APP_CONSUMER_SECRET}`,
  access_token_key: `${process.env.REACT_APP_ACCESS_TOKEN_KEY}`,
  access_token_secret: `${process.env.REACT_APP_ACCESS_TOKEN_SECRET}`,
};

// console.log(credentials);
// console.log(__dirname);

app.use(cors());

// --------------------------------
// ---------------- ADD THIS ----------------
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// --------------------------------

app.use("/", indexRouter);

app.get("/api/users/:handle", (req, res) => {
  //   console.log("Querying");

  let finalReturn = []; //where each new tweet and name will be stored

  processData();

  async function processData() {
    const twitterHandle = req.params.handle;

    const valid = await validateHandle(twitterHandle, credentials);

    let obj = Object.values(valid);
    console.log(obj);
    let drillDown = obj[0][0];
    const name = drillDown.name;
    //invalid name

    if (drillDown.id != undefined) {
      // valid name -> get followers -> get tweets of followers

      console.log("We are valid");

      let inititalizingId = obj[0][0].id;

      // console.log(inititalizingId);

      const allFollowers = await getFollowers(inititalizingId, credentials);

      //if not following anyone

      if (allFollowers.length < 1) {
        console.log("not following anyone");
        res.send({ numberOfFollowing: "0", authorName: name });
      } else {
        // continue with successful query

        console.log("Got " + allFollowers.length + " followers.");
        // console.log(allFollowers);

        const tweets = await getTweets(allFollowers, credentials);

        if (tweets.length === 1 && tweets[0] === undefined) {
          res.send({ notFound: "not found" });
          return;
        }

        const processedTweets = await processTweets(tweets);

        const sortedMostRecentTweets = await sortByMostRecent(processedTweets);

        let allText = "";

        processedTweets.map(function (processedTweets) {
          allText += processedTweets.text;
        });

        const cloudTextObj = await textToWordCloud(allText);
        //ALL OF THE ABOVE IS TO CREATE THE TWEET CARDS

        console.log("sending to front end");
        console.log(name);
        res.send([sortedMostRecentTweets, cloudTextObj, name]);
      }
    } else {
      //invalid name
      res.send({ notFound: "not found" });
      console.log("There's an error / deleted account SEND");
    }
  }
  //console.log(finalReturn);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(function (req, res, next) {
  next(createError(404));
});

// ---------------- ADD THIS ----------------
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

function errorHandler(err, req, res, next) {
  res.status(500);
  res.json({ error: err });
}
