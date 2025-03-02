// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, push } from "firebase/database";

const firebaseConfig = {

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, child, push };
