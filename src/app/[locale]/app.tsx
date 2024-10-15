import { getWordPressPage } from "../_services/api";
import AppHeader from "../components/app-header";
import Footer from "../components/footer";
import Header from "../components/header";

interface Props {
  children: any;
  locale: "en" | "es" | "de";
}

async function App(props: Props) {
  const { children, locale } = props;

  return (
    <>
      <AppHeader/>
      <div className="bg-body">{children}</div>
      <Footer />
    </>
  );
}

export default App;
