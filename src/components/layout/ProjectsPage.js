import React from 'react'
import { HeaderNav } from './HeaderNav'
import { Footer } from './Footer'
import { projects } from '../../data/projects-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const ProjectsPage = () => {
  return (
    <section className='content'>
        <HeaderNav/>
        <div className='content-wraper'>
            <div className='projects-page'>
                <div className='section-title'>
                    <h2>Projects</h2>
                </div>

                <div className='projects-list'>
                    {
                        projects.map(project => {
                            return(
                                <article key={project.id}>
                                    <div className='project-view'>
                                        <div className='preview'>
                                            <span className='name'>{project.name}</span>
                                            <div className='links'>
                                                <div className={project.view ? 'tooltip-wraper' : 'tooltip-hidden' }>
                                                    <a href={project.url} target='_blank' rel='noreferrer' tooltip="Live View" ><FontAwesomeIcon icon={faDisplay} /></a>
                                                </div>
                                                
                                                <div className='tooltip-wraper'>
                                                    <a href={project.git} target='_blank' rel='noreferrer' tooltip="Github"><FontAwesomeIcon icon={faGithub} /></a>
                                                </div>
                                                    
                                            </div>
                                            
                                        </div>
                                        <div className='fullview'>
                                            <img src={project.imgSource} alt='Project image'></img>

                                            <p>{project.longDesc}</p>
                                        </div>

                                        <div className='tags'>
                                        {
                                            project.tech?.map(tag => {
                                                return(
                                                    <span key={tag}>{tag}</span>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                
                                    
                                </article>
                            );
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
        
        

    </section>
  )
}
