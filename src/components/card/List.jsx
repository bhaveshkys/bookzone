import * as React from 'react';
import { useState , useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { storage } from '../../firebase';
import { ref , getDownloadURL } from 'firebase/storage';
import ProductPopUp from '../productDetail/ProductPopUp';
import { CardActionArea } from '@mui/material';
const List = ({content}) => {
  const[image,setImage]=useState("")
  const[popUp,setPopUp]=useState(false)
  const cardClickHandle=()=>{
    setPopUp(true)
  }
  useEffect(()=>{
    const imageURL = async()=>{
      const url=await  getDownloadURL(ref(storage,`bookImage/${content.uuid}`))
      console.log("this is called")
      setImage(url)
      }
      imageURL()
  },[content])
  
  return (
    <>
    <ProductPopUp image={image} content={content} setPopUp={setPopUp} popUp={popUp} />
      <Card sx={{  minWidth: 187.5,maxWidth: 187.5,  height:450, margin: "10px" }}>
        <CardActionArea onClick={cardClickHandle}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography noWrap variant="h6" component="div">
          {content.title}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          {content.author}
        </Typography>
        <Typography  color="text.secondary">
          {content.cover_type}
        </Typography>
        
      </CardContent>
      <CardActions >
      <Typography marginRight={"auto"}  variant='button' color="blue">
          $399
        </Typography>
      <Typography   variant='button' color="green">
          {content.genre}
        </Typography>
        
      </CardActions>
      </CardActionArea>
    </Card>
    </>
    )
  }


export default List