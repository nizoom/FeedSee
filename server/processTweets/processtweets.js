async function processTweets(tweets) {
    //console.log("fired")
    const ta = require("time-ago");
    //FOR EVERY TWEET WE NEED: 
    // 1. text
    // 2. author / name 
    // 3. username for href link 
    // 4. relative time 
    // 5. recenecy level 
    // 6. perhaps have photo url 

    //filter out undefined
    let processedTweets = []

    const calcRecency = (creationTimestamp) => {
        const date = new Date(creationTimestamp)

        const seconds = date.getTime() / 1000
        //console.log(seconds)
        //seconds since Jan 1, 1970 from when the tweet was published 
        return Math.round(seconds);
        //bigger the number the more recent the tweet 
    }

    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i] !== undefined) {
            let processedTweet = {}

            const text = tweets[i][0].text;
            processedTweet.text = text; // shorten to processTweet.text = tweet[i][0].text

            const username = tweets[i][1].username;
            processedTweet.username = username;

            const author = tweets[i][1].name;
            processedTweet.author = author;

            processedTweet.timeElapsed = ta.ago(tweets[i][0].created_at);



            const recencyNumber = calcRecency(tweets[i][0].created_at)

            processedTweet.recencyNumber = recencyNumber;

            console.log(processedTweet)

            processedTweets.push(processedTweet);

        }

    }

    return processedTweets;

}



// [
//     { // created at and text 
//         created_at: '2021-03-29T19:09:42.000Z',
//         text: "RT @KarefulUK: One of the best Wave songs I've heard this year tbh, if you aint heard this one I strongly suggest you bump it. Good mix of…",
//         id: '1376612548569616395',
//         author_id: '239106804'
//     },
//     { //username, name, profile(?)
//         profile_image_url: 'https://pbs.twimg.com/profile_images/1355640106426785794/QLRGvjtH_normal.jpg',
//         username: 'THISISNOAHB',
//         id: '239106804',
//         name: 'NOAH B'
//     }
// ]

module.exports = processTweets;