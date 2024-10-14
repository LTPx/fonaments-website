"use client";

import { useState } from "react";

interface Props {
  imageUrl: string;
  title: string;
}

interface ProjectSectionProps {
  options: string[];
  projects: Props[];
}

export function ProjectSection(props: ProjectSectionProps) {
  const { options, projects } = props;
  const [selectedOption, setSelectedOption] = useState<string>(options[0]); 

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-[11px]">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)} 
            className={`font-medium text-[18px] leading-[18px] cursor-pointer border border-[#000000] h-[32px] px-[15px] ${
              selectedOption === option
                ? "bg-black text-white rounded-none" 
                : "text-black rounded-full" 
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-y-[20px] gap-x-[15px] pt-[20px]">
        {projects.map((item, index) => (
          <div key={index}>
            <img
              src={item.imageUrl}
              className="h-[600px] object-cover w-full"
            />
            <p className="font-medium text-[14px] leading-[26px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
