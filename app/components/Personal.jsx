'use client'
import { Typography, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import '../../styles/Personal.css'

import panuelo from "../../public/images/panuelo.jpeg"
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import { indigo } from '@mui/material/colors';


    const grad = `linear-gradient(to bottom, ${indigo[300]} 0%, ${indigo[200]} 100%)`

export default function Personal() {
  return (
    <Container className="containerPersonal" >

<Typography  className="Title" id="about">Some things about me</Typography>
<Grid container spacing={2}  >
  <Grid item xs={10} lg={7}>
        <Typography variant="h5" className="personalSubTitle">Who I am </Typography>
        <Typography variant="body1" className="personalParag"><span className="personalSpan" >name:  </span> Melina</Typography>
        <Typography variant="body1" className="personalParag"><span className="personalSpan" >age:  </span>34</Typography>
        <Typography variant="body1" className="personalParag"><span className="personalSpan" >located_in:  </span>Castelar city, Buenos Aires, Argentina</Typography>
        <Typography variant="body1" className="personalParag"><span className="personalSpan" >Hobbies: </span>  Book lover, fantasy fan, always embracing my inner nerd.</Typography>
        <Typography variant="body1" className="personalParag"><span className="personalSpan" >Social:  </span>
        [
          
        <Link href="https://www.instagram.com/_._melina_._._" target='blank' style={{ color: 'rgb(123, 251, 123)', textDecoration: 'none', fontWeight:'bold' }}> Instagram, </Link>  
        <Link href="https://www.linkedin.com/in/melina-senorans-perez/" target='blank' style={{ color: 'rgb(123, 251, 123)', textDecoration: 'none', fontWeight:'bold' }}> LinkedIn, </Link>  
        <Link href="https://twitter.com/MelinaSenorans" target='blank' style={{ color: 'rgb(123, 251, 123)', textDecoration: 'none', fontWeight:'bold'  }}> X </Link>  
        ]
        </Typography>
        


        <Typography variant="h5" className="personalSubTitle">Experience and education</Typography>
        <Typography variant="body1" className="personalParag">See my resume  <Link href="https://drive.google.com/file/d/1Prtj3FGIguJsuauBMnYvcBBhd1dn0FZS/view?usp=sharing" target='blank' style={{ color: 'rgb(123, 251, 123)', textDecoration: 'none' }}>Here</Link></Typography>

        <Typography variant="h5" className="personalSubTitle" id="contact">Contact Info</Typography>
        <Typography variant="body1" className="personalParag"><span className="personalSpan" >Email:  </span>melisenoransperez@gmail.com</Typography>
        <Typography variant="body1" className="personalParag"><span className="personalSpan" >Discord:  </span>melisen#2539</Typography>
        <Typography variant="body1" className="personalParag"><span className="personalSpan" >Github:  </span> /melisen</Typography>
 

        
  </Grid>

  <Grid item xs={10} lg={5}
  container
  justifyContent="center"
  alignItems="center"
  
  >
    <Paper  sx={{  background: grad, padding:1}}>
    <Image
      src={panuelo}
      height={300}
      alt="Picture of the author" />
    </Paper>
  
  </Grid>
  </Grid>
   

        
    </Container>
      
    
  )
}
