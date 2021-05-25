

// const credentials = {
//     consumer_key: `sF1NuA8aYhyJKmrgzHSoLqIFk`,
//     consumer_secret: `i1mdlM20Xsx9nhKYHE6bI6e6t1rU2qonr7uayfLVD5Z49eXfuD`,
//     access_token_key: `1390350156726407170-QtPf6zHPPncuKKMNkhkfkGpgbRViko`,
//     access_token_secret: `K7rnnNmtoeypzWXdluTKY7cVLiAHTiSQ2wmjOMb5CCJK5`
// }


//const url = `https://api.twitter.com/2/users/${userId}/following`;



async function getFollowers(id, credentials) {


    function Follower(name, id) { //keep track of both name and id of each follower 
        this.name = name;
        this.id = id;
    }

    let allFollowers = [];

    const Twitter = require('twitter-v2');

    const client = new Twitter(credentials);


    const data = await client.get(`users/${id}/following`)//, {
        //  screen_name
        //})
        .then(function (data) {
            obj = Object.values(data)
            //list of all followers from fetch
            let arr = obj[0]

            for (let i = 0; i < arr.length; i++) {

                const nextFollower = new Follower(arr[i].name, arr[i].id) //name, id
                //console.log(nextFollower)
                allFollowers.push(nextFollower);
            }

            //console.log(followersNames)
        })

        .catch((error) => {
            console.log(error)
            //return "error";
        })
    //console.log(typeof allFollowers);
    //console.log(allFollowers[0].name); // how you would access name of a single follower
    //console.log(allFollowers);
    return allFollowers;
}

//getFollowers(credentials)

module.exports = getFollowers;