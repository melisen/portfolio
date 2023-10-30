'use client'
import React from 'react'
import { Typography, Container } from '@mui/material'
import Image from 'next/image'
import ProjectCard from './ProjectCard'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import '../../styles/projects.css'





export default function Projects({projectsData}) {

  

  return (
    
      
       
       <Container sx={{display:'flex', flexDirection:'column'}} >
        <div>
        <Typography   className="projectsTitle" id="projects">Projects I have worked on</Typography>
        </div>


       <div>
        {
       projectsData.map((item)=>(
            <ProjectCard key={item.title} {...item} />
          ))
       }
        </div>


       </Container>
       

  )
}
