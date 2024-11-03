"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  const [isLanguagePopupVisible, setIsLanguagePopupVisible] = useState(false);

  const toggleLanguagePopup = () => {
    setIsLanguagePopupVisible(!isLanguagePopupVisible);
  };

  const handleLanguageChange = (language: string) => {
    onLanguageChange(language);
    setIsLanguagePopupVisible(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleLanguagePopup}
        className="font-medium h-[40px] pl-[35px] pr-[30px] flex items-center cursor-pointer text-[18px] leading-[26px]"
      >
        {selectedLanguage}
      </button>
      {isLanguagePopupVisible && (
        <div className="absolute top-full right-0 mt-1 w-[100px] bg-white border border-gray-300 shadow-lg rounded">
          <div className="flex flex-col">
            <Link
              href={"/es"}
              className="font-medium w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => handleLanguageChange("ESP")}
            >
              ESP
            </Link>
            <Link
              href={"/en"}
              className="font-medium w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => handleLanguageChange("ENG")}
            >
              ENG
            </Link>
            <Link
              href={"/de"}
              className="font-medium w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => handleLanguageChange("DEU")}
            >
              DEU
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
