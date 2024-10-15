import Header from "./header";
import MenuMobile from "./menu-mobile";

async function AppHeader() {
  const linksHeader = [
    { title: "Fonaments", url: "/" },
    { title: "Proyectos", url: `es/projects` },
    { title: "Estudio", url: "es/study" },
    { title: "Contacto", url: "es/contact" },
  ];

  const menuLinks = [
    { title: "Inicio", url: "/" },
    { title: "Proyectos", url: `es/projects` },
    { title: "Estudio", url: "es/study" },
    { title: "Contacto", url: "es/contact" },
  ];

  const languages = ["ESP", "ENG", "DEU"];

  return (
    <>
      <Header links={linksHeader} />
      <MenuMobile languages={languages} links={menuLinks} />
    </>
  );
}

export default AppHeader;
