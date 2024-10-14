import { getWordPressPage } from "../_services/api";
import Footer from "../components/footer";
import Header from "../components/header";

interface Props {
  children: any;
  locale: "en" | "es" | "de";
}

async function App(props: Props) {
  const { children, locale } = props;
  const linksHeader = [
    { title: "Fonaments", url: "/" },
    { title: "Proyectos", url: `es/projects` },
    { title: "Estudio", url: "es/study" },
    { title: "Contacto", url: "es/contact" },
  ];

  return (
    <>
      <Header links={linksHeader} />
      <div className="bg-body">{children}</div>
      <Footer />
    </>
  );
}

export default App;
