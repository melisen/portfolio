import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { deepPurple } from '@mui/material/colors';


    
export default function Footer() {
  return (
    <Container maxWidth="xl" style={{position:'relative', left:'0', bottom:'0', right:'0', display:'flex', marginTop:'auto', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:deepPurple[800]}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                
            </div>
            <Typography variant="body1" component="div"  sx={{color:deepPurple[50], textAlign:'center', flexGrow: 1 }}>&copy; 2023  Melina Señoráns Pérez  /melisen</Typography>
    </Container>
  )
}
