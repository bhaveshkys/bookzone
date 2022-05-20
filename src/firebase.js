// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"
import { getAuth ,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWiWni_DvcQbPzEyl9Hqbnzjhj9Ta5AWE",
  authDomain: "bookzone-9c8d4.firebaseapp.com",
  projectId: "bookzone-9c8d4",
  storageBucket: "bookzone-9c8d4.appspot.com",
  messagingSenderId: "447673534692",
  appId: "1:447673534692:web:a15dcbd6ed437576c504f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const authProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
