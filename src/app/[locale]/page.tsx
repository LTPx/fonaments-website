import { Suspense } from "react";
import Home from "./home";
import { getWordPressPage } from "../_services/api";

export default async function Page(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressPage(locale, "home");
  const { acf } = data;
  const { home_information, services, service_section, feature_projects } = acf;

  return (
    <Suspense fallback="Loading...">
      <Home
        home_information={home_information}
        services={services}
        service_section={service_section}
        feature_projects={feature_projects}
      />
    </Suspense>
  );
}
