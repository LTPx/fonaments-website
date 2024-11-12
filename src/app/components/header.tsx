"use client";

import { Link } from "@/navigation";
import { usePathname } from '@/navigation'
import LanguageSelector from "./selector-languages";

interface LinksHeader {
  title: string;
  url: string;
}

interface Props {
  links: LinksHeader[];
}

export function Header(props: Props) {
  const { links } = props;
  const currentPath = usePathname();
  const currentSlug = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  const isProjectRoute = /^\/projects\/.+$/.test(currentPath);
  const linksSelector = {
    es: isProjectRoute ? `/es/` : `/es/${currentSlug}`,
    en: isProjectRoute ? `/en/` : `/en/${currentSlug}`,
    de: isProjectRoute ? `/de/` : `/de/${currentSlug}`,
  }
  console.log('linksSelector: ', linksSelector);

  return (
    <header className={`sticky hidden lg:block top-0 z-[1000] bg-white dark:bg-white high-contrast:bg-white transition-all duration-300`}>
      <div className="border-b border-black mx-auto flex items-center justify-between">
        <div className="flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`hover:bg-black hover:text-white hover:rounded-none transition-colors duration-300 ease-in-out h-[40px] px-[30px] border-r border-black flex items-center justify-center cursor-pointer text-[18px] leading-[20px] first:border-l-0 ${
                 currentPath === link.url ? "bg-black text-white" : "text-black"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex lg:flex lg:flex-1 lg:justify-end items-center">
          <Link
            href={"/"}
            className="h-[40px] pr-[26px] border-r border-black flex items-center cursor-pointer text-[18px] leading-[26px]"
          >
            Local Architecture Studio.
          </Link>
          <LanguageSelector
            urlsTranslate={linksSelector}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
