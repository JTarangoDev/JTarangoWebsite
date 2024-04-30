    import React, {useEffect, useState} from 'react'
    
    export const AboutSection = () => {

      const opacityForText = (i) => {
        if(textIndex === i){
          return 1
        }else{
          return 0.05
        } 
      }

      const [textIndex, setTextIndex] = useState(0)

      const handleScroll = () => {

        const parH = (document.documentElement.clientHeight / 4)
        const firstPar = parH * 3

        if(window.scrollY < firstPar){
          setTextIndex(1)
        }
        if(window.scrollY > firstPar){
          setTextIndex(2)
        }
        if(window.scrollY > firstPar + parH){
          setTextIndex(3)
        }
        if(window.scrollY > firstPar + parH * 2){
          setTextIndex(4)
        }
      }
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll)
      }, [])


      return (
        <section className='about-section'>
            <div className='about-section-text'>
                <span style={{opacity: opacityForText(1)}}>I'm a Computer Science Engineer passionate about technology.</span>
                <span style={{opacity: opacityForText(2)}}>I love to turn ideas into reallity through code.</span>
                <span style={{opacity: opacityForText(3)}}>I enjoy good design and creating projects with great UI and UX.</span>
                <span style={{opacity: opacityForText(4)}}>I never stop learning.</span>
            </div>

        </section>
      )
    }
    