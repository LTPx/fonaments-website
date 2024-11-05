"use client";

import MotionLogo from "./motion-logo";
import AnimationCarousel from "./animation-carousel";
import { useEffect, useState } from "react";
import { WordPressProject } from "../_interfaces/wordpress-project";
import HomeInformation from "./home-information";

interface AnimationHomeProps {
  projects: WordPressProject[];
  title: string;
  description: string;
}

export function AnimationHome(props: AnimationHomeProps) {
  const { projects, title, description } = props;
  const [showCarousel, setShowCarousel] = useState(false);
  const [showHomeInfo, setShowHomeInfo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowHomeInfo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col lg:h-[100vh]">
      <MotionLogo />
      {showCarousel && (
        <div
          className={`transition-opacity duration-700 ${
            showCarousel ? "opacity-100" : "opacity-0"
          }`}
        >
          <AnimationCarousel  projects={projects} />
        </div>
      )}
      {/* {showHomeInfo && (
        <section className="z-30 lg:pt-[70px]">
          <HomeInformation title={title} description={description} />
        </section>
      )} */}
    </div>
  );
}

export default AnimationHome;
