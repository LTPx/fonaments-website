"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const AccessibilityOptions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [lightBackground, setLightBackground] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [textSize, setTextSize] = useState(1.0);
  const [textSizeIncreaseCount, setTextSizeIncreaseCount] = useState(0);
  const t = useTranslations();

  const toggleContrast = () => {
    setContrast((prev) => !prev);
    if (!contrast) {
      setGrayscale(false);
      setLightBackground(false);
    }
  };

  const toggleGrayscale = () => {
    setGrayscale((prev) => !prev);
    if (!grayscale) {
      setContrast(false);
      setLightBackground(false);
    }
  };

  const toggleLightBackground = () => {
    setLightBackground((prev) => !prev);
    if (!lightBackground) {
      setContrast(false);
      setGrayscale(false);
    }
  };

  const toggleUnderlineLinks = () => setUnderlineLinks((prev) => !prev);

  const toggleReadableFont = () => {
    setReadableFont((prev) => !prev);
    setContrast(false);
    setGrayscale(false);
    setLightBackground(false);
  };

  const increaseTextSize = () => {
    if (textSizeIncreaseCount < 4) {
      setTextSizeIncreaseCount((prev) => prev + 1);
      setTextSize((prev) => {
        const newSize = Math.min(prev + 0.1, 2.0);
        document.documentElement.style.setProperty(
          "--base-font-size",
          `${newSize}em`
        );
        return newSize;
      });
    }
  };

  const decreaseTextSize = () => {
    setTextSizeIncreaseCount(0);
    setTextSize((prev) => {
      const newSize = Math.max(prev - 0.1, 1.0);
      document.documentElement.style.setProperty(
        "--base-font-size",
        `${newSize}em`
      );
      return newSize;
    });
  };

  const resetAllSettings = () => {
    setContrast(false);
    setGrayscale(false);
    setLightBackground(false);
    setUnderlineLinks(false);
    setReadableFont(false);
    setTextSize(1.0);
    setTextSizeIncreaseCount(0);
    document.documentElement.style.setProperty("--base-font-size", `1em`);
    document.body.classList.remove(
      "high-contrast",
      "grayscale-custom",
      "light-background",
      "underline-links",
      "readable-font"
    );
  };

  useEffect(() => {
    document.body.classList.toggle("high-contrast", contrast);
    document.body.classList.toggle("grayscale-custom", grayscale);
    document.body.classList.toggle("light-background", lightBackground);
    document.body.classList.toggle("underline-links", underlineLinks);
    document.body.classList.toggle("readable-font", readableFont);
    document.body.style.fontSize = `${textSize}em`;
  }, [
    contrast,
    grayscale,
    lightBackground,
    underlineLinks,
    readableFont,
    textSize,
  ]);

  const handleMenuClick = (e: any) => e.stopPropagation();

  const buttonOptions = [
    { label: `${t("accessibility.increase-text")}`, onClick: increaseTextSize },
    { label: `${t("accessibility.reduce-text")}`, onClick: decreaseTextSize },
    {
      label: `${t("accessibility.high-contrast")}`,
      onClick: toggleContrast,
      active: contrast,
    },
    {
      label: `${t("accessibility.gray-scale")}`,
      onClick: toggleGrayscale,
      active: grayscale,
    },
    {
      label: `${t("accessibility.light-background")}`,
      onClick: toggleLightBackground,
      active: lightBackground,
    },
    {
      label: `${t("accessibility.underline-links")}`,
      onClick: toggleUnderlineLinks,
      active: underlineLinks,
    },
    // {
    //   label: "Fuente Legible",
    //   onClick: toggleReadableFont,
    //   active: readableFont,
    // },
    {
      label: `${t("accessibility.reset")}`,
      onClick: resetAllSettings,
      style: "text-red-600",
    },
  ];

  return (
    <div className="accessibility-container">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`accessibility-icon ${menuOpen ? "icon-shift" : ""}`}
      >
        <img
          src="/images/icons/accessibility-logo.svg"
          className="w-[38.77px] h-[38.77px] invert-custom"
          alt="Icono de accesibilidad"
        />
      </button>

      <div
        className={`w-[200px] bg-white accessibility-options ${
          menuOpen ? "open" : ""
        }`}
        onClick={handleMenuClick}
      >
        <h3 className="text-[18px] font-medium pl-[10px] title-contrast">
          {`${t("accessibility.accessibility-title")}`}
        </h3>
        <div className="flex flex-col items-start text-start gap-2 mb-4">
          {buttonOptions.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={`w-full pl-[10px] hover:bg-black hover:text-white font-regular text-[15px] text-start 
                ${button.active ? "active-option" : ""} ${button.style || ""}`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessibilityOptions;
