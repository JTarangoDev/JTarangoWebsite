import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const ContactSection = () => {
    const [state, handleSubmit] = useForm("xoqgkwlq");
    
  return (

    <div className='contact'>
        <div className='section-title'>
            <h2>Let's get in touch!</h2>

            <p>Got any question, proposal, or just <br/> want to say hello? Go ahead.</p>
        </div>
        

        <form onSubmit={handleSubmit} className='contact-form'>
            <div className='form-row'>
                <input id="name" type="name" name="name" placeholder='Name' required autocomplete="on"/>
                <ValidationError prefix="Name" field="name" errors={state.errors}/>

                <input id="email" type="email" name="email" placeholder='Email' required autocomplete="on"/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
            </div>

            <div className='form-row-2'>
                <input id="subject" type="text" name="subject" placeholder='Subject' required autocomplete="on"/>
                <ValidationError prefix="Subject" field="subject" errors={state.errors}/>

                <textarea id="message" name="message" placeholder='Message' required autocomplete="on"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </div>

            {state.succeeded? <span>Message sent. Thanks!</span> : <button type="submit" disabled={state.submitting}>Send <i><FontAwesomeIcon icon={faArrowRight} /></i></button>
            }
            
        </form>

    </div>

  )
}
