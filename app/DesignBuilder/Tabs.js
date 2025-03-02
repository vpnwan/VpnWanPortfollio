"use client";

import Image from "next/image";
import { Tabs } from "./../utils/Tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Restaurant App",
      value: "product",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Restaurant Website</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Hospital Sites",
      value: "services",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Hospitals</p>
          <DummyContent1 />
        </div>
      ),
    },
    
  ];

  return (
    (<div
      className="h-[20rem] md:h-[40rem] [perspective:650px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>)
  );
}

const DummyContent = () => {
  return (
    (<Image
      src="https://colorlib.com/wp/wp-content/uploads/sites/2/4_restaurant-website-designs.jpg.avif"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};


const DummyContent1 = () => {
    return (
      (<Image
        src="https://htmlburger.com/blog/wp-content/uploads/2024/06/Hospital-Websites-Design-Example-Synergy-Private-Health.png"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />)
    );
  };