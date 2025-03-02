"use client";
import { useState, useEffect, useRef } from "react";

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setLoading(false), 1000); // Wait for animation to finish
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setFadeOut(true); // Start fade-out when video ends
    setTimeout(() => setLoading(false), 1000); // Wait for animation to finish
  };

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src="https://motionbgs.com/media/2003/colorful-cube.960x540.mp4" type="video/mp4" />
          </video>

          {/* Semi-transparent overlay for better contrast */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Loading Text */}
          <div className="relative text-white text-2xl font-semibold animate-pulse">
          <div className="text-white text-center text-6xl font-extrabold animate-pulse">
            VpnWan 
            <br></br>
           <span className=" text-lg text-stone-400"> a Digital Agency</span>
          </div>
          </div>

          {/* Spinner Animation */}
          </div>
      )}
      {!loading && children}
    </>
  );
};

export default Preloader;
