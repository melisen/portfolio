import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import { deepPurple } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';
import Link from '@mui/material/Link';

export default function ProjectCard( {title, description, picture, repoUrl, deployUrl}) {
  return (
    <Card sx={{ maxWidth: 300,  margin:'1rem' }}>

      <Image src={`/images/projectsImg/${picture}`} alt={"project picture"} className="cardImg" height={140} width={300}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={deepPurple[600]}>
          {title}
        </Typography>
        <Typography variant="body2" color={indigo[600]} >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Link href={repoUrl} target='blank' style={{ textDecoration: 'none'}}>  

        <Button size="small" sx={{bgcolor:'#69f0ae', color:  indigo[600], fontFamily:'Source Code Pro'}} > 
        Repo
          <Image width={20} height={20} alt="icon" 
          src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"}   />
          
          </Button>
          </Link> 

          <Link href={deployUrl} target='blank' style={{ textDecoration: 'none'}}> 
        <Button size="small" sx={{bgcolor:deepPurple[600], color:'#69f0ae' , fontFamily:'Source Code Pro'}} >Deploy</Button>
        </Link>
      
      </CardActions>
    </Card>
  );
}
