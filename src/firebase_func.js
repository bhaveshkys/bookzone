import { async } from "@firebase/util";
import { db,app,auth,authProvider,storage } from "./firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref, deleteObject } from "firebase/storage";
export const signin =()=>{
    signInWithPopup(auth, authProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    checkNewUser(user)
    window.location.reload(false);
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
            user_uid:user.uid,
            photoURL:user.photoURL
        }
        addDoc(userCollRef,userInfo)
    }

}

export const returnUserFromBook=async(user)=>{
  const userCollRef = collection(db,"user")
  const myQuery=query(userCollRef,where("user_uid","==",user))
  const mySnapShot=await getDocs(myQuery)
  let result
  if(mySnapShot.empty==false){
    mySnapShot.forEach((doc)=>{
     result=  doc.data()
    })
    return result
  }
}


export const returnFilteredBooks=async(genre,lessThan,moreThan)=>{
  const bookCollRef=collection(db,"books")
  const myQuery=query(bookCollRef,where("genre","==",genre))
  const mySnapShot=await getDocs(myQuery)
  let arr=[]
  const checkMoreThan=(book)=>{
    return book.price >= moreThan
  }
  const checkLessThan=(book)=>{
    return book.price <= lessThan
  }
  mySnapShot.forEach((doc)=>{
    arr.push(doc.data())
   })
   console.log(arr)
   let a2= arr.filter(checkMoreThan)
   let a3=arr.filter(checkLessThan)
   console.log(a3)
   return a3
}
export const returnUserBooks=async(user)=>{
const bookCollRef=collection(db,"books")
const myQuery=query(bookCollRef,where("user","==",user.uid))
const mySnapShot=await getDocs(myQuery)
let arr=[]
mySnapShot.forEach((doc)=>{
  arr.push({...doc.data(), id: doc.id})
})
return arr
}
export const notReturnUserBooks=async(user=null)=>{
  if (user==null) {
    const data =await getDocs(collection(db,"books"));
    return data
  } else {
    
  }
  const bookCollRef=collection(db,"books")
  const myQuery=query(bookCollRef,where("user","!=",user?.uid))
  const mySnapShot=await getDocs(myQuery)
  let arr=[]
  return mySnapShot
  /* mySnapShot.forEach((doc)=>{
    arr.push({...doc.data(), id: doc.id})
  })
  console.log(arr)
  return arr */
  }
  export const deleteBook=async(contentId,uuid)=>{
    const imageRef= ref(storage, `bookImage/${uuid}`);
    await deleteObject(imageRef)
    await deleteDoc(doc(db,"books",contentId))
  }
