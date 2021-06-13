import React from "react";
//import Goo from 'gooey-react'
import Typography from '@material-ui/core/Typography';
import "./wordcloud.css"
import gif from "./../../media/tweetgifv7.gif"
import Grid from '@material-ui/core/Grid';
import ToolTip from "./../tooltip/tooltip"
//{clicked ? <ToolTip word={droplet.word} frequency={droplet.frequency} /> : null}

//import Tooltip from '@material-ui/core/Tooltip';





const MyCloud = (props) => {

    const [clicked, setClick] = React.useState(false)

    const activateToolTip = () => {
        setClick(!clicked)
    }



    const droplets = props.text.map((droplet) => (
        <div key={props.text.indexOf(droplet)}>
            <ToolTip word={droplet.word} frequency={droplet.frequency}>
                <div key={props.text.indexOf(droplet)} className="droplet"
                    style={{ fontSize: `${droplet.frequency * 9.5}px`, fontWeight: "700", paddingLeft: "2px", paddingRight: "2px" }}
                    onClick={activateToolTip}



                >  {droplet.word}
                </div>

            </ToolTip>



        </div >


    ))

    console.log(props.text)

    return (
        <Grid container direction="column">
            <div className="cloudWrapper" spacing={2} justify="center">

                <div className="cloudTitle">
                    <Typography variant="h2"> Word Cloud from @{props.accountName}'s feed </Typography>

                </div>


                <div className="outerContainer">

                    <img src={gif} alt="tweetGif" height="995px" width="1095px" style={{ borderRadius: "16px", float: "left" }} />



                    <div className="cloud">
                        {droplets}
                    </div>
                </div>



            </div >
        </Grid>
    );

}


export default MyCloud;

//{droplets}

// <img src={gif} alt="tweetGif" />

//<img src={gif} alt="tweetGif">  </img>

//border: "solid", borderColor: "black", borderWidth: ".5px",


{/* 


    width: "450px", height: "600px",
                    overflow: "hidden"



                          <Goo instenity="weak" style={{ animation: 'left 4s linear infinite' }}>
                    <svg width="192" height="192">

                        <g id="parent">
                            <circle cx="37%" cy="37%" fill="orchid" r="32" style={{ animation: 'right 1s linear infinite' }} />
                            <circle cx="63%" cy="63%" fill="mediumorchid" r="32" />
                          

                        </g>

                    </svg>

                </Goo>
                        */}

