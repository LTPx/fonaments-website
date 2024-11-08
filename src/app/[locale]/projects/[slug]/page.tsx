import { Suspense } from "react";
import { getProjectBySlug, getAllProjects } from "@/app/_services/api";
import ProjectDetails from "@/app/components/project-details";
import { Link } from "@/navigation";

async function ProjectSlugPage(nextParams: {
  params: { locale: "en" | "es" | "de"; slug: string };
}) {
  const {
    params: { locale, slug },
  } = nextParams;

  const data = await getProjectBySlug(locale, slug);
  const { acf, yoast_head_json, title } = data;
  const {
    cover_image_project,
    description_project,
    information_project,
    gallery_project,
  } = acf;
  const allProjects = await getAllProjects(locale);
  const currentIndex = allProjects.findIndex(
    (project) => project.slug === slug
  );
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  const allCategories = Array.from(
    new Set(
      allProjects
        .flatMap((project) => project._embedded?.["wp:term"]?.categories || [])
        .map((category) => category.name)
    )
  );

  const currentCategories =
    allProjects.find((project) => project.slug === slug)?._embedded?.["wp:term"]
      ?.categories || [];

  return (
    <div className="container project-slug-page">
      <div className="flex justify-between items-end">
        <h1 className="font-regular pt-[4px] lg:pt-[0px]">{title.rendered}</h1>
        <Link href={'/projects'}>
          <p className="pb-[25px] underline text-[18px] leading-[28px]">volver</p>
        </Link>
      </div>
      <img
        src={cover_image_project.url}
        className="pt-[20px] lg:pt-[0px] h-[456px] lg:h-[800px] w-full object-cover"
      />
      <section className="pt-[20px]">
        <ProjectDetails
          gallery_project={gallery_project}
          information_project={information_project}
          description_project={description_project}
          prevProject={prevProject}
          nextProject={nextProject}
          allCategories={allCategories}
          currentCategories={currentCategories}
        />
      </section>
    </div>
  );
}

export default ProjectSlugPage;
