import React from 'react'
import { Typography, Paper } from '@mui/material'
import Image from 'next/image'
import { deepPurple } from '@mui/material/colors';

export default function GitHubPaper() {
    const purpuraIntermedio = deepPurple[400];
  return (
    <Paper 
    elevation={3}
    square={false}
    sx={{backgroundColor:purpuraIntermedio, color:deepPurple[50], maxWidth:'120px', maxHeight:'60px', padding:'0', display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'space-evenly', textAlign:'center'}}>
    <Typography variant="body1" sx={{lineHeight:'1rem' }} > <Image width={30} height={30} alt="icon" 
     src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"   /> /melisen</Typography>
    </Paper>
  )
}
