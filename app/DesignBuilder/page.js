import Link from 'next/link'
import React from 'react'
import { TabsDemo } from './Tabs'
import Footer from '../Components/Footer'

export default function page() {
  return (
    <>
    
    
    <div class="relative h-screen mt-10 w-full">
    <img src="https://websitesetup.org/wp-content/uploads/2021/04/06-uexpert.jpg" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter blur-2"/>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white text-center font-bold">Create a website without limits</h1>
        <p class="text-base text-white mt-4 text-center p-5">Bring your vision to life with the website builder that gives you the tools you need to succeed.</p>
       <Link href={"/DesignBuilder/Build"}><button class="group   rounded-xl text-center group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
  Create Design
</button>
</Link> 
    </div>
</div>



{/* Made On */}

<div class="h-[400px] w-screen bg-black ">

    <div class="relative pt-20">
        <div aria-hidden="true" class="hidden sm:block">
            <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-800 rounded-r-3xl">
            </div>
            <svg class="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                    <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20"
                        patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect>
                    </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"></rect>
            </svg>
        </div>
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="relative rounded-2xl px-6 py-10 bg-gray-700 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"><svg
                        class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                        <path class="text-gray-600 text-opacity-40" fill="currentColor"
                            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path>
                        <path class="text-gray-800 text-opacity-40" fill="currentColor"
                            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path>
                    </svg>
                </div>
                <div class="relative flex flex-col">
                    <div class="sm:text-center">
                        <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl"> Made By Us
                        </h2>
                        <p class="mt-6 mx-auto max-w-2xl text-lg text-gray-100"> Explore Sites </p>
                    </div>
                 
                </div>
            </div>
        </div>
    </div>

</div>
<TabsDemo />

<Footer />
    
    
    </>
  )
}
