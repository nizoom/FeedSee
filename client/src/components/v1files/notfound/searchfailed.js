import React from "react";
import "./searchfailed.css"

const SearchFailed = (props) => {
    console.log("not found component active")
    return (
        <div className="notFoundWrapper">
            {props.issue === "0" ?
                <p> {props.authorName} follows 0 accounts. Please try a different one. </p>
                : <p> Account not found. Please try a different handle. </p>}
        </div>
    )
}

export default SearchFailed;