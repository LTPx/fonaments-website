import { Suspense } from "react";
import { getAllProjects, getWordPressCustomPage } from "../_services/api";
import Skeleton from "../components/skeleton-home";
import Home from "./home";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "home");
  if (page) {
    const { yoast_seo } = page;
    const { yoast_desc, yoast_title } = yoast_seo;
    return {
      title: `Fonaments`,
      description: page.acf.description_project,
      openGraph: {
        title: "Fonaments",
        description: yoast_desc,
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

export default async function Page(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "home");
  const allProjects = await getAllProjects(locale);

  const { acf } = data;
  const { home_information, services, service_section, feature_projects } = acf;

  const projectsIdsSelected = feature_projects.map((item) => item.project.ID);

  const projects = projectsIdsSelected
    .map((id) => allProjects.find((project) => project.id === id))
    .filter(isDefined);

  return (
    <Suspense fallback={<Skeleton />}>
      <Home
        projects={projects}
        home_information={home_information}
        services={services}
        service_section={service_section}
      />
    </Suspense>
  );
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}
