import { ProjectWp } from "../_interfaces/wordpress-components";
import { getAllProjects } from "../_services/api";
import MotionLogo from "./motion-logo";
import AnimationCarousel from "./animation-carousel";

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
      <AnimationCarousel projects={projects}/>
      <MotionLogo />
    </div>
  );
}

export default HeaderCarousel;
