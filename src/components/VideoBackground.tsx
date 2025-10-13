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
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        key={videoSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-black/80 -z-10" />
    </>
  );
}
