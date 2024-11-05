"use client";

import Lottie from "lottie-react";
import logoAnimation from "../../../public/lottie/motion_logo.json";
import { useEffect, useState } from "react";
import { throttle } from "lodash";
import { useMediaQuery } from "react-responsive";

export default function MotionLogo() {
  const [bottomOffset, setBottomOffset] = useState(0);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollBottom = documentHeight - windowHeight - scrollY;

      if (scrollBottom <= 50) {
        setBottomOffset(50);
      } else {
        setBottomOffset(0);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<div className="lg:block hidden relative">
  <div
    className="lottie-container bottom-0 left-0 right-0 w-full transition-all duration-300 ease-in-out"
    style={{ bottom: `${bottomOffset}px`, position: "fixed", zIndex: -1 }}
  >
    <Lottie
      animationData={logoAnimation}
      style={{
        position: "relative",
        zIndex: -1,
      }}
      loop={false}
      autoplay={true}
      className="w-full h-auto"
    />
  </div>
</div>

  );
}
