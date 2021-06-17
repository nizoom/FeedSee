import React from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const ScrollUp = (props) => {



    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const BootstrapButton = withStyles({
        root: {
            right: "95%",
            position: "fixed",
            borderRadius: "16px",
            zIndex: "1000",
            bottom: "150px",
            fontWeight: "700",
            textTransform: 'none',
            fontSize: 16,
            padding: '6px 12px',
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: '#C8E0DA',

            '&:hover': {
                backgroundColor: '#0069d9',
                borderColor: '#0062cc',
                boxShadow: 'none',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#0062cc',
                borderColor: '#005cbf',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        },
    })(Button);


    return (
        <div>
            <BootstrapButton onClick={scrollUp} variant="contained"
                className="scrollUpBtn">
                <ArrowUpwardIcon />
            </BootstrapButton>


        </div >
    )
}

export default ScrollUp;