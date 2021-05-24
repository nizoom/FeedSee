import React, { useState, useRef, useEffect } from "react";
import "./twitterResults.css"
import CollapseButton from "../minimize/minimize"


const TwitterResults = (props) => {


    const tweets = props.results;

    const [btnStatus, setBtnStatus] = useState(true) // defaults to plus where content is shown

    const content = useRef("");

    const [height, setHeight] = useState(content.current.scrollHeight);


    const changeBtnStatus = () => {
        setBtnStatus(!btnStatus)
        // console.log(btnStatus)
        // console.log(content.current.scrollHeight)
        // console.log(height);
        //setHeight(btnStatus ? `${content.current.scrollHeight}px` : `0px`)

    }

    useEffect(() => {
        setHeight(btnStatus ? `${content.current.scrollHeight}px` : `0px`)
    }, [btnStatus])


    //{btnStatus ? "container" : "collapsed"}
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