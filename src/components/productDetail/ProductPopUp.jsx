import React from 'react'
import Popover from '@mui/material/Popover';
import ProductDetail from './ProductDetail';
const ProductPopUp = ({ user, image, content, popUp,setPopUp}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
    setPopUp(false)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
    <Popover
    sx={{"maxWidth":1000}}
    anchorReference="anchorPosition"
    anchorPosition={{ top: 120, left: 608 }}
      id={id}
      open={popUp}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
    <ProductDetail  user={user}  image={image} content={content} /> 
    </Popover>
  </div>
  )
}

export default ProductPopUp