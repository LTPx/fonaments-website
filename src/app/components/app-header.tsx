"use client";

import Header from "./header";
import MenuMobile from "./menu-mobile";
import { usePathname } from "next/navigation";

async function AppHeader() {
  const pathname = usePathname();

  const linksHeader = [
    { title: "Fonaments", url: "/" },
    { title: "Proyectos", url: `/projects` },
    { title: "Estudio", url: "/study" },
    { title: "Contacto", url: "/contact" },
  ];

  const menuLinks = [
    { title: "Inicio", url: "/" },
    { title: "Proyectos", url: `/projects` },
    { title: "Estudio", url: "/study" },
    { title: "Contacto", url: "/contact" },
  ];

  const filteredLinksHeader = pathname === '/es' 
  ? linksHeader.filter(link => link.title !== "Fonaments")
  : linksHeader;

  const languages = ["ESP", "ENG", "DEU"];

  return (
    <>
      <Header links={filteredLinksHeader} />
      <MenuMobile languages={languages} links={menuLinks} />
    </>
  );
}

export default AppHeader;
