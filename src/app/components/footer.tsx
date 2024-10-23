"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  ContactFooterWp,
  OfficesFootertWp,
} from "../_interfaces/wordpress-components";

interface FooterProps {
  footer?: OfficesFootertWp;
  contact_information: ContactFooterWp;
}

export function Footer(props: FooterProps) {
  const { contact_information, footer } = props;
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
                {footer?.first_office.title}
              </label>
              <hr className="border-t border-black border-1 mb-[10px]" />
              <div className="flex flex-col text-[20px] leading-[26px]">
                <p className="w-[185px]">{footer?.first_office.address}</p>
                <Link href={`tel:${footer?.first_office.phone}`}>
                  <p>{footer?.first_office.phone}</p>
                </Link>
                <Link
                  className="font-regular underline"
                  target="_blank"
                  href={footer?.first_office.link_location || "/"}
                >
                  Ver localización
                </Link>
              </div>
              <img
                src={footer?.first_office.image.url}
                className="lg:hidden pt-[20px] h-[450px] w-full object-cover"
              />
            </div>
          )}

          {(selectedOption === "Santanyí" || !isMobile) && (
            <div className="flex flex-col">
              <label className="hidden lg:block lg:text-[32px] lg:leading-[38px] mb-[10px]">
                {footer?.second_office.title}
              </label>
              <hr className="border-t border-black border-1 mb-[10px]" />
              <div className="flex flex-col text-[20px] leading-[26px]">
                <p className="w-[185px]">{footer?.second_office.address}</p>
                <Link href={`tel:${footer?.second_office.phone}`}>
                  <p>{footer?.second_office.phone}</p>
                </Link>
                <Link
                  className="font-regular underline"
                  target="_blank"
                  href={footer?.second_office.link_location || "/"}
                >
                  Ver localización
                </Link>
              </div>
              <img
                src={footer?.second_office.image.url}
                className="lg:hidden pt-[20px] h-[450px] w-full object-cover"
              />
            </div>
          )}
        </div>

        {pathname === "/es" && !isMobile && (
          <div className="hidden lg:grid lg:grid-cols-2 gap-[20px] pt-[24px]">
            <img
              src={footer?.first_office.image.url}
              className="h-[716px] w-full object-cover"
            />
            <img
              src={footer?.second_office.image.url}
              className="h-[716px] w-full object-cover"
            />
          </div>
        )}

        <hr className="hidden lg:block border-t border-black border-1 mt-[25px] mb-[17px]" />
        <div className="flex flex-col lg:flex-row lg:justify-between pt-[44px] lg:pt-[0px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[20px] leading-[20px]">¡Escríbenos!</p>
            <Link
              href={`mailto:${contact_information.email}`}
              className="lg:underline text-[30px] leading-[32px] lg:text-[42px] lg:leading-[45px]"
            >
              {contact_information.email}
            </Link>
          </div>
          <div className="flex gap-[10px] lg:gap-[0px] lg:flex-col">
            <Link
              href={contact_information.link_instagram}
              target="_blank"
              className="lg:underline text-[30px] leading-[32px] lg:text-[20px] lg:leading-[26px]"
            >
              Instagram
            </Link>
            <Link
              href={contact_information.link_linkedIn}
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
