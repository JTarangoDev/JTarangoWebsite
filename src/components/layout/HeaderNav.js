import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {

    const [navBar, setNavBar] = useState('header')
    const [mobileNav, setMobileNav] = useState('hidden')
    const [mobileNavIcon, setMobileNavIcon] = useState(faBars)
    const [mobileNavIconClass, setMobileNavIconClass] = useState('defIcon')


    const handleScroll = () => {
        if(window.scrollY > 0){
            setNavBar('header hidden-nav')
        }else{
            setNavBar('header')
        }
    }

    const handleMobileNav = () => {

        if (mobileNavIcon === faBars){
            setMobileNavIcon(faXmark);
            setMobileNavIconClass('xMark')
        } else if (mobileNavIcon === faXmark) {
            setMobileNavIcon(faBars);
            setMobileNavIconClass('bars')
        }


        if (mobileNav === 'hidden' || mobileNav === 'hidde-nav-links'){
            setMobileNav('show-nav-links');
        } else if (mobileNav === 'show-nav-links') {
            setMobileNav('hidde-nav-links');
        }
    }
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
    }, [])
    

  return (
    
    <header>

        <section  className={navBar}>
            <div className='logo'>
                
                <div>
                    <NavLink to="/home">
                        <svg viewBox="0 0 186 138" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                            <path d="M14.5 14C37.3031 14 42.7665 14 61.5 14M172.5 14C147.246 14 145.975 14 125.5 14M61.5 14V97.9861C61.5 103.864 59.7603 109.61 56.5 114.5V114.5V114.5C51.8348 120.72 44.2927 124.097 36.5457 123.432L35.489 123.342C32.8472 123.115 30.2599 122.461 27.8284 121.404L26.3798 120.774C22.2485 118.978 18.8462 115.837 16.7262 111.862V111.862C13.753 106.287 13.5947 99.6335 16.2994 93.9235L16.5 93.5L20 88M61.5 14C88.1102 14 99.2389 14 125.5 14M125.5 14V123"  strokeWidth="27" strokeLinecap="round" className="logo-svg"></path>
                        </svg>
                    </NavLink>
                    
                </div>
                
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                </ul>
            </nav>
        </section>

        
        <nav className='mobile-nav'>
            <button onClick={handleMobileNav} className={mobileNavIconClass}><FontAwesomeIcon icon={mobileNavIcon} /></button>

            <ul id='nav-links' className={mobileNav}>
                <li className='home'><NavLink to="/home">Home</NavLink></li>
                <li className='about'><NavLink to="/about">About</NavLink></li>
                <li className='projects'><NavLink to="/projects">Projects</NavLink></li>
            </ul>   
        </nav>
        
        
    </header>
  )
}
