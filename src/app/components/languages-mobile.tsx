import Link from "next/link";

interface LanguagesMobileProps {
  languages: { name: string; url: string }[];
}

export const LanguagesMobile: React.FC<LanguagesMobileProps> = ({
  languages,
}) => {
  return (
    <div className="flex gap-[10px]">
      {languages.map((language, index) => (
        <Link
          href={language.url}
          className="text-[30px] leading-[41px]"
          key={index}
        >
          {language.name}
        </Link>
      ))}
    </div>
  );
};

export default LanguagesMobile;
