import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBD5EAuxVJscINU4lMv_QmEQvINSd7JP3U",
    authDomain: "proyectoarese.firebaseapp.com",
    projectId: "proyectoarese",
    storageBucket: "proyectoarese.appspot.com",
    messagingSenderId: "850979361713",
    appId: "1:850979361713:web:61c65cc9a8a29f9d4d6390",
    measurementId: "G-4NW6RRD402"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);