import React from "react";
import "./twitterResults.css"

//import RelativeTime from '../../../../node_modules/@yaireo/relative-Time/relative-time'

const TwitterResults = (props) => {

    //2018-09-06T00:48:11.000Z


    const tweets = props.results;


    const displayTweets = tweets.map((tweet) =>
        <li key={tweets.indexOf(tweet).toString()}>
            <p>{tweet.text} </p> --

        <p>{tweet.authorName} , {tweet.created_at} </p>


        </li>
    )

    console.log(props.results)
    return (
        <div>
            {props.results !== null ?
                <ul>
                    {displayTweets}
                </ul>

                :
                <p>Click Submit to see results!</p>
            }

        </div >

    )
}

export default TwitterResults;