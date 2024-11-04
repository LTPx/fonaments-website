import { WordPressProject } from "../_interfaces/wordpress-project";
import AnimationHome from "./animation-home";

interface HeaderCarouselProps {
  projects: WordPressProject[];
}

export async function HeaderCarousel(props: HeaderCarouselProps) {
  const { projects } = props;

  return (
    <AnimationHome projects={projects}/>
  );
}

export default HeaderCarousel;
