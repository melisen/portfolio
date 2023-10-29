import React from 'react'
import { Typography, Container } from '@mui/material'
import Image from 'next/image'
import ProjectCard from './ProjectCard'

import Grid from '@mui/material/Grid';




export default function Projects() {



  return (
    
      
       
       <Container sx={{display:'flex', flexDirection:'column'}} >
        <div>
        <Typography   className="projectsTitle" id="projects">Projects I have worked on</Typography>
        </div>


       <div>
        < ProjectCard />

        </div>


       </Container>
       

  )
}
