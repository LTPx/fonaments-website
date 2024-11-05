import { WordPressProject } from "../_interfaces/wordpress-project";
import AnimationHome from "./animation-home";

interface HeaderCarouselProps {
  projects: WordPressProject[];
  title: string;
  description: string;
}

export async function HeaderCarousel(props: HeaderCarouselProps) {
  const { projects , title, description } = props;
  

  return (
    <AnimationHome projects={projects} title={title} description={description}/>
  );
}

export default HeaderCarousel;
