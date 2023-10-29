import React from 'react'
import { Container } from '@mui/material';
import '../../styles/hero.css'

export default function Hero() {
  return (
    <Container className='heroContainer' >
    
    <div className="heroImage">
        <div className="heroText" >
          <h1 className='hero-title'>Melina Señoráns Pérez</h1>
          <p>Web developer</p>
         
        </div>
      </div>
      
    </Container>
  )
}
