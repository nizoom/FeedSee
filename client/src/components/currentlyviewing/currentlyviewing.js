import React from "react";
import "./currentlyviewing.css"

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const CurrentlyViewing = (props) => {
    const useStyles = makeStyles(theme => ({ //button styling
        root: {
            color: "#28244E",
            borderColor: "#64636B",
            borderWidth: "5px",
            borderRadius: "16px",
            background: "-webkit-linear-gradient(45deg, #2F3639, #D2DEE3, #89EBCF 80%)",
            opacity: ".8",




            '&:hover': {
                color: "#3ACBA3 ",
                borderColor: "white",
                borderWidth: "5px",
            },


        }
    }));
    const classes = useStyles();

    const handleClick = () => {
        props.changeStatus(!props.status)
    }

    return (
        <div className="current_view_wrapper">

            <p>  See {props.authorName}'s feed below</p>

            <Button variant="outlined" size="large" className={classes.root}
                onClick={handleClick} style={{ marginBottom: "5px" }}
            >
                <RotateLeftIcon style={{ color: 'black' }} />




            </Button>


        </div >
    )
}

export default CurrentlyViewing;

{/* <span style={{ fontSize: "30px", color: "#64636B" }}>

&#10155;



</span> */}