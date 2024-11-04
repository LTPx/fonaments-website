import { Suspense } from "react";
import Home from "./home";
import { getAllProjects, getWordPressCustomPage, getWordPressPage } from "../_services/api";
import Skeleton from "../components/skeleton-home";

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
  const projects = allProjects.filter((project) => {
    return projectsIdsSelected.includes(project.id);
  });

  return (
    <Suspense fallback={<Skeleton />}>
      <Home
        projects={projects}
        home_information={home_information}
        services={services}
        service_section={service_section}
        feature_projects={feature_projects}
      />
    </Suspense>
  );
}
