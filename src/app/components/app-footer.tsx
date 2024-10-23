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
  const { offices, contact_information } = acf;

  return <Footer footer={offices} contact_information={contact_information} />;
}

export default AppFooter;
