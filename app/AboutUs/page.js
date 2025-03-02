import React from 'react'
import Navbar from '../Navbar'
import Link from 'next/link'
import Footer from '../Components/Footer'
import ContactSection from './Contact'
import Map from './Contact'

export default function page() {














  
  return (
    <>
  
    <Navbar />
    <nav class="flex mt-32">
    <ol class="flex flex-wrap text-xs">
        
        <li>
            <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                   
                </svg>
                <Link href="/"
                    class="flex font-medium text-gray-500 hover:text-gray-900">Home
                </Link>
            </div>
        </li>
        <li>
            <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd">
                    </path>
                </svg>
                <a href="#"
                    class="flex font-medium text-gray-200 hover:text-gray-900">About
                </a>
            </div>
        </li>
    
    </ol>
</nav>

{/* Hero */}

<div class="p-10 sm:p-10 m-5 rounded-3xl bg-gray-900 dark:bg-gray-900 dark:text-white bg-white text-black flex items-center justify-center overflow-hidden shadow-2xl">
  <div class="w-full max-w-6xl px-4 sm:px-6">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
   
      <div class="flex flex-col justify-center text-center md:text-left z-10">
        <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold uppercase leading-tight tracking-tight">
        Accelerating Scientific  <span class="text-yellow-500">Advancement</span>
        </h1>
        <p class="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-400 dark:text-gray-400 text-gray-700 text-balance">
        When we started helping researchers meet their publication goals, we wanted to help research from all around the world get due recognition. We then extended our support to other players in the research and publishing space. Our initiatives, services, and platforms are designed to empower key players in knowledge creation, communication, dissemination, and promotion. We want to advance society by making science accessible globally through innovation and technology.
        </p>
        <div class="mt-6 sm:mt-8 flex flex-wrap gap-4">
          <a href="#get-started" class="rounded-sm p-3 grow text-center bg-yellow-500 text-black font-bold uppercase text-sm tracking-widest hover:bg-yellow-600 transition">
            Get Started
          </a>
          <a href="#learn-more" class="rounded-sm p-3 grow border text-center border-yellow-500 text-yellow-500 font-bold uppercase text-sm tracking-widest hover:bg-yellow-500 hover:text-black transition">
            Learn More
          </a>
        </div>
      </div>

      <div class="relative flex items-center sm:m-10">
        <div
          class="absolute -top-10 md:-top-20 -left-10 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-yellow-500 rotate-12 rounded-lg border-yellow-700 border-b-4 border-r-8 max-sm:hidden">
        </div>
        <div class="relative z-10 bg-gray-800 dark:bg-gray-800 p-4 sm:p-6 -right-1/2 -translate-x-1/2 grow text-center shadow-2xl -rotate-2 rounded-xl text-nowrap border-slate-950 border-b-4 border-r-8">
          <h2 class="text-2xl sm:text-3xl font-bold uppercase text-gray-50 dark:text-gray-50">
            Build. Ship. Deliver.
          </h2>
          <p class="mt-1 text-sm sm:text-base font-light text-gray-400 dark:text-gray-400">
            Embrace minimalism with maximal impact.
          </p>
        </div>
        <div class="absolute -bottom-10 md:-bottom-20 -right-16 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-yellow-500 -rotate-12 rounded-lg border-yellow-700 border-r-4 border-b-8 max-sm:hidden"></div>
      </div>
    </div>
  </div>
</div>

{/* Feature List */}

<section>
 <div class="px-8 py-24 mx-auto md:px-12 mt-40 lg:px-32 max-w-screen-xl flex flex-col lg:h-svh justify-center">
  <div class="flex flex-col ">
    
   <div class="mt-6 border-t pt-12">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
     <div> <span class="text-gray-600  uppercase text-xs font-medium "> Our Cultural DNA </span>
      <p class="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> Vpnwan Culture </p>
      <p class="text-sm  mt-4 text-gray-700 text-balance"> 
      The Vpnwan culture is unique and has come to be its defining feature. Our founders wanted to create a company that attracts customers and talent for life. This has been possible with the open, inclusive, and customer-obsessed culture we have built. Vpnwan is a meeting place of diverse thoughts, cultures, and identities, and diversity is a key thread of our cultural tapestry.
        
        
         </p>
      <div class="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-white">
       <div class="inline-flex items-center gap-2  text-xs text-gray-700"> <svg class="icon icon-tabler text-gray-700 size-4 icon-tabler-360" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4"></path>
         <path d="M9 13l3 3l-3 3"></path>
        </svg> <span class="text-white font-medium text-sm"> Clear data visibility </span> </div>
       <div class="inline-flex items-center gap-2  text-xs text-gray-700"> <svg class="icon icon-tabler text-gray-700 size-4 icon-tabler-antenna-bars-3" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M6 18l0 -3"></path>
         <path d="M10 18l0 -6"></path>
         <path d="M14 18l0 .01"></path>
         <path d="M18 18l0 .01"></path>
        </svg> <span class="text-white font-medium text-sm"> Reduced external factors </span> </div>
       <div class="inline-flex items-center gap-2  text-xs text-gray-700"> <svg class="icon icon-tabler text-gray-700 size-4 icon-tabler-load-balancer" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
         <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
         <path d="M12 16v3"></path>
         <path d="M12 10v-7"></path>
         <path d="M9 6l3 -3l3 3"></path>
         <path d="M12 10v-7"></path>
         <path d="M9 6l3 -3l3 3"></path>
         <path d="M14.894 12.227l6.11 -2.224"></path>
         <path d="M17.159 8.21l3.845 1.793l-1.793 3.845"></path>
         <path d="M9.101 12.214l-6.075 -2.211"></path>
         <path d="M6.871 8.21l-3.845 1.793l1.793 3.845"></path>
        </svg> <span class="text-white font-medium text-sm"> enhanced stabilty </span> </div>
       <div class="inline-flex items-center gap-2  text-xs text-gray-700"> <svg class="icon icon-tabler text-gray-700 size-4 icon-tabler-brand-speedtest" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M5.636 19.364a9 9 0 1 1 12.728 0"></path>
         <path d="M16 9l-4 4"></path>
        </svg> <span class="text-white font-medium text-sm"> accelerated times </span> </div>
      </div>
     </div>
     <div class="h-full md:order-first"> <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0TIKK2QTECkqUQgo3kCSMgHaDt%26pid%3DApi&f=1&ipt=06360031f12e6649a8bbe8969184b5a6240cc99648472a78edeac6c32bdfa3ea&ipo=images" alt="#_" class=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"/> </div>
    </div>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
     <div> <span class="text-gray-600  uppercase text-xs font-medium "> Our Mission </span>
      <p class="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> Tailored financial solutions for any scenario </p>
      <p class="text-sm  mt-4 text-gray-700 text-balance"> Discover a range of financial instruments and personalized advice designed to meet your unique requirements. </p>
      <div class="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-white">
       <div class="inline-flex items-center gap-2  text-xs text-gray-700"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database text-gray-700 size-4" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>
         <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
         <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
        </svg> <span class="text-white font-medium text-sm"> Transparent Data Access </span> </div>
       <div class="inline-flex items-center gap-2  text-xs text-gray-700"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building text-gray-700 size-4" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M3 21l18 0"></path>
         <path d="M9 8l1 0"></path>
         <path d="M9 12l1 0"></path>
         <path d="M9 16l1 0"></path>
         <path d="M14 8l1 0"></path>
         <path d="M14 12l1 0"></path>
         <path d="M14 16l1 0"></path>
         <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
        </svg> <span class="text-white font-medium text-sm"> Lowered Interference </span> </div>
       <div class="inline-flex items-center gap-2  text-xs text-gray-700"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-augmented-reality-2 text-gray-700 size-4" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5"></path>
         <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z"></path>
         <path d="M13 14.5v4.5l4 2.5"></path>
         <path d="M17 17l4 -2.5"></path>
         <path d="M11 4h2"></path>
        </svg> <span class="text-white font-medium text-sm"> Improved Reliability </span> </div>
       <div class="inline-flex items-center gap-2  text-xs text-gray-700"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-time-duration-0 text-gray-700 size-4" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M3 12v.01"></path>
         <path d="M21 12v.01"></path>
         <path d="M12 21v.01"></path>
         <path d="M12 3v.01"></path>
         <path d="M7.5 4.2v.01"></path>
         <path d="M16.5 4.2v.01"></path>
         <path d="M16.5 19.8v.01"></path>
         <path d="M7.5 19.8v.01"></path>
         <path d="M4.2 16.5v.01"></path>
         <path d="M19.8 16.5v.01"></path>
         <path d="M19.8 7.5v.01"></path>
         <path d="M4.2 7.5v.01"></path>
         <path d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z"></path>
        </svg> <span class="text-white font-medium text-sm"> Faster Processing Times </span> </div>
      </div>
     </div>
     <div class="h-full "> <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wodumedia.com%2Fwp-content%2Fuploads%2Fsites%2F2%2Fsites%2F1000016%2F2018%2F08%2F1011.jpg&f=1&nofb=1&ipt=35b9584f6377cdf18109870ce555cf03ff093a972fa2e436bcf5d24fc4621dc2&ipo=images" alt="#_" class=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"/> </div>
    </div>
   </div> 
   
  </div>
 </div>
</section>


{/* Our Journey  */}

<div class="flex flex-wrap mt-36 lg:mt-auto">
    <div class="w-full sm:w-8/12 mb-10">
      <div class="container mx-auto h-full sm:p-10">
   
        <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div class="w-full">
            <h1 class="text-4xl lg:text-6xl font-bold">Our <span class="text-green-700">Journey</span></h1>
            <div class="w-20 h-2 bg-green-700 my-4"></div>
            <p class="text-xl mb-10">
            In 2022, Enterprenuer Namit Singh started Vpnwan in Mount-abu with the dream of helping authors get published. 
            This dream today is a global enterprise with offices in 2 locations across the India.

             We have evolved from a language editing company to a pioneer in the research impact and technology solutions space.


            </p>
            <button class="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
          </div>
        </header>
      </div>
    </div>
    <img src="https://ats.org/wp-content/uploads/2020/04/Index-High-Tech-Future.jpg" alt="Leafs" class="w-full h-32 object-cover sm:h-screen sm:w-4/12"/>
  </div>



  {/* Faq */}

  <section class="bg-[#1D1D1D] text-gray-100 py-32 mt-16 h-full scale-100">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 class="mb-12 text-5xl font-bold leading text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div class="flex flex-col divide-y sm:px-8 lg:px-12 gap-10 xl:px-32 divide-gray-700">
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How can I get started with your software services?</summary>
        <div class="px-4 pb-4">
          <p>You can start by reaching out to us via the contact form or directly email us with your requirements. After discussing your project, we will provide a proposal tailored to your needs.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What technologies do you specialize in?</summary>
        <div class="px-4 pb-4">
          <p>We specialize in modern web development technologies such as React, Next.js, Node.js, and Firebase, along with mobile app development using React Native and Flutter. We also have expertise in cloud solutions and software integration.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How long does it take to complete a software project?</summary>
        <div class="px-4 pb-4">
          <p>The duration depends on the complexity and scope of your project. Typically, smaller projects can take 4-6 weeks, while larger enterprise solutions may require several months. We work with you to define a timeline based on your specific needs.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Do you offer post-launch support?</summary>
        <div class="px-4 pb-4">
          <p>Yes, we provide ongoing support and maintenance after your project is launched. This includes bug fixes, updates, and any additional features or enhancements you may require.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Can you help with software integration?</summary>
        <div class="px-4 pb-4">
          <p>Yes, we specialize in integrating third-party tools and APIs into your software solution, whether it’s for payment gateways, CRM systems, or other business tools. Our team ensures smooth integration with minimal disruption.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How can I contact your support team?</summary>
        <div class="px-4 pb-4">
          <p>If you need assistance, you can reach out to our support team by emailing <a href="mailto:vpnwanlabs@gmail.com" class="underline">vpnwanlabs@gmail.com</a> or call us at (+91) 9001907090 during business hours (Monday to Sunday, 9 am to 6 pm).</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What are your terms and conditions?</summary>
        <div class="px-4 pb-4">
          <p>Our terms and conditions, including details on payment, intellectual property, and service delivery, can be found on our 
            <a href="/terms" class="underline">Terms of Service</a> page.</p>
        </div>
      </details>
    </div>
  </div>
</section>


{/* MAP */}

<h1 className=' text-5xl text-center font-extrabold  mb-9 mt-10'>Find Us </h1>


<ContactSection />











{/* Footer */}

  <Footer />
  

    </>
  )
}



