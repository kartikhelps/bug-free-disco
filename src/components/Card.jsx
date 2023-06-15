import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function CustomCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div style={{background:"lightGreen",height:200}}></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         rating  <Rating name="no-value" value={null} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
        4BHK Brand New Builder Floor Availabe for Sale in Sushant Lok-1,Gurgaon
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">location</Button>
        <Button size="small">Gurugram</Button>
      </CardActions>
    </Card>
  );
}
