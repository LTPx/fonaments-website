import { Suspense } from "react";
import { getAllProjects, getWordPressCustomPage } from "../_services/api";
import Skeleton from "../components/skeleton-home";
import Home from "./home";

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

  function isDefined<T>(value: T | undefined): value is T {
    return value !== undefined;
  }

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
