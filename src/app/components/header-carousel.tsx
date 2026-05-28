import dynamic from "next/dynamic";
import { WordPressProject } from "../_interfaces/wordpress-project";

const AnimationHome = dynamic(
  () => import("./animation-home"),
  { ssr: false }
);

interface HeaderCarouselProps {
  projects: WordPressProject[];
  title: string;
  description: string;
}

export function HeaderCarousel(props: HeaderCarouselProps) {
  const { projects, title, description } = props;

  return (
    <AnimationHome projects={projects} title={title} description={description} />
  );
}

export default HeaderCarousel;