
import Fx from './Components/3rdStyle/Fx'
import Df from './Components/Df'
import Hero from './Hero/Hero'
import Navbar from './Navbar'
import React from 'react'
import FloatingButtons from './utils/float'
import Tech from './Components/Tech/Tech'
import Touch from './Components/GetinTouch/Touch'
import Contact from './Components/Contact/Contact'
import { GoogleGeminiEffectDemo } from './Components/Hero'
import { BackgroundBeamsWithCollisionDemo } from './Components/CollisonDemo'
import { AnimatedTestimonialsDemo } from './utils/AnimatedDemo'
import { TypewriterEffectDemo, TypewriterEffectSmoothDemo } from './Components/TypeWriter Demo'
import { TypewriterEffectSmooth } from './Components/Typewrtier'
import Footer from './Components/Footer'
import Head from 'next/head'
export default function page() {
  return (
    <>
<Head>
        <title>Vpnwan </title>
        <meta name="google-site-verification" content="raGYf7NQG3Pkr13zGL-RHnVxCakp_IA7SjwYzHSydGs" />
        <meta name="description" content="Best Software Development Company" />
        <meta name="keywords" content=" frontend, backend, software, web development, Seo, Domain," />
        <meta name="robots" content="index, follow" />
        
      </Head>


    {/*   //     *if u want to add More Scrolling Add this
//      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
//       <h2 class="text-4xl font-bold">The Fourth slide</h2>
//        </div>
 */}


<GoogleGeminiEffectDemo />
<div className=' bg-black'>
<BackgroundBeamsWithCollisionDemo />
</div>


    <div class="relative w-full ">       
 {/* Hero Section */}
  
    {/* 3 type Icons Proficency, Trust */}
    <div
    
    
    class="sticky top-0  h-auto lg:h-auto flex flex-col bg-center backdrop-blur-3xl  fgh ">
        <Df />
        
    </div>
     {/* Our Software Dev Company Component */}
    <div class="sticky top-0 wrapper h-[120vh] lg:h-auto flex flex-col items-center justify-center bg-white "
     
    >
     <Fx 
  
     />

 </div>

{/* Tech Proficiency Frontend, Backend, Cms, Server :)  */}
    <div class="sticky top-0 h-[1050px] flex flex-col  bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
      <Tech />                  
                        
        </div>
{/* Image Backround for the Contact Us */}
<div class="sticky top-0  h-[120vh]  lg:h-auto flex flex-col bg-black   text-black"

>

<Contact />
 






        </div>

        {/* Testimonials EDITS */}
        <div class="sticky  h-[96vh] lg-auto flex flex-col  bg-black text-black">
          <h1 className=' text-white text-center text-4xl mt-16 font-extrabold lg:mt-auto '> Our Testimonials</h1>
       <AnimatedTestimonialsDemo />







        </div>
</div>

    
<TypewriterEffectDemo />
<Footer />

    </>
  )
}

 