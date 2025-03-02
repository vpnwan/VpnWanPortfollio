import React from 'react'
import Navbar from '../Navbar'
import Services from './Comp/Services'
import { HeroParallax } from './Comp/Gri'
import { HeroParallaxDemo } from './Comp/Parallax'
import Footer from '../Components/Footer'

export default function page() {
  return (
    <>
    
    <Navbar />
    <div className=' mt-20 mb-0'>
    
    <div className=' bg-black'>
    <HeroParallaxDemo />
    </div>


    </div>

{/*    hidden if u want to add         <Services />              */}
    <Footer />
    
    </>
  )
}
