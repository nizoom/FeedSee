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
            padding: "10px 20px 10px 20px",
            borderRadius: "16px",
            width: "100%",

            '&:hover': {
                color: "#3AC0CB",
                borderColor: "white",
                fontSize: "1.5em",
                borderWidth: "5px",
                borderRadius: "16px",

            },

        }
    }));

    const classes = useStyles();



    const handleClick = () => {
        setCloudStatus(!cloudStatus)
        props.returnClickToParent(!cloudStatus);
        // change class to make screen go black
    }

    return (
        <div className="cloudBtnWrapper">
            <Button variant="outlined" color="primary" size="large" className={classes.root}
                onClick={handleClick}>
                View Word Cloud
            </Button>
        </div>
    )
}

export default CloudBtn