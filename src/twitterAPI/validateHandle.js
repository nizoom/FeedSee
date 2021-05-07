const Twitter = require('twitter-v2');

const client = new Twitter({
  consumer_key: 'sF1NuA8aYhyJKmrgzHSoLqIFk',
  consumer_secret: 'i1mdlM20Xsx9nhKYHE6bI6e6t1rU2qonr7uayfLVD5Z49eXfuD',
  access_token_key: '1390350156726407170-QtPf6zHPPncuKKMNkhkfkGpgbRViko',
  access_token_secret: 'K7rnnNmtoeypzWXdluTKY7cVLiAHTiSQ2wmjOMb5CCJK5',
});



let params = {usernames: "JoeBidenz"}

async function validateUsername (){

    let id, name, username;
    let valid 
    // THIS WORKS 

    const  { data }  = await client.get("users/by?usernames", params)

    if(data === undefined){
        console.log("error");
        // return not valid 
    } else {
     let { id, name, username } = data[0];
     return id, name, username 
    }

    

    //console.log(name);

    //console.log(data[0].id);
    

    


   // data = [ { id: '939091', name: 'Joe Biden', username: 'JoeBiden' } ]

    
    
}

validateUsername()






