import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const List = ({content}) => {
  return (
    <>
      <Card sx={{ maxWidth: 187.5,  height:450, margin: "10px" }}>
      <CardMedia
        component="img"
        height="300"
        image={require('./book.jpg')}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography noWrap variant="h6" component="div">
          {content.title}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          {content.author}
        </Typography>
        <Typography  color="text.secondary">
          {content.cover_type}
        </Typography>
        
      </CardContent>
      <CardActions >
      <Typography marginRight={"auto"}  variant='button' color="blue">
          $399
        </Typography>
      <Typography   variant='button' color="green">
          {content.genre}
        </Typography>
        
      </CardActions>
    </Card>
    </>
    )
  }


export default List