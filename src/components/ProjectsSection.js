import React from 'react'
import { ProjectCard } from './ProjectCard'
import { Link } from 'react-router-dom'

export const ProjectsSection = () => {

  return (
    <section className='projects-section'>

      <section className='projects'>

        <div className='section-title'>

          <h2>Projects</h2>
          <p>Here are some relevant projects I've been working on.</p>

          <span><Link to={"/projects"}>See more</Link></span>

        </div>

        <div className='carousel'>
          
          <ProjectCard/>


        </div>

      </section>


    </section>
  )
}
