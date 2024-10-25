import { Link } from "@/navigation";
import Carousel from "./carousel";
import { ProjectWp } from "../_interfaces/wordpress-components";
import { getAllProjects } from "../_services/api";
import ProjectCard from "./project-card";
import HomeImage from "./home-image";
import MotionLogo from "./motion-logo";

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
      <Carousel slidesNumber={3} slidesToScroll={3}>
        {projects.map((item, index) => (
          <Link href={`/projects/${item.slug}`} key={index}>
            <ProjectCard
              className="h-[456px] xl:h-[52vh]"
              title={item.title.rendered}
              image={item._embedded["wp:featuredmedia"][0].source_url}
              imageHover={
                "https://s3-alpha-sig.figma.com/img/b0ec/1da8/205f0bec1ed743c9339f5dc9d99bb8e9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NhcIzXBMUi8I10tWwPeCV-7SnXiEEWlil1kByWeJwAvW6Go8OdGINKhq6DnFb6vajTT~~yI0yXMVTDdrnMm~rQXzpFjt603UHXNsTbSXmuv~NZoFDVb9NtyL0~btkFw9iOgzGZzP2OMeh60V49-XYVIq98MCKrlyQcbyr~jGAEPWreinUczNftiiTrPawOyoKxaHSB~xFjZdcqixBH1aClRSH~p0YRjumHiWJw7MLHAeLAwpAcvQcNF-O-7AFePVS1YawDQ731qqI33Wr9XtRXgUHzbYMzHbOv7cdRRudYZwoNLbqln9us9xmsXo3j7GwpLZSAKZF7S6LUwynBfb8g__"
              }
            />
          </Link>
        ))}
      </Carousel>
      <MotionLogo />
    </div>
  );
}

export default HeaderCarousel;
