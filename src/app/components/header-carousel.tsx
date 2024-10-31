import { ProjectWp } from "../_interfaces/wordpress-components";
import { getAllProjects } from "../_services/api";
import MotionLogo from "./motion-logo";
import AnimationCarousel from "./animation-carousel";
import { useEffect, useState } from "react";
import { WordPressPost } from "../_interfaces/wordpress";

interface HeaderCarouselProps {
  items: ProjectWp[];
}

export async function HeaderCarousel(props: HeaderCarouselProps) {
  const { items } = props;

  const allProjects = await getAllProjects("en");
  const projectsIdsSelected = items.map((item) => item.project.ID);
  const projects = allProjects.filter((project) => {
    return projectsIdsSelected.includes(project.id);
  });

  return (
    <div className="relative flex flex-col lg:h-[100vh]">
      {/* <div>
      {isLoading && (
        <div className="fixed inset-0 bg-body z-50 flex items-center justify-center">
        </div>
      )}
      </div> */}
      <AnimationCarousel projects={projects} />
      <MotionLogo />
    </div>
  );
}

export default HeaderCarousel;
