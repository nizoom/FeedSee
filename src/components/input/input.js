import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Input = ( props )  => {

    const [inputContent, setInputContent] = useState("");

    const handleChange = ( event ) => {
        let usernameAttempt = event.target.value;
        setInputContent(usernameAttempt);
    }

    const passSubmitted = () => {
        props.handleInput(inputContent);
    }
    
    return(

    <div>
        <TextField id="standard-basic" label="Twitter Handle" 
        onChange = {handleChange}/>

        <Button variant="contained" color="primary" 
        style = {{marginLeft: "25px", marginTop: "15px"}}
        onClick = {passSubmitted}
        > Submit </Button>
    </div>
    )
}

export default Input;