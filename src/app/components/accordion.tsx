"use client";
import { useEffect, useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  expanded?: boolean;
  icon?: string;
}

export function Accordion(props: AccordionProps) {
  const { title, children, expanded, icon } = props;
  const [isOpen, setIsOpen] = useState(!!expanded);
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
    <div className="border border-t-[#000000] last:border-b-[#000000]">
      <button
        className={`w-full flex items-center`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <h1 className="text-[42px] leading-[45px] lg:text-[80px] lg:leading-[130px] py-[20px] lg:py-[0px] text-start">{title}</h1>
        {toggleContent}
      </button>
      {isOpen && (
        <div>
          <div
            style={{
              height: isOpen ? "auto" : "0",
            }}
          >
            <div className="lg:pt-[15px] pb-[20px] lg:pb-[30px]">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
