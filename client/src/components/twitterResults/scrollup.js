import React from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import "./scrollup.css"
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';




const ScrollUp = (props) => {



    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    // const BootstrapButton = withStyles({
    //     root: {
    //         right: "95%",
    //         position: "fixed",
    //         borderRadius: "16px",
    //         zIndex: "1000",
    //         bottom: "150px",
    //         fontWeight: "700",
    //         textTransform: 'none',
    //         fontSize: 16,
    //         padding: '12px 0px 12px 0px',
    //         border: '1px solid',
    //         lineHeight: 1.5,
    //         backgroundColor: '#BB48B6',

    //         '&:active': {
    //             backgroundColor: '#BB48B6',
    //             borderColor: '#0062cc',
    //             boxShadow: 'none',
    //         },


    // //     },
    // })(Button);


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