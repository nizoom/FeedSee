

// const credentials = {
//     consumer_key: `sF1NuA8aYhyJKmrgzHSoLqIFk`,
//     consumer_secret: `i1mdlM20Xsx9nhKYHE6bI6e6t1rU2qonr7uayfLVD5Z49eXfuD`,
//     access_token_key: `1390350156726407170-QtPf6zHPPncuKKMNkhkfkGpgbRViko`,
//     access_token_secret: `K7rnnNmtoeypzWXdluTKY7cVLiAHTiSQ2wmjOMb5CCJK5`
// }


//const url = `https://api.twitter.com/2/users/${userId}/following`;



async function getFollowers(id, credentials) {

    let followers = [];

    const Twitter = require('twitter-v2');

    const client = new Twitter(credentials);

    const data = await client.get(`users/${id}/following`) //{ usernames: `${submittedContent}` }
        .then(function (data) {
            obj = Object.values(data)
            //console.log(obj[0])
            let arr = obj[0]

            for (let i = 0; i < arr.length; i++) {
                followers.push(arr[i].username);
            }

            console.log(followers)
        })

        .catch((error) => {
            console.log(error)
            //return "error";
        })

    return followers;
}

//getFollowers(credentials)

module.exports = getFollowers;