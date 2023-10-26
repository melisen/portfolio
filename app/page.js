import Image from 'next/image'
import styles from '../styles/page.module.css'
import Navbar from './components/Navbar'

import Personal from './components/Personal'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Footer from './components/Footer'
export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />

      <Personal />
      
      <Projects />
      <Tools />
      <Footer />


    </main>
  )
}
