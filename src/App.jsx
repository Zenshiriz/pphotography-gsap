import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import NavigationSection from './component/NavigationSection'
import AboutSection from './component/AboutSection'
import Portfolio from './component/Portfolio'
import Footer from './component/Footer'

const App = () => {
  return (
    <main className='bg-black'>
     <Navbar/> 
     <Hero/>
     <NavigationSection/>
     <AboutSection/>
     <Portfolio/>
     <Footer/>
    </main>
  )
}

export default App
