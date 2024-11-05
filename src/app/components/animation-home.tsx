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

  return (
    <div className="relative flex flex-col lg:h-[100vh]">
        <AnimationCarousel projects={projects} />
    </div>
  );
}

export default AnimationHome;
