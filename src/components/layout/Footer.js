import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
  return (
    <section className='footer'>
        <div className='footer-wrap'>
            <div className='footer-copyrigth'>
                <span>&copy; {new Date().getFullYear()} Javier Tarango</span>
            </div>
        
            <div className='footer-icons'>
                <a href='https://github.com/JTarangoDev' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/javiertarango/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>
        
    </section>
  )
}
