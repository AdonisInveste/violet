import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};


const config = {
    apiKey: "AIzaSyD1k5fyl4JPOsfpKobmrbaoFVZqRiUu7Uc",
    authDomain: "violet-1a1de.firebaseapp.com",
    databaseURL: "https://violet-1a1de.firebaseio.com",
    projectId: "violet-1a1de",
    storageBucket: "violet-1a1de.appspot.com",
    messagingSenderId: "491165395218",
    appId: "1:491165395218:web:2cb87c522771664f"
};

firebase.initializeApp(config)

firebase.firestore().settings(settings);

export default firebase;