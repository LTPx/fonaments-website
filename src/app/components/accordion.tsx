"use client";
import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  expanded?: boolean;
  icon?: string;
}

export function Accordion(props: AccordionProps) {
  const { title, children, expanded, icon } = props;
  const [isOpen, setIsOpen] = useState(!!expanded);

  return (
    <div className="border border-t-[#000000]">
      <button
        className={`w-full flex items-center`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <h1>{title}</h1>
        {isOpen ? (
          <p className="font-medium text-[18px] leading-[20px] ml-auto">
            close
          </p>
        ) : (
          <p className="font-medium text-[18px] leading-[20px] ml-auto">
            +info
          </p>
        )}
      </button>
      {isOpen && (
        <div>
          <div
            style={{
              height: isOpen ? "auto" : "0",
            }}
          >
            <div className="pt-[15px] pb-[30px]">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
