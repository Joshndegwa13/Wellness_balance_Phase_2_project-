import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
    apiKey: "AIzaSyDz_xKp3gTo9BnZgWQ2DHMhG2vxzgdbU7Q",
    authDomain: "fitness-coach-5b734.firebaseapp.com",
    projectId: "fitness-coach-5b734",
    storageBucket: "fitness-coach-5b734.appspot.com",
    messagingSenderId: "271687691756",
    appId: "1:271687691756:web:92049355b367898dd024c9"
};

const app = initializeApp(firebaseConfig); //initializing firebase
const auth = getAuth();

export { auth };
