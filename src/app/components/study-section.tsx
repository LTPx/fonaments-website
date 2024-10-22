"use client";

import { useState } from "react";
import TeamSection from "./team-section";
import ServiceSections from "./services-section";
import {
  ServicesSectionWp,
  TeamWp,
} from "../_interfaces/wordpress-components";

interface StudySectionProps {
  teamSection: TeamWp;
  services: ServicesSectionWp;
}

export function StudySection(props: StudySectionProps) {
  const { teamSection, services } = props;

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
      {selectedOption === "Equipo" ? (
        <TeamSection
          coverImage={teamSection.cover_Image.url}
          membersTeam={teamSection.members_team}
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
