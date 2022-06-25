import { Avatar, Box } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { returnUserBooks } from '../../firebase_func'
import List from '../../components/card/List'
const ProfilePage = ({user}) => {
  const [book,setBook]=useState()
  useEffect(()=>{
    const getBook=async()=>{
        const data =await returnUserBooks(user)
        /* console.log(data.docs.map((book)=>({...book.data(), id: book.id}))) */
        setBook(data)
        console.log("profile useEfect is running")
    };
    getBook()
},[user])
  return (
    <>
    <div style={{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(6, 1fr)" }}>
      <div style={{gridArea:"1 / 1 / 7 / 3",backgroundColor:"#CCF3EE",display:"flex"}}>
        <Box style={{marginLeft:70 ,marginTop:30}}>
        <Avatar
        alt="Remy Sharp"
        src={user.photoURL}
        sx={{ width: 200, height: 200 }}
        />
        <div><b>NAME:</b> {user.displayName}</div>
        <div><b>EMAIL:</b> {user.email}</div>
        </Box>
        
      </div>
      
      <div style={{gridArea:"1 / 3 / 7 / 6",display:"flex"}}>
      {!book ? (
                <>
                    loading
                </>
            ):  (
                book?.map((content)=>
                    <List user={user} key={content.DocId} content={content}/>
                )
            )
           }
      </div>
    </div>
    </>
  )
}

export default ProfilePage