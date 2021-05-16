const credentials = {
    consumer_key: `sF1NuA8aYhyJKmrgzHSoLqIFk`,
    consumer_secret: `i1mdlM20Xsx9nhKYHE6bI6e6t1rU2qonr7uayfLVD5Z49eXfuD`,
    access_token_key: `1390350156726407170-QtPf6zHPPncuKKMNkhkfkGpgbRViko`,
    access_token_secret: `K7rnnNmtoeypzWXdluTKY7cVLiAHTiSQ2wmjOMb5CCJK5`
}


async function getTweets(allFollowers) {

    //let tweet = []; //may need an object so that id and corresponding tweet is tracked

    const Twitter = require('twitter-v2');

    const client = new Twitter(credentials);

    let ids = []

    allFollowers.forEach(follower => ids.push(follower.id));

    //console.log(ids);


    async function getFirstTweetFromAcc(idNumber) {

        //https://api.twitter.com/2/tweets

        const fetchedTweet = await client.get(`users/${idNumber}/tweets`) // get first tweet 
            .then(function (tweets) {
                const mostRecentTweet = Object.values(tweets)[0][0];

                //tweet.push(mostRecentTweet.text);
                //console.log(mostRecentTweet.text) //
                //console.log("This should happen first ")
                return mostRecentTweet.text

            })
            .catch(function (error) {
                console.log(error)
            })

        return await fetchedTweet;
    }




    //await ids.forEach(id => tweets.push(getFirstTweetFromAcc(id)));



    const functionWithPromise = item => { //a function that returns a promise
        return Promise.resolve('ok')
    }

    // const anAsyncFunction = async item => {
    //     return functionWithPromise(item)
    // }

    // const getData = async () => {
    //     return Promise.all(list.map(item => anAsyncFunction(item)))
    // }



    //async function 
    //see above


    //final function 
    //let tweets = [];
    let arr = [];
    const promisedTweets = async () => {
        return Promise.all(ids.map(id => getFirstTweetFromAcc(id))) //an async function
    }

    const tweets = await promisedTweets().then(data => {
        arr.push(data)
        console.log("This is data " + data)
        return data;

    })



    console.log("THIS IS THE THING " + tweets);

    // let tweets = ids.map(async function (id) {
    //     const tweet = await getFirstTweetFromAcc(id)
    //     return tweet;
    // })

    // console.log(tweets)

    //console.log("Here are the tweets " + tweets);


    //getFirstTweetFromAcc(813286)
    //arrOfFollowers.forEach(idNumber => getFirstTweetFromAcc(idNumber));

    //console.log("This should happen last ")

    //return tweet;

}

//const arrOfFollowers = [813286, 29327002, 101885579];

//getTweets(arrOfFollowers);



module.exports = getTweets; 