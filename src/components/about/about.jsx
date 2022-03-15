import React from 'react'
import './about.css'
import RAV from '../../assets/rav2.png'
import { BsAwardFill } from 'react-icons/bs'
import { FaSearchDollar } from 'react-icons/fa'
import { MdOutlineSportsScore } from 'react-icons/md'
function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about_container'>
        <div className='about_me '>
          <div className='about_me-image'>
            <img src={RAV} alt="About Image" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <BsAwardFill className='about_icon' />
              <h5>Experience</h5>
              <small>3+ years in Programming</small>


            </article>
            <article className='about_card'>
              <FaSearchDollar className='about_icon' />
              <h5>Status</h5>
              <small>Looking for new client and full time opportunities </small>


            </article>
            <article className='about_card'>
              <MdOutlineSportsScore className='about_icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>


            </article>
            </div>
            <div className='paragraph'>
              <p>Well-qualified Full Stack Developer familiar
                with wide range of programming utilities and
                languages. Knowledgeable of backend and frontend
                development requirements.
                Handles any part of process with ease. Collaborative team player with
                excellent technical abilities offering couple years of related experience.</p>
            </div>
            <div className='link'>
              <a href='#contact' className='btn btn-primary'>Let's Communicate</a>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default About