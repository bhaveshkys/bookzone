import React from 'react'
import Popover from '@mui/material/Popover';

import { Temp } from './Temp';
import SignUpPrompt from '../signUpPrompt/SignUpPrompt';
const ChatPopUp = ({ bookName ,bookId ,seller, user, popUpChat, setPopUpChat }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
    setPopUpChat(false)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
 
  return (
    <div>
    <Popover
  
    anchorReference="anchorPosition"
    anchorPosition={{ top: 350,left:10 }}
      id={id}
      open={popUpChat}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {user?(
        <Temp bookName={bookName} bookId={bookId} seller={seller}  user={user} />
      ):(
        <SignUpPrompt modal={setAnchorEl}/>
      )}
      
    </Popover>
  </div>
  )
}

export default ChatPopUp