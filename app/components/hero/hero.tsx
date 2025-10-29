"use client"
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [index, setIndex] = useState(0);

  const handleEnded = () => {
    setIndex((prev) => (prev + 1) % videos.length); // loop through videos
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleEnded);
    }
    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, [index]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-10 py-20 overflow-hidden">
      {/* Background video */}
      <video
        key={index}
        ref={videoRef}
        src={videos[index]}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay content */}
      <div className=" relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center text-white">
        <div className="flex flex-col space-y-4 mt-6 md:mt-10 lg:mt-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            KENA DRIVING SCHOOL
          </h1>
          <p className="mt-4 max-w-xl text-xl leading-relaxed">
            At KENA Driving School, we are committed to producing safe, confident, and skilled drivers. 
            With certified instructors, modern training vehicles, and flexible schedules, we provide 
            comprehensive driving lessons that prepare our students for both the road test and real-life 
            driving experiences.
           </p>
        </div>
      </div>

      {/* Optional dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 -z-5"></div>
    </div>
  );
};

export default Hero;
