import React, { useState, useRef, useEffect } from "react";
import "./twitterResults.css"
//import CollapseButton from "../minimize/minimize"
import ScrollUp from "./scrollup";


const TwitterResults = (props) => {

    // console.log("Hi I am Spaced out".trim())

    const tweets = props.results;

    const [btnStatus, setBtnStatus] = useState(true) // defaults to plus where content is shown

    const content = useRef("");


    const changeBtnStatus = () => {
        setBtnStatus(!btnStatus)
        // console.log(btnStatus)
        //console.log(content.current.scrollHeight)
        //console.log(height);

    }


    const convertNameToUrl = (handle) => {
        // console.log(handle)
        if (handle === undefined) {
            return ("")
        } else {
            const urlReadyHandle = handle.replace(/\s+/g, '').toLowerCase();
            //const urlReadyName = authorName.trim().toLowerCase()
            //console.log(`https://twitter.com/${urlReadyName}`)
            return "https://twitter.com/" + urlReadyHandle
        }

    }

    const displayTweets = tweets.map((tweet) => {

        return (
            < div className="tweetDiv" key={tweets.indexOf(tweet).toString()} >
                <a href={convertNameToUrl(tweet.username)} target="_blank" rel="noreferrer">
                    <li>
                        <p className="author">{tweet.author}</p>
                        <p className="tweetText">{tweet.text} </p>
                        <p style={{ padding: "10px", opacity: ".7" }}>{tweet.timeElapsed} </p>

                    </li>
                </a>
            </div >
        )
    }
    )

    //console.log(props.results)

    return (
        <div>

            {
                props.results[0] !== "No Tweets" ?
                    <div>



                        <div>

                            <div className="container">
                                <ScrollUp />
                                <ul>
                                    {displayTweets}
                                </ul>
                            </div >
                        </div>
                        : null

                    </div>
                    :
                    <p style={{ fontSize: "2em", color: "#89EBCF" }}> ......</p>
            }
        </div >


    )
}

export default TwitterResults;


// <CollapseButton btnClicked={changeBtnStatus} status={btnStatus} />