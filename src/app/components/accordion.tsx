"use client";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  expanded?: boolean;
  icon?: string;
  image?: string;
  className?: string;
}

export function Accordion(props: AccordionProps) {
  const { title, children, expanded, icon, image, className } = props;
  const [isOpen, setIsOpen] = useState(!!expanded);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsXL(window.innerWidth >= 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleContent = isOpen ? (
    isMobile ? (
      <img
        className="ml-auto cursor-pointer w-[20px]"
        src="/images/icons/close.svg"
      />
    ) : (
      <p className="font-medium text-[18px] leading-[20px] ml-auto">close</p>
    )
  ) : isMobile ? (
    <img
      className="ml-auto cursor-pointer w-[20px]"
      src="/images/icons/arrow.svg"
    />
  ) : (
    <p className="font-medium text-[18px] leading-[20px] ml-auto">+info</p>
  );

  return (
    <div className="relative border border-t-[#000000] last:border-b-[#000000]">
      <button
        className={`w-full flex items-center relative ${className}`}
        style={{
          position: "relative",
          transitionProperty: "opacity, transform",
        }}
        // className="w-full flex items-center relative z-40"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1
          className="tracking-[-0.01em] font-regular text-[42px] leading-[45px] lg:text-[80px] lg:leading-[130px] py-[20px] lg:py-[0px] text-start"
          style={{ letterSpacing: "-0.01em" }}
        >
          {title}
        </h1>
        {toggleContent}
      </button>

      {!isOpen && image && !isMobile && isXL && (
        <div
          className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-500 ease-in-out transform ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            position: "absolute",
            zIndex: 4,
            transitionProperty: "opacity, transform",
          }}
        >
          <img
            src={image}
            className="object-cover h-[200px] md:h-[400px] lg:h-[464px] w-[478px] mx-auto"
            alt={`Imagen de ${title}`}
            style={{ position: "absolute", top: "-150%", right: "6%" }}
          />
        </div>
      )}

      <AnimateHeight duration={300} height={isOpen ? "auto" : 0}>
        <div className="lg:pt-[15px] pb-[20px] lg:pb-[30px]">{children}</div>
      </AnimateHeight>
    </div>
  );
}

export default Accordion;
