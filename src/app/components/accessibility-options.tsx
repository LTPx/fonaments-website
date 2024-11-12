"use client";
import { useState, useEffect } from "react";

const AccessibilityOptions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [lightBackground, setLightBackground] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [textSize, setTextSize] = useState(1.0);

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

  const toggleReadableFont = () => {
    setReadableFont((prev) => !prev);
    setContrast(false);
    setGrayscale(false);
    setLightBackground(false);
  };

  const increaseTextSize = () => {
    setTextSize((prev) => {
      const newSize = Math.min(prev + 0.1, 2.0);
      document.documentElement.style.setProperty("--base-font-size", `${newSize}em`);
      return newSize;
    });
  };

  const decreaseTextSize = () => {
    setTextSize((prev) => {
      const newSize = Math.max(prev - 0.1, 0.5);
      document.documentElement.style.setProperty("--base-font-size", `${newSize}em`);
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
  }, [contrast, grayscale, lightBackground, underlineLinks, readableFont, textSize]);

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
          <button onClick={toggleReadableFont} className="text-start">
            Fuente Legible
          </button>
          <button onClick={increaseTextSize} className="text-start">
            Aumentar Tamaño de Texto
          </button>
          <button onClick={decreaseTextSize} className="text-start">
            Reducir Tamaño de Texto
          </button>
          <button onClick={resetAllSettings} className="text-start text-red-600">
            Restablecer Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityOptions;
