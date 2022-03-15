import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from "react-icons/si"
import {SiTwitter} from "react-icons/si"
function socialheader() {
  return (
    <div className='header_socials'>
    <a href='https://linkedin.com' target="_blank"><SiLinkedin/></a> 
    <a href='https://github.com' target="_blank"><SiGithub/></a>
    <a href='https://twitter.com' target="_blank"><SiTwitter></SiTwitter></a>
 </div>
    
  )
}

export default socialheader