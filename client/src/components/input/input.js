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
        props.handleInput(inputContent);
    }

    const checkValidity = () => {
        const regex = /[^a-zA-Z\d\s_]/
        // if inputContent is empty -> invalid 
        if (inputContent === "") {
            setValidity(false);
        }
        // if inputContent contains non alphanumeric chars except dashes  -> invalid 

        if (regex.test(inputContent)) {
            setValidity(false);
        }

        // if inputContent is less than 4 and no more than 15 chars long 
        if (inputContent.length < 4 || inputContent.length > 15) {
            setValidity(false);
        }
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