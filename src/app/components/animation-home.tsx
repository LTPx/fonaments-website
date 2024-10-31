"use client";

import MotionLogo from "./motion-logo";
import AnimationCarousel from "./animation-carousel";
import { useEffect, useRef, useState } from "react";
import { WordPressPost } from "../_interfaces/wordpress";

interface AnimationHomeProps {
  projects: WordPressPost[];
}

export function AnimationHome(props: AnimationHomeProps) {
  const { projects } = props;

  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Ajusta el valor según la visibilidad deseada
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div ref={carouselRef} className="relative flex flex-col lg:h-[100vh]">
      <AnimationCarousel projects={projects} />
      <MotionLogo />
    </div>
  );
}

export default AnimationHome;
