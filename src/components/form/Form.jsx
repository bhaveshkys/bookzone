import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  IconButton,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { db } from '../../firebase';
import { addDoc ,collection } from 'firebase/firestore';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
function Form({modal}) {
    const[title,setTitle]=useState("")
    const[author,setAuthor]=useState("")
    const[coverType,setCoverType]=useState("")
    const[genre,setGenre]=useState("")
    const[publication,setPublication]=useState("")
    const[edition,setEdition]=useState("")
    const[defects,setDefects]=useState("")
    const[additionalDetails,setAdditionalDetails]=useState("")
    const bookRef =collection(db,"books");
    const listBook = async()=>{
        await addDoc(bookRef,{
            title:title,
            author:author,
            cover_type:coverType,
            defects:defects,
            genre:genre,
            publication:publication,
            totalparts_edition:edition,
            additional_details:additionalDetails,
            user:"00"
        })
    }
  return (
    <div >
      <Typography sx={{ display: 'flex' }}  variant="h5">List your preloved book <IconButton onClick={() => modal(null)} sx={{ flexDirection: 'row-reverse' , marginLeft:"auto" }}  variant="contained" color="error">
          <CancelIcon/>
        </IconButton></Typography>
      
      <Box >
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
        <TextField
            onChange={(e)=>{setGenre(e.target.value)}}

          style={{ width: "250px", margin: "5px", height: "50px" }}
          type="text"
          label="genre"
          variant="outlined"
        />
        <br />
        <TextField
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
  );
}
export  default Form