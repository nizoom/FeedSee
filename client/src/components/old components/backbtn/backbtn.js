import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./backbtn.css"

const BackBtn = (props) => {

    const useStyles = makeStyles(theme => ({ //button styling
        root: {
            color: "#28244E",
            borderColor: "#28244E",
            fontSize: "1.5em",
            borderWidth: "5px",
            borderRadius: "16px",
            marginTop: "5px",

            '&:hover': {
                color: "#3ACBA3 ",
                borderColor: "white",
                fontSize: "1.5em",
                borderWidth: "5px",
            },

        }
    }));

    const classes = useStyles();

    const handleClick = () => {
        props.handler()
    }

    return (
        <div style={{ position: "absolute" }}>
            <Button variant="outlined" color="primary" size="large" className={classes.root}
                onClick={handleClick} style={{ marginTop: "10px", marginLeft: "10px" }}
            >
                <span className="buttonSpan">&#8617;</span>

            </Button>

        </div>

    )
}

export default BackBtn;