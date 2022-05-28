import React from 'react'
import { useState, useEffect } from 'react'
import {db} from "../firebase"
import { collection , getDocs } from 'firebase/firestore'
import List from '../components/card/List'
import "./feed.css"
import { Box } from '@mui/material'
import Popup from "../components/form/Popup"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Feed = ({user}) =>  {
  const vertical="bottom"
  const horizontal="left"
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
    const[sucess,setSucess]=useState(false)
    const [book,setBook]=useState([]);
    const usersRef =collection(db,"books");
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      
      setSucess(false);
      console.log("sucess value in close",sucess)
    };
    useEffect(()=>{
        const getBook=async()=>{
            const data =await getDocs(collection(db,"books"));
            /* console.log(data.docs.map((book)=>({...book.data(), id: book.id}))) */
            setBook(data.docs.map((book)=>({...book.data(), id: book.id})))
            console.log("useEfect is running")
        };
        getBook()
    },[db])
    
  return (
    <>
    <div style={{ width: '100%' }}>
    <Box
   sx={{
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap:"wrap",
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
  <Popup user={user} sucess={setSucess}/>
  
  </div>
  <Snackbar sx={{ height: "100%" ,alignItems:"end" ,top:-20 }} open={sucess} autoHideDuration={6000} onClose={handleClose}  >
        <Alert sx={{ zIndex:-1}} onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
  </>

    
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