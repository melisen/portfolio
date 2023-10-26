import React from 'react'
import { Typography, Paper } from '@mui/material'
import Image from 'next/image'
import ProjectCard from './ProjectCard'

import Grid from '@mui/material/Grid';




export default function Projects() {



  return (
    
      
       
       <Grid container spacing={2}  my={4} padding={4}>
      
        <Grid item lg={12} >
        <Typography   className="projectsTitle" id="projects">Projects I have worked on</Typography>

        </Grid>

        <Grid item lg={9} >
       
        < ProjectCard />
        </Grid>

        <Grid  item lg={3}>

        </Grid>
       </Grid>
       

  )
}
