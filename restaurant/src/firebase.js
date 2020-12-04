import firebase from "firebase";


const firebaseApp =firebase.initializeApp(
    {
      apiKey: "AIzaSyAvCs-d0mR3JycLddv34GikdYAjudQSeso",
      authDomain: "ordee-1e683.firebaseapp.com",
      projectId: "ordee-1e683",
      storageBucket: "ordee-1e683.appspot.com",
      messagingSenderId: "82394903247",
      appId: "1:82394903247:web:d5323c3d8c486f40227dba",
      measurementId: "G-4KBPTZQX8J"
      });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage(); 

export {db,auth,storage};