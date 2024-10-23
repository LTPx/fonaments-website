import { Link } from "@/navigation";
import Carousel from "./carousel";
import { ProjectWp } from "../_interfaces/wordpress-components";
import { getAllProjects } from "../_services/api";

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
    <Carousel slidesNumber={3}>
      {projects.map((item, index) => (
        <Link href={`/projects/${item.slug}`} key={index}>
          <img
            src={item._embedded["wp:featuredmedia"][0].source_url}
            className="h-[456px] xl:h-[600px] object-cover w-full"
          />
          <p className="font-medium text-[14px] leading-[26px]">
            {item.title.rendered}
          </p>
        </Link>
      ))}
    </Carousel>
  );
}

export default HeaderCarousel;
