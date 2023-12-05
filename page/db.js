import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvlfsWklnp-pDfp5LR1HOES272L0UFiDg",
    authDomain: "halalis-main.firebaseapp.com",
    projectId: "halalis-main",
    storageBucket: "halalis-main.appspot.com",
    messagingSenderId: "555437806523",
    appId: "1:555437806523:web:765998f340fb3f5f232a9e",
    measurementId: "G-5MK6E9MP0P"
}

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export async function firebase_add(uuid, info) {
    await dbh.collection("users").doc(uuid).set(info)
}

export function firebase_search(uuid){

}