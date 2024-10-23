"use client";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  expanded?: boolean;
  icon?: string;
  image?: string;
}

export function Accordion(props: AccordionProps) {
  const { title, children, expanded, icon, image } = props;
  const [isOpen, setIsOpen] = useState(!!expanded);
  const [isHovered, setIsHovered] = useState(false);
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
        className="w-full flex items-center relative z-10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-[42px] leading-[45px] lg:text-[80px] lg:leading-[130px] py-[20px] lg:py-[0px] text-start">
          {title}
        </h1>
        {toggleContent}
      </button>

      {!isOpen && image && !isMobile && (
        <div
          className={`absolute top-0 left-0 w-full h-auto z-20 transition-opacity duration-500 ease-in-out transform ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
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
