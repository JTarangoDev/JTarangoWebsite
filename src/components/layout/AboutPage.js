import React from 'react'
import { HeaderNav } from './HeaderNav'
import { Footer } from './Footer'

export const AboutPage = () => {
  return (
    <section className='content'>
      <HeaderNav/>
      <div className='about-page'>
        <div className='image'>
          <img src='/images/pp.jpg'></img>
          <span>My name is Javier Tarango.</span>
        </div>

        <div className='text'>
          <p>
            I am a passionate <strong>web developer</strong> with a deep interest in <strong>technology</strong> and <strong>innovation</strong>. Since childhood, 
            <strong> video games</strong> and technology have been a constant source of fascination for me, naturally leading me to 
            a career in the field of computing.
          </p>

          <p>
            I graduated with a degree in <strong>Computer Science Engineering</strong> from the <strong>Autonomous University of Chihuahua</strong> in
            Mexico, where I gained a solid theoretical and practical foundation in the world of computer science.
            With approximately one year of experience as a <strong>freelance developer</strong>, I have specialized in <strong>front-end web 
            development</strong>, while also maintaining a strong interest and competence in <strong>back-end development</strong>.
          </p>

          <p>
            As a developer, my goal is to transform <strong>ideas into reality</strong> through technology. I constantly seek opportunities 
            to <strong>learn</strong>, <strong>grow</strong>, and <strong>evolve</strong> in my field. I firmly believe in the power of innovation and how technology can 
            improve our lives and solve complex problems.
          </p>

          <p>
            When I'm not immersed in code, my passion for technology and video games remains present. I also enjoy 
            <strong> music</strong> and <strong>sports</strong>, which helps me maintain a balance between my professional and personal life.
          </p>

          <p>
            I'm always open to exciting <strong>new opportunities</strong> and <strong>collaborations</strong> in the world of web development and technology. 
            If you have an interesting project or simply want to chat about technology, don't hesitate to contact me!
          </p>
        </div>
      </div>
  
      <Footer/>
      
    </section>
  )
}
