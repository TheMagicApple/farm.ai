import * as firebase from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApiG61TlqBYWctvUeBl2X0uJZ42HKbFoQ",
  authDomain: "gardenai-6e30f.firebaseapp.com",
  projectId: "gardenai-6e30f",
  storageBucket: "gardenai-6e30f.appspot.com",
  messagingSenderId: "369650869839",
  appId: "1:369650869839:web:7b295b0af5f3df0d8e6c3a"
};

const fireapp = firebase.initializeApp(firebaseConfig);
export const db=getFirestore(fireapp);
