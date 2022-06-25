import { Box, Typography } from '@mui/material'
import React from 'react'
import GoogleButton from 'react-google-button'
import {signin} from "../../firebase_func"

const SignUpPrompt = ({modal}) => {
    const handleClick=()=>{
        signin()
        modal(null)
    }
  return (
      <Box sx={{ display: "flex",
        width: 300,
        height: 300,
        flexWrap: "wrap",
        alignContent: "stretch",
        flexDirection: "row",
        justifyContent: "space-evenly"}}>
      <Typography textAlign={"center"} fontSize={20}> Sign in before listing your own books here</Typography>
      <GoogleButton
  onClick={handleClick}
/>
</Box>
  )
  
}

export default SignUpPrompt
