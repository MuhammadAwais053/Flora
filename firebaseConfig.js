import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8QII8iPQrPN3f5y40EjeXr1i9_snKzzU",
  authDomain: "flora-5c96b.firebaseapp.com",
  projectId: "flora-5c96b",
  storageBucket: "flora-5c96b.firebasestorage.app",
  messagingSenderId: "91375080233",
  appId: "1:91375080233:android:288ae2a0025dff241c1d38"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
