"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import TeamSection from "./team-section";
import ServiceSections from "./services-section";
import {
  GalleryProjectWp,
  InformationPageWp,
  ServicesSectionWp,
  TeamWp,
} from "../_interfaces/wordpress-components";
import TruncatedText from "./truncated-text";

interface StudySectionProps {
  teamSection: TeamWp;
  services: ServicesSectionWp;
  gallery: GalleryProjectWp[];
  information_section: InformationPageWp;
}

export function StudySection(props: StudySectionProps) {
  const { teamSection, services, gallery, information_section } = props;
  
  const t = useTranslations("studioPage");

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);
    if (hash === "#services" || params.get("section") === "services") {
      setSelectedOption(t("btn-services"));
    }
  }, []);

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  const btns = [t("btn-team"), t("btn-services")];
  const [selectedOption, setSelectedOption] = useState<string>(btns[0]);

  return (
    <div className="flex flex-col">
      <section className="flex flex-col lg:gap-[20px] lg:flex-row lg:justify-between">
        <h1 className="font-regular pt-[4px] lg:pt-[0px]">
          {selectedOption === t("btn-team")
            ? information_section.study_section.title
            : information_section.service_section.title}
        </h1>
        <div className="pt-[14px] lg:pt-[37px]">
          <TruncatedText
            className="lg:w-[550px] xl:w-[803px] text-[16px] leading-[22px] lg:text-[26px] lg:leading-[32px]"
            content={
              selectedOption === t("btn-team")
                ? information_section.study_section.description
                : information_section.service_section.description
            }
          />
        </div>
      </section>
      <div className="pt-[50px] lg:pt-[90px] flex gap-[10px] pb-[22px] lg:pb-[20px]">
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
      {selectedOption === t("btn-team") ? (
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
