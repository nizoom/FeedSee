// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(process.env);
export const config = {
  firebaseConfig: {
    apiKey: process.env.REACT_APP_FB_KEY,
    authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FB_PROJ_ID,
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID,
  },
};

// Initialize Firebase
const app = initializeApp(config.firebaseConfig);
