import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Input = (props) => {

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

    return (

        <div>
            <TextField id="standard-basic" label="Twitter Handle"
                onChange={handleChange} />

            <Button variant="contained" color="primary"
                style={{ marginLeft: "25px", marginTop: "15px" }}
                onClick={checkValidity}
            > Submit </Button>

            {validity ? null : <p> Handle must be 4 to 15 characters of only numbers, letters, and underscores </p>}
        </div>
    )
}

export default Input;