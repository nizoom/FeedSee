import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import "./input.css"
import Grid from '@material-ui/core/Grid';


const Input = (props) => {

    const useStyles = makeStyles(theme => ({ //button styling
        root: {
            color: "#89EBCF",
            borderColor: "#89EBCF",
            fontSize: "1.5em",
            borderWidth: "5px",
            height: "70px",
            // [theme.breakpoints.up('xs')]: {
            //     marginTop: '10px',
            // },


            '&:hover': {
                color: "#89EBCF",
                borderColor: "#89EB90",
                fontSize: "1.5em",
                borderWidth: "5px",
            },

        }
    }));

    const classes = useStyles();

    const [inputContent, setInputContent] = useState("");

    const [validity, setValidity] = useState(true);

    const handleChange = (event) => {
        let usernameAttempt = event.target.value;
        setInputContent(usernameAttempt);
    }

    const passSubmitted = () => {
        console.log("passed")
        props.handleInput(inputContent);
        //reset for next search
        setValidity(true)
    }

    const checkValidity = () => {

        console.log(validity)

        const regex = /[^a-zA-Z\d\s_]/
        // if inputContent is empty -> invalid 
        if (inputContent === "") {
            console.log("stopped 1")
            return setValidity(false);
        }
        // if inputContent contains non alphanumeric chars except dashes  -> invalid 

        if (regex.test(inputContent)) {
            console.log("stopped 2")
            return setValidity(false);
        }

        // if inputContent is less than 4 and no more than 15 chars long 
        if (inputContent.length < 4 || inputContent.length > 15) {
            console.log("stopped 3")
            return setValidity(false);
        }

        if (validity) {
            console.log(validity)
            passSubmitted()
        }

        //reset for next search
        return setValidity(true)
    }


    //    <InputLabel style={{ color: "white", fontWeight: "bold", }}
    //                 htmlFor="twitterInput"
    //             > Twitter Handle </InputLabel>

    //item xs={6}

    return (

        <div className="inputWrapper">


            <Grid container direction="row" justify="space-evenly" >

                <Grid >
                    <TextField id="standard-basic"

                        name="twitterInput"
                        onChange={handleChange}
                        style={{
                            backgroundColor: "#C9B7E2",
                            borderRadius: "5%",
                            opacity: ".8"
                        }}
                        label="TwitterHandle"
                        InputLabelProps={{ className: "textfield___label" }}
                    />
                </Grid>

                <Grid>
                    <Button variant="outlined" color="primary" size="large"

                        onClick={checkValidity}
                        className={classes.root}
                    > Submit </Button>

                    {validity ? null : <p
                        className="error__message"
                    > Handle must be 4 to 15 characters of only numbers, letters, and underscores </p>}
                </Grid>

            </Grid>

        </div >
    )
}

export default Input;