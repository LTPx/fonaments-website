"use client";

import MotionLogo from "./motion-logo";
import AnimationCarousel from "./animation-carousel";
import { useEffect, useState } from "react";
import { WordPressPost } from "../_interfaces/wordpress";

interface AnimationHomeProps {
  projects: WordPressPost[];
}

export function AnimationHome(props: AnimationHomeProps) {
  const { projects } = props;
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 800);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="relative flex flex-col lg:h-[100vh]">
      <MotionLogo />
      {showCarousel && (
        <div className={`transition-opacity duration-700 ${showCarousel ? 'opacity-100' : 'opacity-0'}`}>
          <AnimationCarousel projects={projects} />
        </div>
      )}
    </div>
  );
}

export default AnimationHome;
