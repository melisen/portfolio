

import Button from  '@mui/material/Button'
import Image from 'next/image'
import '../../styles/heroSection.css'
import Link from 'next/link'
import GitHubPaper from './GitHubPaper';
import Navbar from './Navbar'

export default function HeroSection() {

  return (
    <>
   
<div  className="heroAndNavbar">
<Navbar />

    <div className="heroSection">
   
      <div className="heroSection_box">
      <div className="heroSection_box_left">
        <h1>Melina Señoráns Pérez</h1>
        <p>Web developer</p>
        <Link href="https://github.com/melisen" target='blank' style={{ color: 'inherit', textDecoration: 'none' }}  >
         <GitHubPaper />
          </Link>
        </div>
        <div className="heroSection_box_right">
          
        </div>
      </div>
    </div>

    </div>
    </>
  )
}
