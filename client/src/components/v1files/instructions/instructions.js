import React from "react";
import Typography from '@material-ui/core/Typography';
import "./instructions.css"


const Instructions = () => {
    return (
        <div className="instructionsWrapper">
            <header>
                <Typography variant="h1" style={{ fontSize: "3em", marginTop: "15px" }}>
                    Welcome to The Echo Chamber </Typography>
            </header>
            <Typography variant="h2" style={{ fontSize: "2em", padding: "0 5px 0 5px" }}
            > Enter a Twitter name, see what they see </Typography>
        </div>


    )
}

export default Instructions