import Image from 'next/image'
import styles from '../styles/page.module.css'


import Personal from './components/Personal'
import Tools from './components/Tools'
import Projects from './components/Projects'

import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Hero from './components/Hero'


export default function Home() {
  return (
    <main >
      
      <HeroSection />
      
      <div id="personal-projects-background">
      <Personal />
      
      <Projects />
      </div>      
      <Tools />
      <Footer />


    </main>
  )
}
