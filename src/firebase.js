// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"
import { getAuth ,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC1wKUNuUBEnkj6e4RKc8PQcoscy6dCPo",
  authDomain: "bookzone1-7aefc.firebaseapp.com",
  projectId: "bookzone1-7aefc",
  storageBucket: "bookzone1-7aefc.appspot.com",
  messagingSenderId: "204321773113",
  appId: "1:204321773113:web:4cabccce11bb4a15971fe8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const authProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const BookAPIKey="AIzaSyDoU9m_NNaKtWHMcgni0gwBsGT8LUPVDFM"
