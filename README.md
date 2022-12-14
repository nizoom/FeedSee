# FeedSee

A web app that provides a peek into what a given person on Twitter is exposed to.

## What is it?

FeedSee is a web scraping app that provides a peak into the public social network of your
favorite public figures, artists, and even friends! Enter a twitter handle and see all the most recent posts
from their followers. The result is a more wholistic picture of that individual's interests and shared communities.
There's also a world cloud generator of all that Twitter content to indicate popular language. The project utilizes the Twitter API
to receive the data and then uses a Node backend to process the tweets in chronological order and consolidates all verbal content for a custom word cloud.

## Use deployed app

This project will be deployed shortly for public use

Enter a twitter handle (no need for the @ symbol) and click submit. If it is a valid account then 100 of that person's followers will be pulled by the Twitter API.
The node backend will iterate through that list and pull the most recent tweet from each account. Those tweets, the author, and date will be displayed in a card.
You can also click random to select from a set list of popular accounts.

Click view word cloud to see a custom word cloud made from the combined text of all the tweets.

## Installation and set up instructions

After cloning this repo, run npm install in both the client and server folder to install all dependencies. Please note that in order for the app to get news you will need Twitter API
keys which can be found here https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api. There should be 4 keys: a consumer key, consumer secret, access token key, and access token secret. These keys should be stored in a .env file. Please make sure the keys are accessible to server/index.js. Here they are stored as `const credentials`.

### Setting up the proxy server in `client/package.json`

This step enables the backend to communicate with the front end. Make sure you're in the server directory and run npm start. The terminal should say :
`Server listening on <Port Number>.` This is usually 3001 or 4000. Now in `client/package.json` copy in the line ` "proxy": "http://localhost:3001",`

### To Visit App locally on your machine:

Make sure you're in the server directory and run npm start. Then move to the client directory and do the same thing.

The React server should automatically start on: `localhost:3000`. Happy scraping!

## Reflection

This web app was a personal project that helped push my web development skills beyond front end and into data processing. I set out to build a tool that was kind an omnicient eye looking down onto social media from a broader view point than simply looking at somoeone's profile. I think that much was achieved. It helped color in a fuller picture of someone's presence online.

There were certainly some technical challenges along the way. Querying the API in this way required at least 2 steps. Firstly getting the initial user information
including their following list, and lastly iterating over that list to get each most recent tweets. These steps involved a lot of asynchronous javascript and processing of the resulting JSON objects. The word cloud was also a good excersise in manipulating strings and creating objects conditionally based on what was already inside the object.

Technologies used for this app: ReactJS, NodeJS, Express, CSS, HTML.

#### For more information please read post 3 of my blog! https://www.nissimram.com/#/Blog
