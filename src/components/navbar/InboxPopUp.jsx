import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Inbox } from './Inbox';
import SignUpPrompt from '../signUpPrompt/SignUpPrompt';

const InboxPopUp = ({ user ,popUpInbox, setPopUpInbox }) => {
/* const ChatPopUp = ({ bookId ,seller, user, popUpChat, setPopUpChat }) => { */
    const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopUpInbox(false)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
 
  return (
    <div>
    <Popover
  
    anchorReference="anchorPosition"
    anchorPosition={{ top: 350,left:10 }}
      id={id}
      open={popUpInbox}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
       {user?(
                <Inbox user={user}/>
      ):(
        <SignUpPrompt modal={setAnchorEl}/>
      )}
    </Popover>
  </div>
  )
}

export default InboxPopUp