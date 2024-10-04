import React from 'react'
import { NameSection } from '../NameSection'
import { AboutSection } from '../AboutSection'
import { ProjectsSection } from '../ProjectsSection'
import { ContactSection } from '../ContactSection'
import { HeaderNav } from './HeaderNav'
import { Footer } from './Footer'

export const MainPage = () => {
  return (
    <div className='content'>
        <HeaderNav></HeaderNav>
        <NameSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer></Footer>
    </div>
  )
}
