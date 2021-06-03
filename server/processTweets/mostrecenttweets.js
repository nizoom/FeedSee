async function sortByMostRecent(processedTweets) {

    processedTweets.sort(function (a, b) {
        return b.recencyNumber - a.recencyNumber;
    })

    return processedTweets;

}

module.exports = sortByMostRecent;


    //process tweets is going to add relative time, filter out undefined tweets, 
    // add tweet author, 

    // console.log(tweets);
    //break down and rebuild tweet object to sort by most recent

  // console.log("got tweets")
    // let sortable = []

    // for (let i = 0; i < processedTweets.length; i++) {
    //     if (tweets[i] != undefined) {
    //         sortable.push([tweets[i].author_id, tweets[i].recencyLevel])
    //     }
    // }


    // //2. sort tweets array by size of relative time in seconds 
    // sortable.sort(function (a, b) {
    //     return b[1] - a[1]; //finding largest recency level
    // })

    // //console.log(sortable)


    // //3. rebuild based on id, not index 
    // function matchUp(timeStamp) {

    //     for (let x = 0; x < tweets.length; x++) {
    //         //if timestamp id = tweet author id then they should combine into one object
    //         if (tweets[x] !== undefined && timeStamp !== undefined) {
    //             if (timeStamp[0] === tweets[x].author_id) {
    //                 // combo logic 
    //                 const sortedTweet = Object.assign({}, tweets[x])

    //                 //console.log(sortedTweet);
    //                 //arrOfSortedTweets.push(sortedTweet);
    //                 return sortedTweet
    //             }
    //         } else {
    //             continue;
    //         }
    //     }
    // }
    // //sortable.forEach(timestamp => matchUp(timestamp)) //new array every time 
    // //console.log(` number of tweets ${tweets.length}`);
    // //console.log(` number of sortables ${sortable.length}`)
    // let arrOfSortedTweets = []

    // //matches the sorted index with the correct tweet metadata
    // for (let y = 0; y < tweets.length; y++) {
    //     const nextTweet = matchUp(sortable[y])
    //     //console.log(nextTweet)
    //     if (nextTweet !== undefined) {
    //         arrOfSortedTweets.push(nextTweet)
    //     }
    // }
    // console.log("sorted tweets")
    // //console.log("Hello " + JSON.stringify(arrOfSortedTweets))

    // // delete extranneous properties from tweet obj 
    // arrOfSortedTweets.forEach(tweet => deleteTweetID(tweet));
    // //remove tweet ID which isn't needed
    // function deleteTweetID(tweet) {
    //     if (tweet === undefined || tweet === null) {
    //         //console.log(tweet)
    //         tweets.splice(tweets.indexOf(tweet), 1)
    //     } else {
    //         delete tweet.id
    //         delete tweet.created_at
    //         response.push(tweet);
    //     }

    // }