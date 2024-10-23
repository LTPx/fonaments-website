"use client";

import { useState } from "react";
import Gallery from "./gallery";
import { Link } from "@/navigation";
import {
  GalleryProjectWp,
  InformationProjectWp,
} from "../_interfaces/wordpress-components";

interface ProjectDetailsProps {
  description_project: string;
  information_project: InformationProjectWp;
  gallery_project: GalleryProjectWp[];
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const { description_project, information_project, gallery_project } = props;
  const btns = ["Reforma", "Obra Nueva", "Rustico"];
  const [selectedOption, setSelectedOption] = useState<string>(btns[0]);

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[28px]">
        <div className="flex flex-col justify-between">
          <div>
            <div className="grid grid-cols-3 border-b border-black border-1 pb-[46px]">
              <div className="col-span-1">
                <p className="text-[20px] leading-[26px]">
                  {information_project.code_project.title}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[20px] leading-[26px]">
                  {information_project.code_project.code}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border-b border-black border-1 pb-[46px]">
              <div className="pt-[10px] col-span-1">
                <p className=" text-[20px] leading-[26px]">
                  {information_project.type_work.title}
                </p>
              </div>
              <div className="pt-[10px] col-span-2">
                <p className="text-[20px] leading-[26px]">
                  {information_project.type_work.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border-b border-black border-1 pb-[46px]">
              <div className="pt-[10px] col-span-1">
                <p className="text-[20px] leading-[26px]">
                  {information_project.location.title}
                </p>
              </div>
              <div className="pt-[10px] col-span-2">
                <p className="text-[20px] leading-[26px]">
                  {information_project.location.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 pb-[46px]">
              <div className="pt-[10px] col-span-1">
                <p className="text-[20px] leading-[26px]">
                  {information_project.built_area.title}
                </p>
              </div>
              <div className="pt-[10px] col-span-2">
                <p className="text-[20px] leading-[26px]">
                  {information_project.built_area.area}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[30px] lg:pt-[0px] flex gap-[14px]">
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
        </div>
        <div>
          <div
            className="text-[16px] leading-[22px] lg:text-[20px] lg:leading-[26px]"
            dangerouslySetInnerHTML={{ __html: description_project }}
          />
        </div>
      </div>
      {gallery_project.length > 0 && (
        <section className="pt-[88px]">
          <Gallery gallery={gallery_project} />
        </section>
      )}
      <section className="pt-[15px] pb-[53px]">
        <div className="flex justify-between">
          <div className="flex gap-[6px] items-center">
            <img className="cursor-pointer" src="/images/icons/left.svg" />
            <p className="text-[20px] leading-[38px] cursor-pointer">
              Anterior
            </p>
          </div>
          <Link href={"/projects"}>
            <p className="underline text-[20px] leading-[38px] cursor-pointer">
              Todos los proyectos
            </p>
          </Link>
          <div className="flex gap-[6px] items-center">
            <p className="text-[20px] leading-[38px] cursor-pointer">
              Siguiente
            </p>
            <img className="cursor-pointer" src="/images/icons/right.svg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
