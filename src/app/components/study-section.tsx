"use client";

import { useState } from "react";
import TeamSection from "./team-section";
import ServiceSections from "./services-section";
import {
  GalleryProjectWp,
  ServicesSectionWp,
  TeamWp,
} from "../_interfaces/wordpress-components";

interface StudySectionProps {
  teamSection: TeamWp;
  services: ServicesSectionWp;
  gallery: GalleryProjectWp[];
}

export function StudySection(props: StudySectionProps) {
  const { teamSection, services, gallery } = props;

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  const btns = ["Equipo", "Servicios"];
  const [selectedOption, setSelectedOption] = useState<string>(btns[0]);

  return (
    <div className="flex flex-col">
      <div className="flex gap-[10px] pb-[22px] lg:pb-[20px]">
        {btns.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className={`hover:bg-black hover:text-white hover:rounded-none transition-colors duration-300 ease-in-out font-medium text-[18px] leading-[18px] cursor-pointer border border-[#000000] h-[32px] px-[15px] ${
              selectedOption === option
                ? "bg-black text-white rounded-none"
                : "text-black rounded-full"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption === "Equipo" ? (
        <TeamSection
          coverImage={teamSection.image_cover.url}
          membersTeam={teamSection.members_team}
          gallery={gallery}
        />
      ) : (
        <ServiceSections
          coverImage={services.cover_image.url}
          services={services.services}
        />
      )}
    </div>
  );
}

export default StudySection;
