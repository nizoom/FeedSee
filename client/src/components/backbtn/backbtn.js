import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const BackBtn = (props) => {

    const useStyles = makeStyles(theme => ({ //button styling
        root: {
            color: "#28244E",
            borderColor: "#C9B7E2",
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
        <div>
            <Button variant="outlined" color="primary" size="large" className={classes.root}
                onClick={handleClick}
            >
                Back
            </Button>

        </div>

    )
}

export default BackBtn;