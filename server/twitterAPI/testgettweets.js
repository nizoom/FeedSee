async function getTweets(allFollowers, credentials) {

    //Follower { name: 'The Washington Post', id: '2467791' },

    console.log('Getting tweets for ' + allFollowers.length + ' users.')

    const ta = require("time-ago");

    const Twitter = require('twitter-v2');

    const client = new Twitter(credentials);

    let ids = []

    let names = []

    allFollowers.forEach(follower => ids.push(follower.id));


    allFollowers.forEach(follower => names.push(follower.name));

    // console.log(names);
    const calcRecency = (creationTimestamp) => {
        const date = new Date(creationTimestamp)

        const seconds = date.getTime() / 1000
        //console.log(seconds)
        //seconds since Jan 1, 1970 from when the tweet was published 
        return Math.round(seconds);
        //bigger the number the more recent the tweet 
    }

    async function getFirstTweetFromAcc(idNumber, followerIndex) {

        //https://api.twitter.com/2/tweets
        const fetchedTweet = await client.get(`users/${idNumber}/tweets`, {
            max_results: 5,
            tweet: {
                fields: "created_at",
            },
            expansions: "author_id"

        }) // get first tweet 
            .then(function (tweets) {
                //console.log("STARTING TWEETS for " + idNumber + "--------------------")
                let latestTweet = tweets.data[0]
                console.log(latestTweet);
                return latestTweet
                // const mostRecentTweet = Object.values(tweets)[0][0];
                // //console.log(names[followerIndex])
                // //console.log("______________")

                // //add author to most recent tweet obj -- this is not the same as handle



                // if (tweets.includes === undefined) {
                //     //console.log("failed to get metadata")
                //     return;
                // } else {
                //     const handle = Object.values(tweets.includes)[0][0].username //get handle for twitter link in front end 
                //     mostRecentTweet.handle = handle;

                // }
                // //console.log("2 " + tweets.include)

                // //console.log(handle)


                // //console.log(tweetAuthor);
                // const tweetAuthor = names[followerIndex] // get author

                // if (tweetAuthor === undefined || tweetAuthor === null) {
                //     console.log("failed to get authorName")
                //     return
                // } else {
                //     mostRecentTweet.authorName = tweetAuthor
                // }

                // //console.log(mostRecentTweet)

                // const timeStamp = mostRecentTweet.created_at; // get tweet time

                // //seconds since Jan 1, 1970 from when the tweet was published 
                // const recency = calcRecency(mostRecentTweet.created_at)

                // mostRecentTweet.recencyLevel = recency;

                // const timeSince = ta.ago(timeStamp);

                // mostRecentTweet.timeSince = timeSince;
                // //console.log(timeSince);


                // return mostRecentTweet

            })
            .catch(function (error) {
                console.log("Here is the error " + error)

            })


        return await fetchedTweet;
    }




    // const anAsyncFunction = async item => {


    const promisedTweets = async () => {

        // const results = await Promise.all(ids.map(async id => {
        //     return await getFirstTweetFromAcc(id, ids.indexOf(id))
        // })) //an async function
        const trimmedIds = ids.slice(0, 3)
        const results = await Promise.all(trimmedIds.map(id => getFirstTweetFromAcc(id, ids.indexOf(id))))
        console.log("RESULTS: " + results)
        return results
    }

    const tweets = await promisedTweets()
    //console.log("HERE ARE TWEETS " + tweets)
    console.log("returning tweet obj")
    return tweets;


}

//const arrOfFollowers = [813286, 29327002, 101885579];

//getTweets(arrOfFollowers);



module.exports = getTweets; 