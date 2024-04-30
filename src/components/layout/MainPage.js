import React from 'react'
import { NameSection } from '../NameSection'
import { AboutSection } from '../AboutSection'
import { ProjectsSection } from '../ProjectsSection'
import { ContactSection } from '../ContactSection'

export const MainPage = () => {
  return (
    <div className='content'>
        <NameSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
    </div>
  )
}
