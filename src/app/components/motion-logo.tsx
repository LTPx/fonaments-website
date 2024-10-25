"use client";

import Lottie from "lottie-react";
import logoAnimation from "../../../public/lottie/motion_logo.json";
import { useEffect, useState } from "react";

export default function MotionLogo() {
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollBottom = documentHeight - windowHeight - scrollY;

      if (scrollBottom <= 50) {
        setBottomOffset(50);
      } else {
        setBottomOffset(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="logo-container fixed bottom-0 left-0 right-0 z-[200] w-full transition-all duration-300 ease-in-out"
      style={{ bottom: `${bottomOffset}px` }}
    >
      <Lottie
        animationData={logoAnimation}
        loop={false}
        autoplay={true}
        className="w-full h-auto"
      />
    </div>
  );
}
