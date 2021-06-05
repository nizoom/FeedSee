import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const CloudBtn = (props) => {

    const useStyles = makeStyles(theme => ({ //button styling
        root: {
            color: "#89EBCF",
            borderColor: "#C9B7E2",
            fontSize: "1.5em",
            borderWidth: "5px",

            '&:hover': {
                color: "#89EBCF",
                borderColor: "#89EB90",
                fontSize: "1.5em",
                borderWidth: "5px",
            },

        }
    }));

    const classes = useStyles();

    return (
        <div>
            <Button variant="outlined" color="primary" size="large" className={classes.root}>
                Word Cloud
            </Button>
        </div>
    )
}

export default CloudBtn