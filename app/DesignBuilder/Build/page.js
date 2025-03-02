import { AppleCardsCarouselDemo } from '@/app/Components/AppleCarddemo'
import Footer from '@/app/Components/Footer'
import React from 'react'

export default function Build() {
  return (
   <>
   <div class="flex h-[80vh] mt-10  justify-center items-center dark:bg-gray-800">
    <div class="text-center max-w-6xl mx-10">
        <p class="my-3 text-sm tracking-widest text-indigo-500 uppercase">Fast &amp; SEO friendly</p>
        <h1 class="my-3 text-3xl font-bold tracking-tight text-white md:text-5xl dark:text-gray-100">
            Pick a Theme or a Design
        </h1>
        <div>
            <p class="max-w-2xl mx-auto my-2 text-base text-gray-300 md:leading-relaxed md:text-xl dark:text-gray-400">
            One of these homepage options could be great to start with. You can always change later.
            </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">

{/* U can add themes   */}


        </div>
    </div>
</div>




{/* Choose Theme */}

<AppleCardsCarouselDemo />
<Footer />
   
   </>
  )
}
