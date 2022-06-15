import {
  Typography,AppBar,Toolbar,TextField,Button,IconButton,
  Box,FormGroup,FormControlLabel,Checkbox,Alert, InputLabel, Select
} from '@mui/material';
import bookSchema from './bookValidation';
import { db,storage } from '../../firebase';
import { addDoc ,collection } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { BookAPIKey } from '../../firebase';
const axios = require('axios').default;
const short  = require('short-uuid')

function Form({  user,sucess, modal}) {
  
    const[back,setBack]=useState(false)
    const[valid,setValid]=useState(true)
    const[title,setTitle]=useState("")
    const[author,setAuthor]=useState("")
    const[coverType,setCoverType]=useState("")
    const[genre,setGenre]=useState("romance")
    const[publication,setPublication]=useState("")
    const[edition,setEdition]=useState("")
    const[defects,setDefects]=useState("")
    const[additionalDetails,setAdditionalDetails]=useState("")
    const[price,setPrice]=useState("")
    const[imageUpload,setImageUpload]=useState(null)
    const bookRef =collection(db,"books");
    const uploadImage=(uuid)=>{
      if(imageUpload == null)return
      const imageRef = ref(storage, `bookImage/${uuid}`)
      const metadata = {
        contentType: 'image/jpg', 
      };
      uploadBytes(imageRef,imageUpload).then(()=>{
        console.log("image uploaded")
      })
    }
    let temp=""
    const getSummary=async()=>{
      const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&author=${author}&key=${BookAPIKey}&maxResults=1`)
      temp=result.data.items[0]?.searchInfo.textSnippet
      

      /*  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&author=${author}&key=${BookAPIKey}&maxResults=1`)
      .then(data=>{
        setSummary(data.data.items[0]?.searchInfo.textSnippet) 
        console.log("getsummary wins the race")

      })*/
    }
    const clearForm =()=>{
      setTitle("")
      setAuthor("")
      setCoverType("")
      setGenre("romance")
      setPublication("")
      setEdition("")
      setDefects("")
      setAdditionalDetails("")
      setImageUpload(null)
      temp=""
    }
    const listBook = async()=>{
     await getSummary() 
      const uuid=short.generate()
      const bookform ={
        title:title,
        author:author,
        cover_type:coverType,
        defects:defects,
        genre:genre,
        publication:publication,
        totalparts_edition:edition,
        additional_details:additionalDetails,
        user:user.uid,
        uuid:uuid,
        summary:temp,
        price:price
    }
      const isv = await bookSchema.isValid(bookform)
      setValid(isv)
      if ( isv) {
        setBack(true)
        addDoc(bookRef,bookform)
        uploadImage(uuid)  
        clearForm()
        setTimeout(function(){
          modal(null)
          
        },1500)
        setTimeout(function(){
          sucess(true)
          
        },3000)
        
        
        
      }
    }
    React.useEffect(()=>{
      if (back) 
      setInterval(function(){setBack(false)},2000)
    },[back])
  return (
    !back ?(
    <div >
      
      <Typography sx={{ display: 'flex' }}  variant="h5">List your preloved book <IconButton onClick={() => modal(null)} sx={{ flexDirection: 'row-reverse' , marginLeft:"auto" }}  variant="contained" color="error">
          <CancelIcon/>
        </IconButton></Typography>
        {
        !valid ? (
          <Alert severity="error">empty input fields</Alert>
        ) :(
          <></>
        )
      }
      <Box sx={{"display":"flex","flexWrap":"wrap"}} >
      
        <TextField
        onChange={(e)=>{setTitle(e.target.value)}}
        style={{ width: "250px", margin: "5px" }}
        type="text"
        label="Title"
        variant="outlined"
        />
        <TextField
        onChange={(e)=>{setAuthor(e.target.value)}}
        style={{ width: "250px", margin: "5px" }}
        type="text"
        label="Author"
        variant="outlined"
        />
        <br />
        {/* <Checkbox label="Diversity catagory" /> */}
        <TextField
            onChange={(e)=>{setCoverType(e.target.value)}}

          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Cover Type"
          variant="outlined"
        />
        <InputLabel id='genre' ></InputLabel>
        <Select labelId='genre' value="romance" label="genre" onChange={(e)=>{setGenre(e.target.value)}} >
          <MenuItem value={"romance"} >romance</MenuItem>
          <MenuItem value={"mystery"} >mystery</MenuItem>
          <MenuItem value={"fantasy"} >fantasy</MenuItem>
          <MenuItem value={"horror"} >horror</MenuItem>
          <MenuItem value={"fiction"} >fiction</MenuItem>
          <MenuItem value={"biography"} >biography</MenuItem>
          <MenuItem value={"sciFi"} >sci-Fi</MenuItem>
          <MenuItem value={"selfHelp"} >self help</MenuItem>
        </Select>
        {/* <TextField
            onChange={(e)=>{setGenre(e.target.value)}}

          style={{ width: "250px", margin: "5px", height: "50px" }}
          type="text"
          label="genre"
          variant="outlined"
        /> */}
        <br />
        <TextField required
            onChange={(e)=>{setPublication(e.target.value)}}

          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Publication"
          variant="outlined"
        />
        <TextField
            onChange={(e)=>{setEdition(e.target.value)}}

          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Edition/Total Parts"
          variant="outlined"
        />
        <br />
        <TextField
            onChange={(e)=>{setDefects(e.target.value)}}

          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Defects"
          variant="outlined"
        />
        <TextField
            onChange={(e)=>{setAdditionalDetails(e.target.value)}}

          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Additional  Details"
          variant="outlined"
        />
        <TextField
            onChange={(e)=>{setPrice(e.target.value)}}

          style={{ width: "250px", margin: "5px" }}
          type="text"
          label="Price"
          variant="outlined"
        />
        <TextField
            onChange={(e)=>{setImageUpload(e.target.files[0])}}

          style={{ width: "250px", margin: "5px" }}
          type="file"
          variant="outlined"
          inputProps={{accept:'image/*'}}
        />
        
        
       {/*  <FormControlLabel
          style={{ width: "250px", margin: "5px" }}
          control={<Checkbox />}
          label="Label"
        />
        <br />
        <TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="job region"
          variant="outlined"
          multiline
          rows={10}
        /> */}
        <br />
        <Button onClick={listBook} variant="contained" color="primary">
          save
        </Button>
      </Box>
    </div>
    ) :(
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={back}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  );
}
export  default Form