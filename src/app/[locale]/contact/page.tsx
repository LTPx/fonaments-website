import { Suspense } from "react";
import { getWordPressPage } from "@/app/_services/api";

async function Contact(nextParams: { params: { locale: "en" | "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;

  return (
    <div className="container page-contact">
      <section>
        <h1 className="lg:block hidden">Nuestras oficinas</h1>
        <h1 className="pb-[17px] pt-[4px] lg:hidden text-[50px] leading-[58px]">Contacto</h1>
        <div className="hidden lg:grid lg:grid-cols-2 gap-[20px] pb-[36px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/5479/27dc/fda7eadfe11baba44c94413f4f46f76e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CvxMVWGAVChk2upd7HN2cHEcHYmVJ4qmKMz7Js5ThJNZj8m9I9zC0s0hCstyPgvaSOx53VKlaGQCFUvMc1~kl3d11zqJkbuskCVSEz~NsBCSSqVctd~guFqHZ7DnK~0j-VrZ~GTHf2cvWAhUYCnAlaZG3yhf6Rx2VJFGUbihsF5UDGlDWOR8Lc8tGCa9lsZu0f5mkuE3NyjOnVSETWKbW62HadXBl5oOGcH1~R6amjfCh4stvnXd9PfbQ1atcYaO8RngYGHBNBVW8~QUeKva77-i7vTchZno1ONghDAXNO1Yvn7vyBSSxAyud11H2mwclqDAOFRs7Bm6DCHNkFKgog__"
            className="h-[718px] w-full object-cover"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/462e/3ec0/0e74abc5e579f1e5468d06b1b7038083?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExvtZqaMqE8RpJ07IaW-iscShnBKlTo78Ed2rqO59kiqyjnFHsCPWrYLTSkb5lMrdwH~O4dzWBMRvfXAh9wpTTR7IFQLl-pc6bt4SSlKob~H7bnaOhUc0Zi1crAh0AAMbSL~YOlXfgSfdMG3Kz9GQ7M8qVok0gYY~V1DRi4neRe161RHsiCY2OiuxrcE4OuY7ngPPtiUcTX1CSV8b74s1aI5Uh8MXwTNzKnVZLnrOS2Ar2nwqtqwUKqa85iZJ37E3XaJ37jNwAMDy4lcN-AFBYL6W7Fuk~T7OlooEUYqQfRpHg9jBkIqtoAgk1vb7UqtCuU79708uK07z0Oo4rPNYg__"
            className="h-[718px] w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
