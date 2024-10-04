import React, { useState, useLayoutEffect } from 'react'
import { project } from '../data/projects-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faDisplay} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const ProjectCard = () => {
    const limit = 3

    const [index, setIndex] = useState(1)

    const [prev, setPrev] = useState('')
    const [curr, setCurr] = useState('')
    const [next, setNext] = useState('')

    useLayoutEffect(() => {
        let current = project.findIndex((project) => project.id === index)

        setCurr(project[current])

        if(index <= 1){
            setPrev(project[current + 2])
        }else{
            setPrev(project[current - 1])
        }

        if(index >= limit){
            setNext(project[current - 2])
        }else{
            setNext(project[current +1])
        } 

    }, [index])

    if(document.getElementById('card-img')){
        let currentImage = document.getElementById('card-img')

        currentImage.style.backgroundImage = "url(" + curr.imgSource + ")"
    }
    

    const handlePrev = () => {
        const nextButton = document.getElementById("next-button").classList
        const prevButton = document.getElementById("prev-button").classList
        nextButton.add("button-block")
        prevButton.add("button-block")

        const newIndex = index - 1;
        setIndex(newIndex < 1? limit : newIndex)

        const wrapper = document.getElementById("text-wrapper").classList
        wrapper.add("prev-anim")

        setTimeout(() => {
            wrapper.remove("prev-anim")
        }, 700); 

        setTimeout(() => {
            nextButton.remove("button-block")
            prevButton.remove("button-block")
        }, 700)
    }

    const handleNext = () => {
        const nextButton = document.getElementById("next-button").classList
        const prevButton = document.getElementById("prev-button").classList
        nextButton.add("button-block")
        prevButton.add("button-block")

        const newIndex = index + 1;
        setIndex(newIndex > limit? 1 : newIndex);

        const wrapper = document.getElementById("text-wrapper").classList
        wrapper.add("next-anim")

        setTimeout(() => {
            wrapper.remove("next-anim")
        }, 700); 

        setTimeout(() => {
            nextButton.remove("button-block")
            prevButton.remove("button-block")
        }, 700)

    }

    


  return (
    <div className='project-slider'>
        <div className='card-wrapper'>
            <article className='project-card'>
                <div className='card'>
                    <section id='card-img' className='card-img'>
                        <picture className='img-mask'></picture>
                    </section>
        
                    <section className='card-body'>
                        <div id='text-wrapper'>
                            <div id='prev-text' className='card-text'>
                                <section className='info'>
                                    <div className='title'>
                                        <h3>{prev.name}</h3>
                                        <div className='links'>
                                            <div className={prev.view ? 'tooltip-wraper' : 'tooltip-hidden' }>
                                                <a href={prev.url} target='_blank' rel='noreferrer' tooltip="Live View" ><FontAwesomeIcon icon={faDisplay} /></a>
                                            </div>
                                            
                                            <div className='tooltip-wraper'>
                                                <a href={prev.git} target='_blank' rel='noreferrer' tooltip="Github"><FontAwesomeIcon icon={faGithub} /></a>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <p>{prev.smallDesc}</p>
                                </section>
                                

                                <section className='tags'>
                                {
                                    prev.tech?.map(tag => {
                                        return(
                                            <span key={tag}>{tag}</span>
                                        )
                                    })
                                }
                                </section>
                            </div>

                            <div id='curr-text' className='card-text'>
                                <section className='info'>
                                    <div className='title'>
                                        <h3>{curr.name}</h3>
                                        <div className='links'>
                                            <div className={curr.view ? 'tooltip-wraper' : 'tooltip-hidden' }>
                                                <a href={curr.url} target='_blank' rel='noreferrer' tooltip="Live View" ><FontAwesomeIcon icon={faDisplay} /></a>
                                            </div>
                                            
                                            <div className='tooltip-wraper'>
                                                <a href={curr.git} target='_blank' rel='noreferrer' tooltip="Github"><FontAwesomeIcon icon={faGithub} /></a>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <p>{curr.smallDesc}</p>
                                </section>

                                <section className='tags'>
                                {
                                    curr.tech?.map(tag => {
                                        return(
                                            <span key={tag}>{tag}</span>
                                        )
                                    })
                                }
                                </section>

                            </div>

                            <div id='next-text' className='card-text'>
                                <section className='info'>
                                    <div className='title'>
                                        <h3>{next.name}</h3>
                                        <div className='links'>
                                            <div className={next.view ? 'tooltip-wraper' : 'tooltip-hidden' }>
                                                <a href={next.url} target='_blank' rel='noreferrer' tooltip="Live View" ><FontAwesomeIcon icon={faDisplay} /></a>
                                            </div>
                                            
                                            <div className='tooltip-wraper'>
                                                <a href={next.git} target='_blank' rel='noreferrer' tooltip="Github"><FontAwesomeIcon icon={faGithub} /></a>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <p>{next.smallDesc}</p>
                                </section>

                                <section className='tags'>
                                {
                                    next.tech?.map(tag => {
                                        return(
                                            <span key={tag}>{tag}</span>
                                        )
                                    })
                                }
                                </section>
                            </div>
                        </div>

                    </section>
                </div>
                
            </article>
        </div>

        

        <div className='buttons'>
            <button id='prev-button' onClick={handlePrev} className='arrow-btn-prev'><FontAwesomeIcon icon={faAngleUp} /></button>
            <button id='next-button' onClick={handleNext} className='arrow-btn-next'><FontAwesomeIcon icon={faAngleDown}/></button>
        </div>
    </div>

  )
}