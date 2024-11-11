"use client";

import { useTranslations } from "next-intl";
import Header from "./header";
import MenuMobile from "./menu-mobile";
import { usePathname } from "next/navigation";

function AppHeader() {
  const pathname = usePathname();
  const t = useTranslations();

  const linksHeader = [
    { title: `${t('header.brand')}`, url: "/" },
    { title: `${t('header.projects')}`, url: `/projects` },
    { title: `${t('header.study')}`, url: "/studio" },
    { title: `${t('header.contact')}`, url: "/contact" },
  ];

  const menuLinks = [
    { title: `${t('header.home')}`, url: "/" },
    { title: `${t('header.projects')}`, url: `/projects` },
    { title: `${t('header.study')}`, url: "/studio" },
    { title: `${t('header.contact')}`, url: "/contact" },
  ];

  const allLanguages = ["/es", "/en", "/de"];

  const filteredLinksHeader = allLanguages.includes(pathname) 
  ? linksHeader.filter(link => link.title !== "Fonaments")
  : linksHeader;

  const languages = [
    { name: "ESP", url: "/es" },
    { name: "ENG", url: "/en" },
    { name: "DEU", url: "/de" }
  ]; 

  return (
    <>
      <Header links={filteredLinksHeader} />
      <MenuMobile languages={languages} links={menuLinks} />
    </>
  );
}

export default AppHeader;
