async function validateUsername(submittedContent, credentials) {

    const Twitter = require('twitter-v2');

    const client = new Twitter(credentials);

    let id, name, username;
    let valid
    // THIS WORKS 

    const data = await client.get("users/by?usernames", { usernames: `${submittedContent}` })

        .then(function (data) {
            //console.log(data)

            return data;

        })

        .catch((error) => {
            console.log(error)
            return "error";
        })


    return data;


}


module.exports = validateUsername;

