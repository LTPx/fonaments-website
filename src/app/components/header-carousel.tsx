import { ProjectWp } from "../_interfaces/wordpress-components";
import { getAllProjects } from "../_services/api";
import AnimationHome from "./animation-home";

interface HeaderCarouselProps {
  items: ProjectWp[];
}

export async function HeaderCarousel(props: HeaderCarouselProps) {
  const { items } = props;

  const allProjects = await getAllProjects("es");
  const projectsIdsSelected = items.map((item) => item.project.ID);
  const projects = allProjects.filter((project) => {
    return projectsIdsSelected.includes(project.id);
  });

  return (
    <AnimationHome projects={projects}/>
  );
}

export default HeaderCarousel;
