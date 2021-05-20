import React from "react";
import TextField from '@material-ui/core/TextField';
import "./twitterResults.css"
import { recomposeColor } from "@material-ui/core";

const TwitterResults = (props) => {

    const tweets = props.results;


    const displayTweets = tweets.map((tweet) =>
        <li key={tweets.indexOf(tweet).toString()}> {tweet.text} -- {tweet.authorName}</li>
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