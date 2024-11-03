"use client";


import { useState, useEffect } from "react";
import LanguageSelector from "./selector-languages";
import { Link } from "@/navigation";

interface LinksHeader {
  title: string;
  url: string;
}

interface Props {
  links: LinksHeader[];
}

export function Header(props: Props) {
  const { links } = props;
  const [selectedLink, setSelectedLink] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState("ESP");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const handleClick = (url: string) => {
    setSelectedLink(url);
    localStorage.setItem("selectedLink", url);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  };

  return (
    <header className={`sticky hidden lg:block top-0 z-[1000] bg-white transition-all duration-300`}>
      <div className="border-b border-black mx-auto flex items-center justify-between">
        <div className="flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`hover:bg-black hover:text-white hover:rounded-none transition-colors duration-300 ease-in-out h-[40px] px-[30px] border-r border-black flex items-center justify-center cursor-pointer text-[18px] leading-[20px] first:border-l-0 ${
                selectedLink === link.url ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => handleClick(link.url)}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex lg:flex lg:flex-1 lg:justify-end items-center">
          <Link
            href={"/"}
            className="h-[40px] pr-[26px] border-r border-black flex items-center cursor-pointer text-[18px] leading-[26px]"
          >
            Local Architecture Studio.
          </Link>
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
