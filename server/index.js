require('dotenv').config();

const express = require("express");

const app = express();

const validateHandle = require("./twitterAPI/validateHandle")

const PORT = process.env.PORT || 3001;

const credentials = {
    consumer_key: `${process.env.CONSUMER_KEY}`,
    consumer_secret: `${process.env.CONSUMER_SECRET}`,
    access_token_key: `${process.env.ACCESS_TOKEN_KEY}`,
    access_token_secret: `${process.env.ACCESS_TOKEN_SECRET}`
}


app.get("/api/users/:handle", (req, res) => {
    //res.json({ message: "Hello from server" })

    //get handle from request param 

    validation()
    async function validation() {


        const twitterHandle = req.params.handle

        const valid = await validateHandle(twitterHandle, credentials)

        //invalid name 

        // if (valid === "error") {
        //     console.log("error")
        //     res.send("error")

        // } else {
        //     // For a valid name 

        //     let obj = Object.values(valid)

        //     let drillDown = obj[0][0];
        // }


        let obj = Object.values(valid)

        console.log(obj);

        console.log(obj);

        // console.log(`This is obj ${obj}`);

        //console.log(`This is valid ${valid}`)

        //valid != "error" ? console.log("We good ") : console.log("we not good");

        //res.send(req.params)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

//let params = { usernames: "JoeBiden" }

//validateHandle("kendricklamar14554", credentials)
