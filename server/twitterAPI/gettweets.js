async function getTweets(allFollowers, credentials) {

    //Follower { name: 'The Washington Post', id: '2467791' },

    const ta = require("time-ago");

    const Twitter = require('twitter-v2');

    const client = new Twitter(credentials);


    let ids = []

    allFollowers.forEach(follower => ids.push(follower));


    console.log(ids)
    //allFollowers.forEach(follower => names.push(follower.name));

    // console.log(names);
    const calcRecency = (creationTimestamp) => {
        const date = new Date(creationTimestamp)

        const seconds = date.getTime() / 1000
        //console.log(seconds)
        //seconds since Jan 1, 1970 from when the tweet was published 
        return Math.round(seconds);
        //bigger the number the more recent the tweet 
    }

    async function getFirstTweetFromAcc(idNumber) {
        //console.log(idNumber)
        //https://api.twitter.com/2/tweets

        const fetchedTweet = await client.get(`users/${idNumber}/tweets`, {
            max_results: 5,
            user: { fields: "username", fields: "profile_image_url" },
            tweet: {
                fields: "created_at",
            },
            expansions: "author_id"



            //expansions: "author_id"


        }) // get first tweet 
            .then(function (tweets) {
                //console.log("STARTING TWEETS for " + idNumber + "--------------------")

                //console.log(tweets.data[0])
                const textAndUTC = tweets.data[0]; //created at, text 
                //console.log(Object.values(tweets.includes)[0][0]) //username, name, img url
                const tweetMetaData = Object.values(tweets.includes)[0][0];

                const allDataForTweet = [textAndUTC, tweetMetaData]

                return allDataForTweet

            })
            .catch(function (error) {
                console.log(error)
            })

        return await fetchedTweet;
    }






    const promisedTweets = async () => {
        return Promise.all(ids.map(id => getFirstTweetFromAcc(id, ids.indexOf(id)))) //an async function
    }

    const tweets = await promisedTweets().then(data => {

        //console.log("This is data " + data)
        //console.log(typeof data)
        return data;

    })
    //console.log("HERE ARE TWEETS " + tweets)
    return tweets;


}

//const arrOfFollowers = [813286, 29327002, 101885579];

//getTweets(arrOfFollowers);



module.exports = getTweets; 
