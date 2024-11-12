import { Suspense } from "react";
import { getAllProjects, getWordPressCustomPage, getWordPressPage } from "@/app/_services/api";
import ProjectSection from "@/app/components/projects-section";
import TruncatedText from "@/app/components/truncated-text";

async function Projects(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressCustomPage(locale, "projects");
  const { acf } = data;
  const { information, section } = acf;
  const allProjects = await getAllProjects(locale);

  return (
    <div className="container page-projects">
      <section className="flex flex-col lg:flex-row lg:justify-between">
        <h1 className="font-regular pt-[4px] lg:pt-[0px]">{information.title}</h1>
        <div className="pt-[14px] lg:pt-[37px]">
        <TruncatedText
          className="text-[1em] leading-[22px] lg:text-[1.625em] lg:leading-[32px] lg:w-[550px] xl:w-[815px]"
          content={information.description}
        />
        </div>
      </section>
      <section className="pt-[59px] lg:pt-[90px]">
        <ProjectSection projects={allProjects} />
      </section>
      <section className="pt-[30px] lg:pt-[180px] pb-[80px] lg:pb-[94px]">
        <hr className="border-t border-black border-1 mb-[10px]" />
        <div className="flex gap-[15px] lg:gap-[0px] flex-col lg:grid lg:grid-cols-2">
          <div
            className="project-info font-medium tracking-[-0.015em] text-[1em] lg:text-[1.125em] leading-[20px]"
            dangerouslySetInnerHTML={{ __html: section.description }}
          />
          <div 
            className="lg:leading-[46px] info-projects"
            dangerouslySetInnerHTML={{ __html: section.title }}
          />
        </div>
      </section>
    </div>
  );
}

export default Projects;
