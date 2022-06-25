import React from 'react'
import { Box } from '@mui/material'
import Form from './Form'
import { Popover , Button,IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SignUpPrompt from '../signUpPrompt/SignUpPrompt';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
const Popup = ({ user,trigger,children,sucess}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [signup,setSignup]=useState(false)
    
  const handleClick = (event) => {
    if (user==null) {
      setSignup(true)
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
  <IconButton  size="large" sx={{ position: "fixed",
  bottom: 7,
  right: 10}} aria-describedby={id} variant="contained" onClick={handleClick}>
  <AddCircleIcon style={{ color:"#e91e63" , fontSize: 100 }}/>
</IconButton>
<Popover
anchorReference="anchorPosition"
anchorPosition={{ top: 350, left: 698 }}
anchorOrigin={{
  vertical: 'center',
  horizontal: 'center',
}}
transformOrigin={{
  vertical: 'center',
  horizontal: 'center',
}}
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  
>
  { user ?(
    <Form user={user} sucess={sucess} modal={setAnchorEl} />
  ):(
    <SignUpPrompt modal={setAnchorEl}/>
  ) 
  }
  
</Popover>
</>
  )}

export default Popup