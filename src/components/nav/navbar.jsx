import React from 'react'
import './navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookReader} from 'react-icons/bi'
import {GrServices} from 'react-icons/gr'
import {IoMdContact} from 'react-icons/io'
import {useState} from 'react'

const Navbar=()=> {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiFillHome/>Home</a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/>About</a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><BiBookReader/>Experience</a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services'?'active':''}><GrServices/>Services</a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === 'contact'?'active':''}><IoMdContact/>Contact</a>
    </nav>
  )
}

export default Navbar