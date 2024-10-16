import Header from "./header";
import MenuMobile from "./menu-mobile";

async function AppHeader() {
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

  const languages = ["ESP", "ENG", "DEU"];

  return (
    <>
      <Header links={linksHeader} />
      <MenuMobile languages={languages} links={menuLinks} />
    </>
  );
}

export default AppHeader;
