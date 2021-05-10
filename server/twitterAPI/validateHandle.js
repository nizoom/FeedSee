

const Twitter = require('twitter-v2');

require('dotenv').config();



const client = new Twitter({
    consumer_key: `${process.env.CONSUMER_KEY}`,//'sF1NuA8aYhyJKmrgzHSoLqIFk', //, //
    consumer_secret: `${process.env.CONSUMER_SECRET}`, //`${process.env.REACT_APP_CONSUMER_SECRET}`, //,
    access_token_key: `${process.env.ACCESS_TOKEN_KEY}`, //`${process.env.REACT_APP_ACCESS_TOKEN_KEY}`,
    access_token_secret: `${process.env.ACCESS_TOKEN_SECRET}`
});



let params = { usernames: "JoeBiden" }

async function validateUsername() {

    let id, name, username;
    let valid
    // THIS WORKS 

    const { data } = await client.get("users/by?usernames", params)

    if (data === undefined) {
        console.log("error");
        // return not valid 
    } else {
        let { id, name, username } = data[0];
        console.log(id);

        return id, name, username
    };


}

validateUsername()


