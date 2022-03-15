import React from 'react'
import './experience.css'
import { FaBullhorn } from 'react-icons/fa'
function experience() {
  return (
    <section id='experience'>
      <h5>What Can I Do </h5>
      <h2>My Skills</h2>
      <div className='container experience_container'>
        <div className='expereince_frontend'>
          <h3> Fronted Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <FaBullhorn />
              <h4>React</h4>
            </article>
            <article className='experience_details'>
              <FaBullhorn />
              <h4>CSS</h4>
            </article>
            <article className='experience_details'>
              <FaBullhorn />
              <h4>HTML</h4>
            </article>
            <article className='experience_details'>
              <FaBullhorn />
              <h4>Bootstrap</h4>
            </article>
            <article className='experience_details'>
              <FaBullhorn />
              <h4>React Native</h4>
            </article>
          </div>
        </div>
       
          <div className='experience_backend'>
            <h3> Backend Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>Node</h4>
              </article>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>Express</h4>
              </article>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>MongoDB</h4>
              </article>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>Java</h4>
              </article>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>Python</h4>
              </article>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>MySQL</h4>
              </article>

            </div>
          </div>
          {/* <div className='experience_python'>
          <h3> Data Analysis</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>Numpy </h4>
              </article>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>Pandas</h4>
              </article>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>Matplotlib</h4>
              </article>
              <article className='experience_details'>
                <FaBullhorn />
                <h4>Matlab</h4>
              </article>
              
          </div> */}
        {/* </div> */}
        </div>
       
    </section>

  )
}

export default experience