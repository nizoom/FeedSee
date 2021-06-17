import React from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import "./scrollup.css"
//import { ShakeSlow } from 'reshake'




const ScrollUp = (props) => {



    const scrollUp = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }

    return (
        <div>


            <button onClick={scrollUp}
                className="scrollUpBtn">
                <ArrowUpwardIcon />
            </button>





        </div >
    )
}

export default ScrollUp;