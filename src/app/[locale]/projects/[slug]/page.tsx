import { Suspense } from "react";
import { getProjectBySlug, getWordPressPage } from "@/app/_services/api";
import ProjectDetails from "@/app/components/project-details";

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

  return (
    <div className="container project-slug-page">
      <h1 className="font-regular pt-[4px] lg:pt-[0px]">{title.rendered}</h1>
      <img
        src={cover_image_project.url}
        className="pt-[20px] lg:pt-[0px] h-[456px] lg:h-[800px] w-full object-cover"
      />
      <section className="pt-[20px]">
        <ProjectDetails
          gallery_project={gallery_project}
          information_project={information_project}
          description_project={description_project}
        />
      </section>
    </div>
  );
}

export default ProjectSlugPage;
