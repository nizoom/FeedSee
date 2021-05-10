import React from "react";
import TextField from '@material-ui/core/TextField';

const TwitterResults = ( props ) => {
    return (
        <TextField
        id="standard-textarea"
        label="Multiline Placeholder"
        placeholder="Results"
        multiline
        />

    )
}

export default TwitterResults;