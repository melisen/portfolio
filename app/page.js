import Image from 'next/image'
import styles from '../styles/page.module.css'


import Personal from './components/Personal'
import Tools from './components/Tools'
import Projects from './components/Projects'

import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import { promises as fs } from 'fs';



export default async function Home() {
  const projectsFile = await fs.readFile(process.cwd() + '/app/data/projects.json', 'utf8');
  const projectsData = JSON.parse(projectsFile);
  
//hasta acá llega

  return (
    <main >
      
      <HeroSection />
      
      <div id="personal-projects-background">
      <Personal />
      
      <Projects projectsData={[...projectsData]} />
      </div>      
      <Tools />
      <Footer />


    </main>
  )
}
