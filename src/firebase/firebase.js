import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
	// going to init later
});
const auth = getAuth();
const db = getFirestore();

export { app, auth, firestore };
