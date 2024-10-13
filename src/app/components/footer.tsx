import Link from "next/link";

interface FooterProps {
  address?: string;
  logoFooter?: string;
}

export function Footer(props: FooterProps) {
  const { address, logoFooter } = props;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-body">
      <div className="mx-auto container flex flex-col">
        <label className="lg:text-[20px] lg:leading-[20px] mb-[32px]">
          Nuestras oficinas
        </label>
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="flex flex-col">
            <label className="lg:text-[32px] lg:leading-[38px] mb-[10px]">
              Llucmajor
            </label>
            <hr className="border-t border-black border-1 mb-[10px]" />
            <div className="flex flex-col lg:text-[20px] lg:leading-[26px]">
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
          </div>
          <div className="flex flex-col">
            <label className="lg:text-[32px] lg:leading-[38px] mb-[10px]">
              Santanyí
            </label>
            <hr className="border-t border-black border-1 mb-[10px]" />
            <div className="flex flex-col lg:text-[20px] lg:leading-[26px]">
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
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[20px] pt-[24px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/5479/27dc/fda7eadfe11baba44c94413f4f46f76e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CvxMVWGAVChk2upd7HN2cHEcHYmVJ4qmKMz7Js5ThJNZj8m9I9zC0s0hCstyPgvaSOx53VKlaGQCFUvMc1~kl3d11zqJkbuskCVSEz~NsBCSSqVctd~guFqHZ7DnK~0j-VrZ~GTHf2cvWAhUYCnAlaZG3yhf6Rx2VJFGUbihsF5UDGlDWOR8Lc8tGCa9lsZu0f5mkuE3NyjOnVSETWKbW62HadXBl5oOGcH1~R6amjfCh4stvnXd9PfbQ1atcYaO8RngYGHBNBVW8~QUeKva77-i7vTchZno1ONghDAXNO1Yvn7vyBSSxAyud11H2mwclqDAOFRs7Bm6DCHNkFKgog__"
            className="h-[716px] w-[716px] object-cover"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/462e/3ec0/0e74abc5e579f1e5468d06b1b7038083?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExvtZqaMqE8RpJ07IaW-iscShnBKlTo78Ed2rqO59kiqyjnFHsCPWrYLTSkb5lMrdwH~O4dzWBMRvfXAh9wpTTR7IFQLl-pc6bt4SSlKob~H7bnaOhUc0Zi1crAh0AAMbSL~YOlXfgSfdMG3Kz9GQ7M8qVok0gYY~V1DRi4neRe161RHsiCY2OiuxrcE4OuY7ngPPtiUcTX1CSV8b74s1aI5Uh8MXwTNzKnVZLnrOS2Ar2nwqtqwUKqa85iZJ37E3XaJ37jNwAMDy4lcN-AFBYL6W7Fuk~T7OlooEUYqQfRpHg9jBkIqtoAgk1vb7UqtCuU79708uK07z0Oo4rPNYg__"
            className="h-[716px] w-[716px] object-cover"
          />
        </div>
        <hr className="border-t border-black border-1 mt-[25px] mb-[17px]" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[20px] leading-[20px]">¡Escríbenos!</p>
            <Link
              href="mailto:info@fonamentsarch.com"
              className="underline text-[42px] leading-[45px]"
            >
              info@fonamentsarch.com
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href={'/'} target='_blank' className="underline text-[20px] leading-[26px]">Instagram</Link>
            <Link href={'/'} target='_blank'  className="underline text-[20px] leading-[26px]">LinkedIn</Link>
          </div>
          <div className="flex gap-[22px]">
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
        <hr className="border-t border-black border-1 mt-[30px] mb-[40px]" />
        <div className="pb-[25px]">
          <img src="/images/logo-footer.svg" className="" />
        </div>
      </div>
      <div className="h-[50px] px-[30px] text-white bg-black flex justify-between items-center">
        <p className="font-medium text-[16px] leading-[19.2px]">
          © Fonaments Architecture Studio.
        </p>
        <div className="font-medium flex gap-[5px] text-[16px] leading-[19.2px]">
          <p>Aviso legal |</p>
          <p>Política de cookies |</p>
          <p>Política de privacidad</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
