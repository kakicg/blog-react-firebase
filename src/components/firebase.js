import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAXgVNfkzXwieGWsSTVmIAY19nz1JVxhkM",
  authDomain: "blog-3aedb.firebaseapp.com",
  projectId: "blog-3aedb",
  storageBucket: "blog-3aedb.appspot.com",
  messagingSenderId: "745566857285",
  appId: "1:745566857285:web:2848007c320d54ca245b2c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };