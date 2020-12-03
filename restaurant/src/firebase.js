import firebase from "firebase";


const firebaseApp =firebase.initializeApp(
    {
        apiKey: "AIzaSyBBeaFmdDPD4zCdgv0ppgXBY2yy3hZdXnU",
        authDomain: "ordee-6349f.firebaseapp.com",
        databaseURL: "https://ordee-6349f.firebaseio.com",
        projectId: "ordee-6349f",
        storageBucket: "ordee-6349f.appspot.com",
        messagingSenderId: "374408757894",
        appId: "1:374408757894:web:a8741e333645aa5137c707",
        measurementId: "G-WSFX9MEETF"
      });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage(); 

export {db,auth,storage};