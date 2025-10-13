"use client";

import { useEffect, useState } from "react";

export default function VideoBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const videoSrc = isMobile ? "/videos/portrait.mp4" : "/videos/landscape.mp4";

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        key={videoSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/80" />
    </>
  );
}
