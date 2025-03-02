"use client"
import React from 'react'
import { useEffect, useState } from 'react';
export default function Services() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch("/api/")
        .then((res) => res.json())
        .then((data) => setCards(data.cards))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);


    
  return (
    <div>

<div class="h-full flex w-full justify-center items-center dark:bg-gray-800 p-2">

    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">

        {/* <!-- card  --> */}
        {cards.map((card) => (
        <div
        key={card.id}
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                24
            </div>
            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://market-resized.envatousercontent.com/previews/files/578527836/01_pitnik-banner.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a7c544b2df391eae22904814f152e3e5d950ae73d6dbdf1c8b87d7d686bf50a6"
                    loading="lazy"/>
                </a>
            </div>

            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            {card.title}
                        </h5>
                    </a>

                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                    {card.description}
                    </p>
                    <p className=' text-white  hover:underline mt-3 '>Live Demo 🔗</p>
                </div>
            </div>

        </div>
        ))}
        

    

        

    </div>

</div>


    </div>
  )
}
