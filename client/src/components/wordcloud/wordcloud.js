import React, { Component } from "react";
//import Goo from 'gooey-react'
import Typography from '@material-ui/core/Typography';
import randomColor from "randomcolor"
import "./wordcloud.css"
import gif from "./../../media/tweetgifv6.gif"
//import test from "./../../media/test.png"
///Users/nissimram / Desktop / Programming / Twitter Project / twitter - project / client / src / media / tweetGifv4.gif

const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};



const MyCloud = (props) => {

    // componentDidMount() {
    //     console.log(this.props.text)
    //     // setInterval(() => {
    //     //     this.forceUpdate();
    //     // }, 5000);
    // }



    const droplets = props.text.map((droplet) => (
        <div key={props.text.indexOf(droplet)} className="droplet"
            style={{ fontSize: `${droplet.frequency * .6}em`, color: randomColor(), fontWeight: "bold", padding: "2px" }}
        >  {droplet.word} </div>
    ))

    console.log(props.text)

    return (
        <div>


            <Typography variant="h2" style={{ color: "#14394B", padding: "10px" }}> Word Cloud </Typography>
            <div className='app-outer'>

                <div style={{
                }}>

                    <img src={gif} alt="tweetGif" style={{ borderRadius: "16px", height: "50%" }} />

                </div>

                <div className="cloud">
                    {droplets}
                </div>



            </div>
        </div >
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

