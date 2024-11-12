import { getWordPressCustomPage } from "@/app/_services/api";
import StudySection from "@/app/components/study-section";
import { truncateTextHtml } from "@/app/utils";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "studio");
  if (page) {
    const { yoast_seo, acf } = page;
    const {
      information_section: { study_section },
    } = acf;
    const title = `Fonaments - ${study_section.title}`;
    const description =  truncateTextHtml(study_section.description);
    const { yoast_desc } = yoast_seo;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        siteName: "Fonaments",
        locale: locale,
      },
    };
  } else {
    return {
      title: "Fonaments",
    };
  }
}

async function Studio(nextParams: { params: { locale: "en" | "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressCustomPage(locale, "studio");
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

export default Studio;
