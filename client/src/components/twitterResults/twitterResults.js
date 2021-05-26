import React, { useState, useRef, useEffect } from "react";
import "./twitterResults.css"
import CollapseButton from "../minimize/minimize"


const TwitterResults = (props) => {

    // console.log("Hi I am Spaced out".trim())

    const tweets = props.results;

    const [btnStatus, setBtnStatus] = useState(true) // defaults to plus where content is shown

    const content = useRef("");

    const [height, setHeight] = useState(content.current.scrollHeight);


    const changeBtnStatus = () => {
        setBtnStatus(!btnStatus)
        // console.log(btnStatus)
        //console.log(content.current.scrollHeight)
        //console.log(height);

    }

    useEffect(() => {
        setHeight(btnStatus ? `${content.current.scrollHeight}px` : `0px`)
    }, [btnStatus])


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
                <a href={convertNameToUrl(tweet.handle)} target="_blank" rel="noreferrer">
                    <li>
                        <p className="author">{tweet.authorName}</p>
                        <p className="tweetText">{tweet.text} </p>
                        <p style={{ padding: "10px", opacity: ".7" }}>{tweet.timeSince} </p>

                    </li>
                </a>
            </div >
        )
    }
    )

    console.log(props.results)

    return (
        <div>

            {
                props.results[0] !== "No Tweets" ?
                    <div>
                        <CollapseButton btnClicked={changeBtnStatus} status={btnStatus} />

                        <div className="container" ref={content}
                            style={{ maxHeight: `${height}` }}
                        >
                            <ul style={{
                                display: "flex", flexDirection: "row", flexWrap: "wrap",
                                justifyContent: "space-between"
                            }}>
                                {displayTweets}
                            </ul>
                        </div >

                    </div>
                    :
                    <p style={{ fontSize: "2em", color: "#89EBCF" }}> ......</p>
            }
        </div >


    )
}

export default TwitterResults;