import React from "react";
import "./twitterResults.css"


const TwitterResults = (props) => {


    const tweets = props.results;


    const displayTweets = tweets.map((tweet) =>
        <div className="tweetDiv" key={tweets.indexOf(tweet).toString()}

        >
            <li>
                <p className="author">{tweet.authorName}</p> ,
                <p className="tweetText">{tweet.text} </p>
                <p style={{ padding: "10px" }}>{tweet.timeSince} </p>

            </li>
        </div>
    )

    console.log(props.results)
    return (
        <div>
            {
                props.results[0] !== "No Tweets" ?
                    <div className="container">
                        <ul style={{
                            display: "flex", flexDirection: "row", flexWrap: "wrap",
                            justifyContent: "space-between", opacity: ".85"
                        }}>
                            {displayTweets}
                        </ul>
                    </div >
                    :
                    <p style={{ fontSize: "2em", color: "#89EBCF" }}> ......</p>
            }
        </div >


    )
}

export default TwitterResults;