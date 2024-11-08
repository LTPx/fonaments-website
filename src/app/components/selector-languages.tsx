"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  const [isLanguagePopupVisible, setIsLanguagePopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const toggleLanguagePopup = () => {
    setIsLanguagePopupVisible(!isLanguagePopupVisible);
  };

  const handleLanguageChange = (language: string) => {
    onLanguageChange(language);
    setIsLanguagePopupVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsLanguagePopupVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "ESP", label: "ESP", href: "/es" },
    { code: "ENG", label: "ENG", href: "/en" },
    { code: "DEU", label: "DEU", href: "/de" },
  ];

  const otherLanguages = languages.filter(
    (language) => language.code !== selectedLanguage
  );

  return (
    <div className="relative" ref={popupRef}>
      <button
        onClick={toggleLanguagePopup}
        style={{ fontWeight: "400" }}
        className="font-medium h-[40px] pl-[35px] pr-[30px] flex items-center cursor-pointer text-[18px] leading-[26px]"
      >
        {selectedLanguage}
      </button>
      {isLanguagePopupVisible && (
        <div className="absolute top-full right-0 bg-white border-t border-black">
          <div className="flex flex-col">
            {otherLanguages.map((language, index) => (
              <Link
                key={language.code}
                href={language.href}
                className={`h-[40px] pl-[35px] pr-[30px] font-medium flex items-center cursor-pointer text-[18px] leading-[26px] text-center  hover:bg-black hover:text-white ${
                  index === otherLanguages.length - 1
                    ? "border-t border-black"
                    : ""
                }`}
                onClick={() => handleLanguageChange(language.code)}
              >
                {language.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
