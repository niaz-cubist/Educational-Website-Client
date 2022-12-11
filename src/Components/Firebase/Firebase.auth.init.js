
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCxiyleeWs3_fPReYuPXmlNBjieTdZL3Fk",
    authDomain: "edu-learn-hero.firebaseapp.com",
    projectId: "edu-learn-hero",
    storageBucket: "edu-learn-hero.appspot.com",
    messagingSenderId: "280970820300",
    appId: "1:280970820300:web:ce1bfb3382e78347896069",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;