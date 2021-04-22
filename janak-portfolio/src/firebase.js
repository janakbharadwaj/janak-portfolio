import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAj_ZvjIRRUpmBnrGs9NLFsKOYGodYZVk",
    authDomain: "janak-portfolio.firebaseapp.com",
    projectId: "janak-portfolio",
    storageBucket: "janak-portfolio.appspot.com",
    messagingSenderId: "228855550649",
    appId: "1:228855550649:web:e6f8c479a5badc36638168",
    measurementId: "G-XWVBJPTSPD"
});

var db = firebaseApp.firestore();

export { db };