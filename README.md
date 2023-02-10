# FeedSee

Want to see what a give person sees on Twitter? Just enter their name.

## What is it?

FeedSee is a web scraping app that provides a peak into the public social network of your
favorite public figures, artists, and even friends. Enter a twitter handle and see all the most recent posts
from their followers. The result is a more wholistic picture of that individual's interests and shared communities. The project utilizes the Twitter API fetch tweet data and users can subscribe to a specific account's feed that they are interested in.

## Use deployed app

This app was deployed, but unfortunately it is no longer viable after Elon Musk removed Twitter's free tier for its API. In order to still demonstrate what the app does, I've included GIFs of its different features.

## Main Features

### Main Menu - 3 ways of using the app

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
