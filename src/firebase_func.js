import { async } from "@firebase/util";
import { db,app,auth,authProvider } from "./firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const signin =()=>{
    signInWithPopup(auth, authProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    checkNewUser(user)

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode,errorMessage,credential)
    // ...
  });
  }
export const checkNewUser=async(user)=>{
    const userCollRef = collection(db,"user")
    const myQuery =query(userCollRef,where("email","==",user.email))
    const mySnapShot = await getDocs(myQuery)
    if (mySnapShot.empty) {
        const userInfo ={
            name:user.displayName,
            email:user.email,
            user_uid:user.uid
        }
        addDoc(userCollRef,userInfo)
    }

}