import React from 'react'
import { useState, useEffect } from 'react'
import {db} from "../firebase"
import { collection , getDocs } from 'firebase/firestore'
import List from '../components/card/List'
import "./feed.css"
import { Box } from '@mui/material'
import Popup from "../components/form/Popup"



const Feed = () =>  {
  
    const [book,setBook]=useState([]);
    const usersRef =collection(db,"books");
    useEffect(()=>{
        const getBook=async()=>{
            const data =await getDocs(usersRef);
            /* console.log(data.docs.map((book)=>({...book.data(), id: book.id}))) */
            setBook(data.docs.map((book)=>({...book.data(), id: book.id})))
        };
        getBook()
    },[])
    book?.map((content)=>
    console.log(content)
)
  return (
    <div style={{ width: '100%' }}>
    <Box
   sx={{
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    p: 1,
    m: 1,
    borderRadius: 1,

  }}
  >
    {!book ? (
                <>
                    loading
                </>
            ):  (
                book?.map((content)=>
                    <List key={content.DocId} content={content}/>
                )
            )
           }
    
      
    

    
  </Box> 
  <Popup/>
  </div>
     

    
  )
}
  
/* export default function FlexDirection() {
  return (
    <div style={{ width: '100%' }}>
     
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 1,
          m: 1,
          
          borderRadius: 1,
        }}
      >
        <List/>
        <List/>
        <List/>
      </Box>
     
    </div>
  );
} */
export default Feed