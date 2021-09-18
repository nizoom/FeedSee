# Enter-the-Echo-Chamber
A web app that provides a peek into what a twitter user's feed exposes them to

##What is it? 
The Echo Chamber is a web scraping app that provides a peak into the public social network of your
favorite public figures, artists, and even friends! Enter a twitter handle and see all the most recent posts 
from their followers. The result is a more wholistic picture of that individual's interests and shared communities. 
There's also a world cloud generator of all that Twitter content to indicate popular language. The project utilizes the Twitter API 
to receive the data and then uses a Node backend to process the tweets in chronological order and consolidates all verbal content for a custom word cloud.

##Use deployed app

To use the app please visit https://entertheechochamber.herokuapp.com/

Enter a twitter handle (no need for the @ symbol) and click submit. If it is a valid account then 100 of that person's followers will be pulled by the Twitter API.
The node backend will iterate through that list and pull the most recent tweet from each account. Those tweets, the author, and date will be displayed in a card.
You can also click random to select from a set list of popular accounts.

Click view word cloud to see a custom word cloud made from the combined text of all the tweets. 

##Installation and set up instructions

After cloning this repo, run npm install to install all dependencies. Please note that in order for the app to get news you will need a Twitter API 
keys which can be found here https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api. There should be 4 keys: a consumer key,
consumer secret, access token key, and access token secret. These keys should be stored in a .env file and be accessible to server/index.js. Here they are stored as
`const credentials`.

The key are used in two files. 1) src/Components/Map/getNews.js and 2) src/Components/Map/getplacename.js
