import React from 'react'

export default function Footer() {
  return (
        
<footer class="mx-auto w-full max-w-container px-4 sm:px-6 bg-violet-600 mt-10 lg:px-8">
    <div class="border-t border-slate-900/5 py-10">
        <p class="mt-5 text-center text-sm leading-6 text-white">© 2025 Vpnwan Labs Inc. All rights reserved.</p>
        <div class="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-white"><a
        className=' hover:underline'
                href="/privacy-policy">Privacy policy</a>
            <div class="h-4 w-px bg-slate-500/20 hover:underline "></div>
            <a href="/changelog">Changelog</a> <br></br>
            <a href="mailto:vpnwanlabs@gmail.com" class="underline text-center">MailUs</a>
        </div>
        
    </div>
   
</footer>
  )
}
