async function processTweets(tweets) {

    const ta = require("time-ago");
    //FOR EVERY TWEET WE NEED: 
    // 1. text
    // 2. author / name 
    // 3. username for href link 
    // 4. relative time 
    // 5. recenecy level 
    // 6. perhaps have photo url 

    //filter out undefined
    let processTweets = []

    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i] !== undefined) {
            let processsedTweet = {}

            const text = tweet[i][0].text;
            processsedTweet.text = text; // shorten to processTweet.text = tweet[i][0].text

            const username = tweet[i][1].username;
            processsedTweet.username = username;

            const author = tweet[i][1].name;
            processsedTweet.author = author;



        }

    }

}



[
    { // created at and text 
        created_at: '2021-03-29T19:09:42.000Z',
        text: "RT @KarefulUK: One of the best Wave songs I've heard this year tbh, if you aint heard this one I strongly suggest you bump it. Good mix of…",
        id: '1376612548569616395',
        author_id: '239106804'
    },
    { //username, name, profile(?)
        profile_image_url: 'https://pbs.twimg.com/profile_images/1355640106426785794/QLRGvjtH_normal.jpg',
        username: 'THISISNOAHB',
        id: '239106804',
        name: 'NOAH B'
    }
]

module.exports = processTweets;