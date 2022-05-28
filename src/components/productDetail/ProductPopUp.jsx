import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ProductDetail from './ProductDetail';
const ProductPopUp = ({image, content, popUp,setPopUp}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopUp(false)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
    <Popover
    anchorReference="anchorPosition"
    anchorPosition={{ top: 350, left: 698 }}
      id={id}
      open={popUp}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
    <ProductDetail image={image} content={content} /> 
    </Popover>
  </div>
  )
}

export default ProductPopUp