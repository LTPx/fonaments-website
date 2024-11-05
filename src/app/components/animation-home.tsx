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
  const [showHomeInfo, setShowHomeInfo] = useState(false); // Nuevo estado para controlar la visibilidad de HomeInformation

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
    <div className="relative flex flex-col lg:h-[100vh]  mb-[30px] lg:mb-[100px]">
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
      <section className="lg:hidden block pb-[45px] lg:pb-[78px] pt-[66px] lg:pt-[82px]">
        <img src="/images/fonaments.svg" />
      </section>
      {showHomeInfo && (
        <section className="z-30 lg:pt-[70px]">
          <HomeInformation title={title} description={description} />
        </section>
      )}
    </div>
  );
}

export default AnimationHome;
