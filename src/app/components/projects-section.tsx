"use client";

import { useState } from "react";
import { WordPressPost } from "../_interfaces/wordpress";
import { Link } from "@/navigation";
import ProjectCard from "./project-card";

interface Props {
  imageUrl: string;
  title: string;
}

interface ProjectSectionProps {
  options: string[];
  projects: WordPressPost[];
}

export function ProjectSection(props: ProjectSectionProps) {
  const { options, projects } = props;
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full overflow-hidden">
        <div className="flex gap-[14px] lg:gap-[11px] overflow-x-scroll no-scrollbar">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick(option)}
              className={`hover:bg-black hover:text-white hover:rounded-none transition-colors duration-300 ease-in-out font-medium text-[18px] leading-[18px] cursor-pointer border border-[#000000] h-[32px] px-[15px] ${
                selectedOption === option
                  ? "bg-black text-white rounded-none"
                  : "text-black rounded-full"
              } whitespace-nowrap min-w-[120px]`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-[32px] lg:grid-cols-3 lg:gap-y-[20px] lg:gap-x-[15px] pt-[22px] lg:pt-[20px]">
        {projects.map((item, index) => (
          <Link href={`/projects/${item.slug}`} key={index}>
            <ProjectCard
              className="h-[456px] xl:h-[600px]"
              title={item.title.rendered}
              image={item._embedded["wp:featuredmedia"][0].source_url}
              imageHover={
                "https://s3-alpha-sig.figma.com/img/b0ec/1da8/205f0bec1ed743c9339f5dc9d99bb8e9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NhcIzXBMUi8I10tWwPeCV-7SnXiEEWlil1kByWeJwAvW6Go8OdGINKhq6DnFb6vajTT~~yI0yXMVTDdrnMm~rQXzpFjt603UHXNsTbSXmuv~NZoFDVb9NtyL0~btkFw9iOgzGZzP2OMeh60V49-XYVIq98MCKrlyQcbyr~jGAEPWreinUczNftiiTrPawOyoKxaHSB~xFjZdcqixBH1aClRSH~p0YRjumHiWJw7MLHAeLAwpAcvQcNF-O-7AFePVS1YawDQ731qqI33Wr9XtRXgUHzbYMzHbOv7cdRRudYZwoNLbqln9us9xmsXo3j7GwpLZSAKZF7S6LUwynBfb8g__"
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
