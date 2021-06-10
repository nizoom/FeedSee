import React from "react";
//import Goo from 'gooey-react'
import Typography from '@material-ui/core/Typography';
import randomColor from "randomcolor"
import "./wordcloud.css"
import gif from "./../../media/tweetgifv7.gif"
import Grid from '@material-ui/core/Grid';

//import test from "./../../media/test.png"





const MyCloud = (props) => {



    const droplets = props.text.map((droplet) => (
        <div key={props.text.indexOf(droplet)} className="droplet"
            style={{ fontSize: `${droplet.frequency * .6}em`, fontWeight: "700", paddingLeft: "2px", paddingRight: "2px" }}
        >  {droplet.word} </div>
    ))

    console.log(props.text)

    return (
        <Grid container direction="column">
            <div className="cloudWrapper" spacing={2} justify="center">

                <div className="cloudTitle">
                    <Typography variant="h2"> Word Cloud from @{props.accountName}'s feed </Typography>

                </div>
                <div className='app-outer'>

                    <div style={{

                    }}>

                        <img src={gif} alt="tweetGif" style={{ borderRadius: "16px", height: "990px", width: "1030px" }} />

                    </div>

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
                            <text x="37%" y="37%" text-anchor="middle" stroke="black" stroke-width="5px"
                                alignment-baseline="middle">Label!</text>

                        </g>

                    </svg>

                </Goo>
                        */}

