import { getWordPressCustomPage } from "@/app/_services/api";
import StudySection from "@/app/components/study-section";

async function Study(nextParams: { params: { locale: "en" | "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressCustomPage(locale, "study");
  const { acf } = data;
  const { team_section, services_section, information_section } = acf;

  return (
    <div className="container page-study">
      <section>
        <StudySection
          gallery={team_section.gallery}
          services={services_section}
          teamSection={team_section}
          information_section={information_section}
        />
      </section>
    </div>
  );
}

export default Study;
