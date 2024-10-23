import { Suspense } from "react";
import { getWordPressPage } from "@/app/_services/api";
import ProjectSection from "@/app/components/projects-section";
import StudySection from "@/app/components/study-section";

async function Study(nextParams: { params: { locale: "en" | "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressPage(locale, "study");
  const { acf } = data;
  const { information, team_section, services_section } = acf;

  return (
    <div className="container page-study">
      <section className="flex flex-col lg:flex-row lg:justify-between">
        <h1 className="pt-[4px] lg:pt-[0px]">{information.title}</h1>
        <div
          className="pt-[14px] lg:pt-[37px] lg:w-[620px] xl:w-[803px] text-[16px] leading-[22px] lg:text-[26px] lg:leading-[32px]"
          dangerouslySetInnerHTML={{ __html: information.description }}
        />
      </section>
      <section className="pt-[50px] lg:pt-[300px] xl:pt-[367px]">
        <StudySection gallery={team_section.gallery} services={services_section} teamSection={team_section} />
      </section>
    </div>
  );
}

export default Study;
