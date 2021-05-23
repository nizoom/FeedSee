import React, { useState } from "react";
import "./twitterResults.css"
import CollapseButton from "../minimize/minimize"

const TwitterResults = (props) => {


    const tweets = props.results;

    const [btnStatus, setBtnStatus] = useState(true) // defaults to plus 

    const changeBtnStatus = () => {
        setBtnStatus(!btnStatus)
    }


    const displayTweets = tweets.map((tweet) =>

        <div className="tweetDiv" key={tweets.indexOf(tweet).toString()}

        >
            <li>
                <p className="author">{tweet.authorName}</p>
                <p className="tweetText">{tweet.text} </p>
                <p style={{ padding: "10px", opacity: ".7" }}>{tweet.timeSince} </p>

            </li>
        </div>
    )

    console.log(props.results)
    return (
        <div>
            <CollapseButton btnClicked={changeBtnStatus} status={btnStatus} />
            {
                props.results[0] !== "No Tweets" ?
                    <div className="container">
                        <ul style={{
                            display: "flex", flexDirection: "row", flexWrap: "wrap",
                            justifyContent: "space-between"
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