"use client";

import { useState } from "react";
import { Link } from "@/navigation";
import ProjectCard from "./project-card";
import { WordPressProject } from "../_interfaces/wordpress-project";
import { getUniqueCategories } from "../utils";
import { useTranslations } from "next-intl";

interface ProjectSectionProps {
  projects: WordPressProject[];
}

export function ProjectSection(props: ProjectSectionProps) {
  const { projects } = props;
  const [selectedOption, setSelectedOption] = useState(-1);
  const [filteredProjects, setFilteredProjects] = useState<WordPressProject[]>(projects);
  const categories = getUniqueCategories(projects);
  const t = useTranslations();

  const handleClick = (id: number) => {
    setSelectedOption(id);
    const filterProjects = projects.filter((project)=> {
      const categories = project._embedded["wp:term"].categories;
      return categories.find((category)=> category.id === id);
    });
    const results = id === -1 ? projects : filterProjects;
    setFilteredProjects(results);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full overflow-hidden">
        <div className="flex gap-[14px] lg:gap-[11px] overflow-x-scroll no-scrollbar">
          <button
            onClick={() => handleClick(-1)}
            className={`hover:bg-black hover:text-white hover:rounded-none transition-colors duration-300 ease-in-out font-medium text-[1.125em] leading-[18px] cursor-pointer border border-black h-[32px] px-[15px] ${
              selectedOption === -1
                ? "select-option"
                : "text-black rounded-full"
            } whitespace-nowrap min-w-[120px]`}
          >
            {`${t('projectPage.all')}`}
          </button>
          {categories.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick(option.id)}
              className={`hover:bg-black hover:text-white hover:rounded-none transition-colors duration-300 ease-in-out font-medium text-[1.125em] leading-[18px] cursor-pointer border border-black h-[32px] px-[15px] ${
                selectedOption === option.id
                  ? "select-option"
                  : "text-black rounded-full"
              } whitespace-nowrap`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-[32px] lg:grid-cols-3 lg:gap-y-[20px] lg:gap-x-[15px] pt-[22px] lg:pt-[20px]">
        {filteredProjects.map((item, index) => {
          const { acf } = item;
          const { cover_image_project, hover_image } = acf;
          return (
            <Link href={`/projects/${item.slug}`} key={index}>
              <ProjectCard
                className="h-[456px] xl:h-[600px]"
                title={item.title.rendered}
                image={cover_image_project.sizes.large}
                imageHover={hover_image ? hover_image.sizes.large : ""}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
