const credentials = {
    consumer_key: `sF1NuA8aYhyJKmrgzHSoLqIFk`,
    consumer_secret: `i1mdlM20Xsx9nhKYHE6bI6e6t1rU2qonr7uayfLVD5Z49eXfuD`,
    access_token_key: `1390350156726407170-QtPf6zHPPncuKKMNkhkfkGpgbRViko`,
    access_token_secret: `K7rnnNmtoeypzWXdluTKY7cVLiAHTiSQ2wmjOMb5CCJK5`
}


async function getTweets(allFollowers) {

    //let tweet = []; //may need an object so that id and corresponding tweet is tracked

    //Follower { name: 'The Washington Post', id: '2467791' },

    const Twitter = require('twitter-v2');

    const client = new Twitter(credentials);

    let ids = []

    let names = []

    allFollowers.forEach(follower => ids.push(follower.id));


    allFollowers.forEach(follower => names.push(follower.name));

    // console.log(names);


    async function getFirstTweetFromAcc(idNumber, followerIndex) {

        //https://api.twitter.com/2/tweets

        const fetchedTweet = await client.get(`users/${idNumber}/tweets`, {
            max_results: 5
        }) // get first tweet 
            .then(function (tweets) {
                //console.log("STARTING TWEETS for " + idNumber + "--------------------")
                //console.log(tweets.data)
                const mostRecentTweet = Object.values(tweets)[0][0];
                //console.log(names[followerIndex])
                //console.log("______________")
                //console.log(mostRecentTweet.text)

                //add author to most recent tweet obj 

                const tweetAuthor = names[followerIndex]
                mostRecentTweet.authorName = tweetAuthor

                //console.log(mostRecentTweet)

                return mostRecentTweet

            })
            .catch(function (error) {
                console.log(error)
            })

        return await fetchedTweet;
    }









    // const anAsyncFunction = async item => {


    const promisedTweets = async () => {
        return Promise.all(ids.map(id => getFirstTweetFromAcc(id, ids.indexOf(id)))) //an async function
    }

    const tweets = await promisedTweets().then(data => {

        //console.log("This is data " + data)
        //console.log(typeof data)
        return data;

    })
    // console.log("HERE ARE TWEETS " + tweets)
    return tweets;


}

//const arrOfFollowers = [813286, 29327002, 101885579];

//getTweets(arrOfFollowers);



module.exports = getTweets; 