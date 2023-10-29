import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import BC from '../../public/images/MSBussinessCard.png'
import { deepPurple } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 320,  margin:'1rem' }}>

      <Image src={BC} alt={"project picture"} className="cardImg" height={200}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={deepPurple[600]}>
          Project 1
        </Typography>
        <Typography variant="body2" color={indigo[600]} >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{bgcolor:'#69f0ae', color:  indigo[600], fontFamily:'Code'}} > 
        Repo
          <Image width={20} height={20} alt="icon" 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"   />
          
          </Button>
        <Button size="small" sx={{bgcolor:deepPurple[600], color:'#69f0ae' , fontFamily:'Code'}} >Deploy</Button>
      </CardActions>
    </Card>
  );
}
