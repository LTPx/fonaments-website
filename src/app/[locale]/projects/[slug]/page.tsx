import { Suspense } from "react";
import { getProjectBySlug, getAllProjects } from "@/app/_services/api";
import ProjectDetails from "@/app/components/project-details";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

async function ProjectSlugPage(nextParams: {
  params: { locale: "en" | "es" | "de"; slug: string };
}) {
  const {
    params: { locale, slug },
  } = nextParams;

  const data = await getProjectBySlug(locale, slug);
  const { acf, title } = data;
  const {
    cover_image_project,
    description_project,
    information_project,
    gallery_project,
  } = acf;
  const allProjects = await getAllProjects(locale);

  const orderedProjects = allProjects.sort((a, b) => {
    return a.id - b.id; 
  });
  
  const currentIndex = orderedProjects.findIndex(
    (project) => project.slug === slug
  );

  const prevProject = currentIndex > 0 ? orderedProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < orderedProjects.length - 1
      ? orderedProjects[currentIndex + 1]
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

  const t = await getTranslations();

  return (
    <div className="container project-slug-page">
      <div className="flex justify-between items-end">
        <h1 className="font-regular pt-[4px] lg:pt-[0px]">{title.rendered}</h1>
        <Link href={'/projects'}>
          <p className="pb-[25px] underline text-[18px] leading-[28px]">{`${t("projectPage.back")}`}</p>
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
