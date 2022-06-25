import React, { useEffect, useState } from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box,CardMedia } from '@mui/material';
import ChatPopUp from '../chat/ChatPopUp';
import { returnUserFromBook,deleteBook } from '../../firebase_func';
const ProductDetail = ({ user,image, content}) => {
  const[popUpChat,setPopUpChat]=useState(false)
  const[seller,setSeller]=useState([])
  const handleClick=()=>{
    setPopUpChat(true)
  }
  const handleDelete=async()=>{
  await deleteBook(content.id,content.uuid)
  window.location.reload(false);
  }
  useEffect(()=>{
    const getSellerData=async()=>{
      const result= await returnUserFromBook(content.user)
      setSeller(result)
    }
    getSellerData()
  },[])
  return (
<>

<ChatPopUp bookName={content.title} bookId={content.uuid} seller={seller} user={user}  popUpChat={popUpChat} setPopUpChat={setPopUpChat} />
<Box style={{ padding:10,display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(7,1fr)" ,width:500 }} class="parent">
<Box style={{gridArea:"1/1/5/3"}}><CardMedia
        sx={{height:300,
        maxWidth:200}}
        component="img"
        /* height="300"
        width="200" */
        image={image}
        alt="green iguana"
      /> </Box>
<Box style={{gridArea:"1 / 3 / 5 / 5",marginLeft:5}}>
<Typography><span style={{fontWeight:"bold"}}>Title:</span>  {content.title}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Author:</span> {content.author}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Cover Type:</span> {content.cover_type}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Genre:</span> {content.genre}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Publication:</span> {content.publication}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Edition:</span> {content.totalparts_edition}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Defects:</span> {content.defects}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Additional Details:</span> {content.additional_details}</Typography>
</Box>
<Box sx={{maxWidth:300}} style={{gridArea:"5 / 1 / 8 / 4"}}>{`₹${content.price}`} <Typography><b>SUMMARY</b> <br></br> {content.summary}</Typography> </Box>
<Box style={{gridArea:"5 / 4 / 8 / 5" ,marginRight:10,width:142}}> Book listed by <div style={{color:"green" }}>{seller.name}</div>  
<Button style={{display:seller?.email==user?.email?"none":"block"}} variant="contained" color="secondary" onClick={handleClick} >  Chat with the seller</Button>
<Button style={{display:seller?.email!==user?.email?"none":"block"}} variant="contained" color="secondary" onClick={handleDelete} > delete</Button>
</Box>
</Box>
</>
  )
}

export default ProductDetail