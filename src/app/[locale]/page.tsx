import { Suspense } from "react";
import Home from "./home";
import { getWordPressPage } from "../_services/api";

export default async function Page(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressPage(locale, 'home');
  console.log(data);
  return (
    <Suspense fallback="Loading...">
      <Home data={undefined} />
    </Suspense>
  );
}
