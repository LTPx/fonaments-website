"use client";

import { useState } from "react";
import Link from "next/link";

interface LinksHeader {
  title: string;
  url: string;
}

interface Props {
  links: LinksHeader[];
}

export function Header(props: Props) {
  const { links } = props;
  const [currentLocale, setCurrentLocale] = useState<string>("en");

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300`}
    >
      <div className="container border-b border-black mx-auto flex items-center justify-between">
        <div className="flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="h-[50px] px-[15px] border-l border-r border-black flex items-center cursor-pointer text-[20px]"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <Link
            href={"/"}
            className="h-[50px] px-[15px] border-r border-black flex items-center cursor-pointer text-[20px]"
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
