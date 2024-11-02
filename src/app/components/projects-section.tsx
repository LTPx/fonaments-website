"use client";

import { useState, useEffect } from "react";
import { WordPressPost } from "../_interfaces/wordpress";
import { Link } from "@/navigation";
import ProjectCard from "./project-card";
import { WordPressProject } from "../_interfaces/wordpress-project";

interface ProjectSectionProps {
  options: string[];
  projects: WordPressProject[];
}

export function ProjectSection(props: ProjectSectionProps) {
  const { options, projects } = props;
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [filteredProjects, setFilteredProjects] = useState<WordPressPost[]>([]);

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  // useEffect(() => {
  //   const filterProjects = () => {
  //     if (selectedOption === "Todos") {
  //       return projects;
  //     }

  //     // Filtramos los proyectos y recogemos los nombres encontrados
  //     const filteredProjects = projects.filter(post => {
  //       return (
  //         post._embedded &&
  //         post._embedded["wp:term"] &&
  //         post._embedded["wp:term"].some(termGroup =>
  //           termGroup.some(term => term.name === selectedOption)
  //         )
  //       );
  //     });

  //     // Extraemos los nombres de los términos que coincidieron con selectedOption
  //     const matchedNames = filteredProjects.flatMap(post =>
  //       post._embedded["wp:term"].flatMap(termGroup =>
  //         termGroup
  //           .filter(term => term.name === selectedOption)
  //           .map(term => term.name)
  //       )
  //     );

  //     // Imprimimos los nombres en la consola
  //     console.log("Nombres encontrados:", matchedNames);

  //     return filteredProjects;
  //   };

  //   setFilteredProjects(filterProjects());
  // }, [selectedOption, projects]);

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
        {projects.map((item, index) => {
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
