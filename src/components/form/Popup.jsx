import React from 'react'
import { Box } from '@mui/material'
import Form from './Form'
import { Popover , Button,IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Popup = ({trigger,children}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  console.log(anchorEl)
  return (
    <>
  <IconButton  size="large" sx={{ position: "fixed",
  bottom: 7,
  right: 10}} aria-describedby={id} variant="contained" onClick={handleClick}>
  <AddCircleIcon style={{ color:"#e91e63" , fontSize: 100 }}/>
</IconButton>
<Popover
sx={{}}
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
  <Form modal={setAnchorEl} />
</Popover>
</>
  )}

export default Popup