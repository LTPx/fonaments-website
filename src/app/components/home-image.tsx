"use client";

import { useEffect, useState } from "react";

function HomeImage() {
  const [bottomOffset, setBottomOffset] = useState(30);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollBottom = documentHeight - windowHeight - scrollY;

      if (scrollBottom <= 75) {
        setBottomOffset(75);
      } else {
        setBottomOffset(30);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col lg:h-[100vh]">
      <div className="hidden lg:block">
        <div
          className="fixed lg:z-[2000] left-[30px] right-[30px] transition-all duration-300 ease-in-out" // Agregar transiciones
          style={{ bottom: `${bottomOffset}px` }}
        >
          <img src="/images/fonaments.svg" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default HomeImage;
