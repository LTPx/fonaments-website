import { Suspense } from "react";
import { getAllProjects, getWordPressPage } from "@/app/_services/api";
import ProjectSection from "@/app/components/projects-section";
import TruncatedText from "@/app/components/truncated-text";

async function Projects(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressPage(locale, "projects");
  const { acf } = data;
  const { information, section } = acf;
  const allProjects = await getAllProjects(locale);
  const btns = ["Todos", "Obra nueva", "Reforma", "Rústico"];

  return (
    <div className="container page-projects">
      <section className="flex flex-col lg:flex-row lg:justify-between">
        <h1 className="font-regular pt-[4px] lg:pt-[0px]">{information.title}</h1>
        <div className="pt-[14px] lg:pt-[37px]">
        <TruncatedText
          className="text-[16px] leading-[22px] lg:text-[26px] lg:leading-[32px] lg:w-[550px] xl:w-[815px]"
          content={information.description}
        />
        </div>
      </section>
      <section className="pt-[59px] lg:pt-[90px]">
        <ProjectSection options={btns} projects={allProjects} />
      </section>
      <section className="pt-[30px] lg:pt-[180px] pb-[80px] lg:pb-[94px]">
        <hr className="border-t border-black border-1 mb-[10px]" />
        <div className="flex gap-[15px] lg:gap-[0px] flex-col lg:grid lg:grid-cols-2">
          <div
            className="project-info font-medium lg:w-[263px] tracking-[-0.015em] text-[16px] lg:text-[18px] leading-[20px]"
            dangerouslySetInnerHTML={{ __html: section.description }}
          />
          <h2 className="lg:w-[429px] lg:leading-[46px]">{section.title}</h2>
        </div>
      </section>
    </div>
  );
}

export default Projects;
