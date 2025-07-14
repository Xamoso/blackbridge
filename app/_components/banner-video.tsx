"use client";

import { useEffect, useState } from "react";

const VideoBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      <video
        src="/banner-video-aurum.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{
          objectPosition: isMobile ? "75% center" : "center center",
        }}
      />
    </div>
  );
};

export default VideoBanner;
