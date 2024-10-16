"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface FooterProps {
  address?: string;
  logoFooter?: string;
}

export function Footer(props: FooterProps) {
  const { address, logoFooter } = props;
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const btns = ["Llucmajor", "Santanyí"];
  const [selectedOption, setSelectedOption] = useState<string>(btns[0]);

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <footer className="bg-body">
      <div className="mx-auto container flex flex-col">
        {isMobile && (
          <div className="block lg:hidden pb-[30px]">
            <p className="font-medium text-[20px] leading-[20px] pb-[31px]">
              Nuestras oficinas
            </p>
            <div className="flex gap-[17px]">
              {btns.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(option)}
                  className={`font-medium text-[18px] leading-[26px] cursor-pointer border border-[#000000] h-[32px] px-[15px] ${
                    selectedOption === option
                      ? "bg-black text-white rounded-none"
                      : "text-black rounded-full"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {!isMobile && pathname !== "/es/contact" && (
          <label className="hidden lg:block lg:text-[20px] lg:leading-[20px] mb-[32px]">
            Nuestras oficinas
          </label>
        )}

        <div
          className={`grid ${
            isMobile ? "grid-cols-1" : "grid-cols-2"
          } gap-[20px] ${!isMobile && pathname !== "/es" ? "pb-[20px]" : ""}`}
        >
          {(selectedOption === "Llucmajor" || !isMobile) && (
            <div className="flex flex-col">
              <label className="hidden lg:block lg:text-[32px] lg:leading-[38px] mb-[10px]">
                Llucmajor
              </label>
              <hr className="border-t border-black border-1 mb-[10px]" />
              <div className="flex flex-col text-[20px] leading-[26px]">
                <p>c/ Bisbe Taixequet, 110</p>
                <p>07620 Llucmajor</p>
                <p>T. (+34) 971 660 823</p>
                <Link
                  className="font-regular underline"
                  target="_blank"
                  href="/https://www.google.com/maps/place/C.+del+Obispo+Taxaquet,+110,+07620+Llucmajor,+Illes+Balears,+Espa%C3%B1a/@39.487999,2.8882161,17z/data=!3m1!4b1!4m6!3m5!1s0x1297bb0619c587b5:0x366ce29d583e0cb1!8m2!3d39.487999!4d2.8882161!16s%2Fg%2F11c17433lc?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  Ver localización
                </Link>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/5479/27dc/fda7eadfe11baba44c94413f4f46f76e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CvxMVWGAVChk2upd7HN2cHEcHYmVJ4qmKMz7Js5ThJNZj8m9I9zC0s0hCstyPgvaSOx53VKlaGQCFUvMc1~kl3d11zqJkbuskCVSEz~NsBCSSqVctd~guFqHZ7DnK~0j-VrZ~GTHf2cvWAhUYCnAlaZG3yhf6Rx2VJFGUbihsF5UDGlDWOR8Lc8tGCa9lsZu0f5mkuE3NyjOnVSETWKbW62HadXBl5oOGcH1~R6amjfCh4stvnXd9PfbQ1atcYaO8RngYGHBNBVW8~QUeKva77-i7vTchZno1ONghDAXNO1Yvn7vyBSSxAyud11H2mwclqDAOFRs7Bm6DCHNkFKgog__"
                className="lg:hidden pt-[20px] h-[450px] w-full object-cover"
              />
            </div>
          )}

          {(selectedOption === "Santanyí" || !isMobile) && (
            <div className="flex flex-col">
              <label className="hidden lg:block lg:text-[32px] lg:leading-[38px] mb-[10px]">
                Santanyí
              </label>
              <hr className="border-t border-black border-1 mb-[10px]" />
              <div className="flex flex-col text-[20px] leading-[26px]">
                <p>c/ Bisbe Taixequet, 110</p>
                <p>07620 Llucmajor</p>
                <p>T. (+34) 971 660 823</p>
                <Link
                  className="font-regular underline"
                  target="_blank"
                  href="/https://www.google.com/maps/place/C.+del+Obispo+Taxaquet,+110,+07620+Llucmajor,+Illes+Balears,+Espa%C3%B1a/@39.487999,2.8882161,17z/data=!3m1!4b1!4m6!3m5!1s0x1297bb0619c587b5:0x366ce29d583e0cb1!8m2!3d39.487999!4d2.8882161!16s%2Fg%2F11c17433lc?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  Ver localización
                </Link>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/462e/3ec0/0e74abc5e579f1e5468d06b1b7038083?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExvtZqaMqE8RpJ07IaW-iscShnBKlTo78Ed2rqO59kiqyjnFHsCPWrYLTSkb5lMrdwH~O4dzWBMRvfXAh9wpTTR7IFQLl-pc6bt4SSlKob~H7bnaOhUc0Zi1crAh0AAMbSL~YOlXfgSfdMG3Kz9GQ7M8qVok0gYY~V1DRi4neRe161RHsiCY2OiuxrcE4OuY7ngPPtiUcTX1CSV8b74s1aI5Uh8MXwTNzKnVZLnrOS2Ar2nwqtqwUKqa85iZJ37E3XaJ37jNwAMDy4lcN-AFBYL6W7Fuk~T7OlooEUYqQfRpHg9jBkIqtoAgk1vb7UqtCuU79708uK07z0Oo4rPNYg__"
                className="lg:hidden pt-[20px] h-[450px] w-full object-cover"
              />
            </div>
          )}
        </div>

        {pathname === "/es" && !isMobile && (
          <div className="hidden lg:grid lg:grid-cols-2 gap-[20px] pt-[24px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/5479/27dc/fda7eadfe11baba44c94413f4f46f76e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CvxMVWGAVChk2upd7HN2cHEcHYmVJ4qmKMz7Js5ThJNZj8m9I9zC0s0hCstyPgvaSOx53VKlaGQCFUvMc1~kl3d11zqJkbuskCVSEz~NsBCSSqVctd~guFqHZ7DnK~0j-VrZ~GTHf2cvWAhUYCnAlaZG3yhf6Rx2VJFGUbihsF5UDGlDWOR8Lc8tGCa9lsZu0f5mkuE3NyjOnVSETWKbW62HadXBl5oOGcH1~R6amjfCh4stvnXd9PfbQ1atcYaO8RngYGHBNBVW8~QUeKva77-i7vTchZno1ONghDAXNO1Yvn7vyBSSxAyud11H2mwclqDAOFRs7Bm6DCHNkFKgog__"
              className="h-[716px] w-full object-cover"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/462e/3ec0/0e74abc5e579f1e5468d06b1b7038083?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExvtZqaMqE8RpJ07IaW-iscShnBKlTo78Ed2rqO59kiqyjnFHsCPWrYLTSkb5lMrdwH~O4dzWBMRvfXAh9wpTTR7IFQLl-pc6bt4SSlKob~H7bnaOhUc0Zi1crAh0AAMbSL~YOlXfgSfdMG3Kz9GQ7M8qVok0gYY~V1DRi4neRe161RHsiCY2OiuxrcE4OuY7ngPPtiUcTX1CSV8b74s1aI5Uh8MXwTNzKnVZLnrOS2Ar2nwqtqwUKqa85iZJ37E3XaJ37jNwAMDy4lcN-AFBYL6W7Fuk~T7OlooEUYqQfRpHg9jBkIqtoAgk1vb7UqtCuU79708uK07z0Oo4rPNYg__"
              className="h-[716px] w-full object-cover"
            />
          </div>
        )}

        <hr className="hidden lg:block border-t border-black border-1 mt-[25px] mb-[17px]" />
        <div className="flex flex-col lg:flex-row lg:justify-between pt-[44px] lg:pt-[0px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[20px] leading-[20px]">¡Escríbenos!</p>
            <Link
              href="mailto:info@fonamentsarch.com"
              className="lg:underline text-[30px] leading-[32px] lg:text-[42px] lg:leading-[45px]"
            >
              info@fonamentsarch.com
            </Link>
          </div>
          <div className="flex gap-[10px] lg:gap-[0px] lg:flex-col">
            <Link
              href={"/"}
              target="_blank"
              className="lg:underline text-[30px] leading-[32px] lg:text-[20px] lg:leading-[26px]"
            >
              Instagram
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="lg:underline text-[30px] leading-[32px] lg:text-[20px] lg:leading-[26px]"
            >
              LinkedIn
            </Link>
          </div>
          <hr className="block lg:hidden border-t border-black border-1 mt-[22px] mb-[29px]" />
          <div className="flex gap-[22px] justify-between lg:justify-start">
            <img
              src="/images/sponsors-footer.svg"
              className="w-[298px] h-[42px]"
            />
            <img
              src="/images/person-footer.svg"
              className="w-[38.77px] h-[38.77px]"
            />
          </div>
        </div>
        <hr className="border-t border-black border-1 mt-[30px] mb-[35px] lg:mb-[40px]" />
        <div className="pb-[12px] lg:pb-[25px]">
          <img src="/images/logo-footer.svg" />
        </div>
      </div>

      <div className="h-[50px] container text-white bg-black flex flex-col items-start justify-center lg:flex-row lg:justify-between lg:items-center">
        <p className="font-medium text-[12px] leading-[14px] lg:text-[16px] lg:leading-[19.2px]">
          © Fonaments Architecture Studio.
        </p>
        <div className="font-medium flex gap-[5px] text-[12px] leading-[14px] lg:text-[16px] lg:leading-[19.2px]">
          <p>Aviso legal |</p>
          <p>Política de cookies |</p>
          <p>Política de privacidad</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
