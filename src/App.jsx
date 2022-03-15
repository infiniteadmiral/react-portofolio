import React from 'react'
import Header from './components/header/header'
import Navbar from './components/nav/navbar'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portofolio from './components/portofolio/portofolio'
import Testimonials from './components/portofolio/portofolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portofolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>


    </>
  )
}

export default App