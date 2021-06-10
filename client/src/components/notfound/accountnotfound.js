import React from "react";
import "./accountnotfound.css"

const AccntNotFound = (props) => {
    console.log("not found component active")
    return (
        <div className="notFoundWrapper">
            <p> Account not found. Please try a different handle. </p>
        </div>
    )
}

export default AccntNotFound;