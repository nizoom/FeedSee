# FeedSee

Want to see what a give person sees on Twitter? Just enter their name.

## What is it?

FeedSee is a web scraping app that provides a peak into the public social network of your
favorite public figures, artists, and even friends. Enter a twitter handle and see all the most recent posts
from their followers. The result is a more wholistic picture of that individual's interests and shared communities. The project utilizes the Twitter API fetch tweet data and users can subscribe to a specific account's feed that they are interested in.

_Technologies used for this app: ReactJS, Typescript, NodeJS, Express, Chakra UI, and Firebase_

## Use deployed app

This app was deployed, but unfortunately it is no longer viable after Elon Musk removed Twitter's free tier for its API. In order to still demonstrate what the app does, I've included GIFs of its different features. If you'd like to run it locally there are steps at the bottom of this page.

## Main Features

### Main Menu - 3 ways of using the app

//ADD MENU GIF//

- Randomize: Clicking Randomize selects a random account from a list of public figures. This function is helpful to get people started if they can't think of a specific Twitter account off the top of their head. If I were to improve this function it would generate a live list of popular accounts once a day in an effort to capture newer popular users and remove deleted ones.
- Enter Handle: See the feed from a specifically entered account. If the FeedSee user already has an idea of what they want to see, they can enter an account name in the input field.
- Pick from subscriptions: Select a feed from a list of your favorites. If a FeedSee user is consistenly curious about what a certain Twitter user is seeing, they can subscribe to their feed. This path presents the FeedSee user with a dropdown of their subscriptions to choose from. The option to subscribe is activated by hovering over any Tweet card and is available in all of the paths.

## Responsive UI

## Authentication and database

This app uses Google's Firebase to authenticate users. Users can sign in using their Gmail or create an account user an email and password. Their subscriptions are stored in a Firestore database. The subscriptions list is fetched when a user enters the main menu unless the list is already available because the user is coming back from a previous search (using the back arrow at the top right). The list also refreshes when a subscription is added or removed.

## Reflection

This project was intended to push my UX abilities and to use modern web technologies like TypeScript and Chakra UI. All designs were created in Figma and implemented using JSX and CSS libraries. A few graphics such as the cards and landing page graphic were exported as PNGs. On the backend I focused on using functional programming and improved error handling.

### New Features for upcoming versions:

Depending on the status of the API, here are some new features I could implement.

- Subscribe to inputted handle. Let's say you know you're interested in seeing George RR Martin's feed on a regular basis. At the moment you have to input the same handle everytime instead of simply subscribing once. This feature would let you subscribe directly based on the inputted handle.
- Word Cloud. Visually show the frequency of language that a user is exposed to through a word cloud.
- Add support for tweets that use media.
- Ability to subscribe to hashtags

### Setting up the proxy server in `client/package.json`

This step enables the backend to communicate with the front end. Make sure you're in the server directory and `npm run star:dev`. Now in `client/package.json` copy in the line ` "proxy": "http://localhost:4000",`

### To Visit App locally on your machine:

Make sure you're in the server directory and run npm start. Then move to the client directory and do the same thing.

The React server should automatically start on: `localhost:3000`. Happy scraping!
