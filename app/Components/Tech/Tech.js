import React from 'react'
import TechStack from './RTech'

export default function Tech() {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
            <p
                class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-500 text-white">
                Our  Tech
            </p>
        </div>
        <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">

                <svg viewBox="0 0 52 24" fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32  -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                    <defs>
                        <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135"
                            height=".30">
                            <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                    </defs>
                    <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
                </svg>

                <span class="relative"></span>
            </span>
            Technology Proficiency
        </h2>
        <p class="text-base text-gray-700 md:text-lg">Leverage the expertise of a dependable software development team. We utilize various tech stacks and leverage frameworks like Angular, Laravel, and much more. The developers in our team are well-versed in choosing the right CMS, database, and server to help you achieve remarkable results.
        </p>
    </div>


   <TechStack />

</div>
  )
}
