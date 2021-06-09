import React, { Component } from "react";
import Goo from 'gooey-react'
import randomColor from "randomcolor"
import "./testcss.css"

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
            style={{ fontSize: `${droplet.frequency * .6}em`, color: randomColor(), fontWeight: "bold", }}
        >  {droplet.word} </div>
    ))

    console.log(props.text)

    return (
        <div>
            <h1> Word Cloud </h1>
            <div className='app-outer'>
                {droplets}


            </div>
        </div >
    );

}


export default MyCloud;

//{droplets}


{/* 
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

