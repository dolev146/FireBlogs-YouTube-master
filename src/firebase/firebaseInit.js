import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDnAGeIueCBChJnOMS5VZhDaHEjs9mhJY8",
    authDomain: "fireblogsyt-c0af4.firebaseapp.com",
    projectId: "fireblogsyt-c0af4",
    storageBucket: "fireblogsyt-c0af4.appspot.com",
    messagingSenderId: "843474492434",
    appId: "1:843474492434:web:e9ef3201693e100a99cccb"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
