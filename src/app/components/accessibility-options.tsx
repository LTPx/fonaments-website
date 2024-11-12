"use client";
import { useState, useEffect } from "react";

const AccessibilityOptions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  const [contrast, setContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [lightBackground, setLightBackground] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  const changeFontSize = (size: string) => {
    setFontSize(size);
  };

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

  const toggleUnderlineLinks = () => {
    setUnderlineLinks((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("high-contrast", contrast);
    document.body.classList.toggle("grayscale-custom", grayscale);
    document.body.classList.toggle("light-background", lightBackground);
    document.body.classList.toggle("underline-links", underlineLinks);
  }, [contrast, grayscale, lightBackground, underlineLinks]);

  const handleMenuClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className="accessibility-container">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`accessibility-icon ${menuOpen ? "icon-shift" : ""}`}
      >
        <img
          src="/images/person-footer.svg"
          className="w-[38.77px] h-[38.77px]"
          alt="Icono de accesibilidad"
        />
      </button>

      <div
        className={`w-[200px] bg-white accessibility-options ${
          menuOpen ? "open" : ""
        }`}
        onClick={handleMenuClick}
      >
        <h3>Accesibilidad</h3>
        <div className="flex flex-col items-start text-start gap-2 mb-4">
          <button onClick={toggleContrast} className="text-start">
            Alto Contraste
          </button>
          <button onClick={toggleGrayscale} className="text-start">
            Escala de Grises
          </button>
          <button onClick={toggleLightBackground} className="text-start">
            Fondo Claro
          </button>
          <button onClick={toggleUnderlineLinks} className="text-start">
            Subrayar Enlaces
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityOptions;
