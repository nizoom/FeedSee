import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./initcloudbtn.css"


const CloudBtn = (props) => {

    const [cloudStatus, setCloudStatus] = React.useState(false)

    const useStyles = makeStyles(theme => ({ //button styling
        root: {
            color: "#28244E",
            borderColor: "#C9B7E2",
            fontSize: "1.5em",
            borderWidth: "5px",

            '&:hover': {
                color: "#3AC0CB",
                borderColor: "white",
                fontSize: "1.5em",
                borderWidth: "5px",
            },

        }
    }));

    const classes = useStyles();

    // const childFunction = (e) => {
    //     props.functionCallFromParent(e)
    //   }

    const handleClick = () => {
        setCloudStatus(!cloudStatus)
        props.returnClickToParent(cloudStatus);
    }

    return (
        <div className="cloudBtnWrapper">
            <Button variant="outlined" color="primary" size="large" className={classes.root}
                onClick={handleClick}>
                Tweet Word Cloud
            </Button>
        </div>
    )
}

export default CloudBtn