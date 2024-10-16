"use client";

import { useState } from "react";
import TeamSection from "./team-section";
import ServiceSections from "./services-section";

interface ServicesProps {
  title: string;
  description: string;
  imageUrl?: string;
}

interface Props {
  name: string;
  image: string;
  profession: string;
  description: string;
}

interface StudySectionProps {
  membersTeam: Props[];
  services: ServicesProps[];
}

export function StudySection(props: StudySectionProps) {
  const { membersTeam, services } = props;

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
          coverImage={
            "https://s3-alpha-sig.figma.com/img/4774/d9fe/fe31b4fa978a80806395d17feb17d548?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qlxpS1HdETvM~sVX2erptO6ef9yd0te8OOCjos1ImM9bHgwDC8VpeItFlGlkLb1ih8NuN0bijKe0UyzLiuYlfiFyDR2t9UzsO25sqBmq10HwSJbmJnL-fKvlzep1pvY8Q-5DQs-iuXld2CmGQElWpY1xE7l-z2gJKbdQMhCiq-7Jfx5~pSbIktBOKhWUIaFP4G5MFuTY4jC-i9NRO8NblMCTwfw~UwQySXqe79-6tLCOE3CDEn~~OSEwhximMrvdQKhXrQpWhSTRMLYcAtNbZYOAakm4aQLyXul8RPOkpUiwKy4AbN7jSU0dTjFhsRKCtYVJV7n1a9kQV3GhWAhk3w__"
          }
          membersTeam={membersTeam}
        />
      ) : (
        <ServiceSections
          coverImage="https://s3-alpha-sig.figma.com/img/b6bd/b55e/0fe6c65581b4e34bd2452f674619ab79?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pvJyIiJY2bl3Suw~qQc7rI7bmtmK6QegROl3vIt0TVDIo8ONI~kBnjxn9VkUG1nDmqacIJLxkgEUFtsph~4B1NUZpjYkT-8zJmEZtlaorVRov8NIfrYIMGDBeJ89B2OS-45RQutVp4Sazpdq6~Sssed-n9g9KH9ustKbPSfkt4Dy7h7vrsA-yctfETKip1JxSJYKo8zKrwKlsyhhheTAIzFl0OJWDCOrwhNTJuDQWkv-96rf4eVxZdcPejN6qRf8De1szEXFDg5khhgjR1vbCeUNFU5ZP8DMppzeeN4NHpH1ByQRlwsNyRpCrx1fMbHF~n7SmvzD0tqoTOKo~qcEJA__"
          services={services}
        />
      )}
    </div>
  );
}

export default StudySection;
