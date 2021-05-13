require('dotenv').config();

const express = require("express");

const app = express();

const validateHandle = require("./twitterAPI/validateHandle");

const getFollowers = require("./twitterAPI/getfollowers");

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

        let obj = Object.values(valid)

        let drillDown = obj[0][0];

        //invalid name 

        if (drillDown.id != undefined) { // valid name 

            console.log("We are valid")

            let startingId = obj[0][0].id

            const arrOfFollowers = await getFollowers(startingId, credentials)



            //pull tweets 
        } else {
            //invalid name 

            console.log("There's an error / deleted account")
        }




        //res.send(req.params)
    }


})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


//validateHandle("kendricklamar14554", credentials)
