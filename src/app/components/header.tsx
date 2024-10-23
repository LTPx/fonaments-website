"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const savedLink = localStorage.getItem("selectedLink");
    if (savedLink) {
      setSelectedLink(savedLink);
    }
  }, []);

  const handleClick = (url: string) => {
    setSelectedLink(url);
    localStorage.setItem("selectedLink", url);
  };

  return (
    <header
      className={`sticky hidden lg:block top-0 z-[1000] bg-white transition-all duration-300`}
    >
      <div className="border-b border-black mx-auto flex items-center justify-between">
        <div className="flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`h-[50px] px-[30px] border-r border-black flex items-center justify-center cursor-pointer text-[20px]  first:border-l-0 ${
                selectedLink === link.url
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleClick(link.url)}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <Link
            href={"/"}
            className="h-[50px] pr-[26px] border-r border-black flex items-center cursor-pointer text-[20px]"
          >
            Local Architecture Studio.
          </Link>
          <Link
            href={"/"}
            className="h-[50px] px-[30px] flex items-center cursor-pointer text-[20px]"
          >
            ESP
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
