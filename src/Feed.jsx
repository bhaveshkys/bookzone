import React from 'react'
import { useState, useEffect } from 'react'
import {db} from "./firebase"
import { collection , getDocs } from 'firebase/firestore'

const Feed = () => {
    const [users,setUsers]=useState([]);
    const usersRef =collection(db,"example");
    useEffect(()=>{
        const getUsers=async()=>{
            const data =await getDocs(usersRef);
            console.log(data.docs.map((user)=>({...user.data(), id: user.id})))
            setUsers(data.docs.map((user)=>({...user.data(), id: user.id})))
        };
        getUsers()
    },[])

  return (
    <div>{
      users.map((user)=>{
        return(
          <div>
            {user.name}
          </div>
        )
      })
    }

    </div>
  )
}
export default Feed