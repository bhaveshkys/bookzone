import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box,CardMedia } from '@mui/material';

const ProductDetail = ({image, content}) => {
  return (

<Box style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(7,1fr)" }} class="parent">
<Box style={{gridArea:"1/1/5/3"}}><CardMedia
        sx={{height:300,
        width:200}}
        component="img"
        height="300"
        width="200"
        image={image}
        alt="green iguana"
      /> </Box>
<Box style={{gridArea:"1 / 3 / 5 / 5"}}>
<Typography><span style={{fontWeight:"bold"}}>Title:</span>  {content.title}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Author:</span> {content.author}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Cover Type:</span> {content.cover_type}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Genre:</span> {content.genre}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Publication:</span> {content.publication}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Edition:</span> {content.totalparts_edition}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Defects:</span> {content.defects}</Typography>
<Typography><span style={{fontWeight:"bold"}}>Additional Details:</span> {content.additional_details}</Typography>
</Box>
<Box sx={{maxWidth:300}} style={{gridArea:"5 / 1 / 8 / 4"}}>price <Typography>{content.summary}</Typography> </Box>
<Box style={{gridArea:"5 / 4 / 8 / 5"}}> contact</Box>
</Box>
  )
}

export default ProductDetail