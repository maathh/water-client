import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAkHM_Ti0pvgLjnOLCM53h6vwhdLS9BGtA",
    authDomain: "smart-water-168ca.firebaseapp.com",
    databaseURL: "https://smart-water-168ca.firebaseio.com",
    projectId: "smart-water-168ca",
    storageBucket: "smart-water-168ca.appspot.com",
    messagingSenderId: "572263116872",
    appId: "1:572263116872:web:637aaead0d9a959c15687d",
    measurementId: "G-783B9D19EX"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();

const db = firebase.firestore();

export {firebase, db};