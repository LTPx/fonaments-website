import { getWordPressPage } from "../_services/api";
import Header from "../components/header";

interface Props {
  children: any;
  locale: 'en' | 'es' | 'de';
}

async function App(props: Props) {
  const { children, locale } = props;
  const linksHeader = [
    { title: 'Proyectos', url: '/' },
    { title: 'Estudio', url: `/` },
    { title: 'Contacto', url: '/' },
  ];

  return (
    <>
    <Header  links={linksHeader} />
    <div>{children}</div>
    </>
  );
}

export default App;
