import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <div
         style={{
     display:'flex',
     justifyContent:'center',

        }}>
      <CardMedia
        component="img"
        height="140"
        src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        image=""
        alt="green iguana"
        style={{
            height:'250px',
            width:'250px',
            borderRadius:"50%",
           border:'1px solid black'
        
        }}
         />
      </div>
      <CardContent style={{
          textAlign:'center'
      }}>
        <Typography gutterBottom variant="h5" component="div">
          Henok Egezew
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Welder
        </Typography>   <Typography gutterBottom variant="h5" component="div">
          2000
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions style={{display:'flex', justifyContent:'space-between'}}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
