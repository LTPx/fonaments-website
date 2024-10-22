import React from "react";
import Footer from "./footer";
import { getWordPressPage } from "../_services/api";

async function AppFooter(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressPage(locale, "footer");
  const { acf } = data;
  const { offices } = acf;

  return <Footer footer={offices} />;
}

export default AppFooter;
