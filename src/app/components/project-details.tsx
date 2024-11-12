"use client";

import { useState } from "react";
import Gallery from "./gallery";
import { Link } from "@/navigation";
import {
  GalleryProjectWp,
  InformationProjectWp,
} from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";

interface ProjectDetailsProps {
  description_project: string;
  information_project: InformationProjectWp;
  gallery_project: GalleryProjectWp[];
  prevProject: { slug: string } | null;
  nextProject: { slug: string } | null;
  allCategories: string[];
  currentCategories: { id: number; name: string; slug: string }[];
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const {
    description_project,
    information_project,
    gallery_project,
    prevProject,
    nextProject,
    allCategories,
    currentCategories,
  } = props;

  const [selectedOption, setSelectedOption] = useState<string>(
    currentCategories[0]?.name || ""
  );
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[28px]">
        <div className="flex flex-col justify-between">
          <div>
            <div className="grid grid-cols-3 border-b border-black border-1 pb-[46px]">
              <div className="col-span-1">
                <p className="text-[1.25em] leading-[26px]">
                  {information_project.code_project.title}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[1.25em] leading-[26px]">
                  {information_project.code_project.code}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border-b border-black border-1 pb-[46px]">
              <div className="pt-[10px] col-span-1">
                <p className=" text-[1.25em] leading-[26px]">
                  {information_project.type_work.title}
                </p>
              </div>
              <div className="pt-[10px] col-span-2">
                <p className="text-[1.25em] leading-[26px]">
                  {information_project.type_work.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border-b border-black border-1 pb-[46px]">
              <div className="pt-[10px] col-span-1">
                <p className="text-[1.25em] leading-[26px]">
                  {information_project.location.title}
                </p>
              </div>
              <div className="pt-[10px] col-span-2">
                <p className="text-[1.25em] leading-[26px]">
                  {information_project.location.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 pb-[46px]">
              <div className="pt-[10px] col-span-1">
                <p className="text-[1.25em] leading-[26px]">
                  {information_project.built_area.title}
                </p>
              </div>
              <div className="pt-[10px] col-span-2">
                <p className="text-[1.25em] leading-[26px]">
                  {information_project.built_area.area}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[30px] lg:pt-[0px] flex gap-[14px]">
            {allCategories.map((category, index) => (
              <button
                key={index}
                className={`font-medium text-[1.125em] leading-[18px] cursor-pointer border border-[#000000] h-[32px] px-[15px] ${
                  selectedOption === category
                    ? "bg-black text-white rounded-none"
                    : "text-black rounded-full opacity-20"
                }`}
                style={{
                  cursor: 'default'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div
            className="text-[1em] leading-[22px] lg:text-[1.25em] lg:leading-[26px]"
            dangerouslySetInnerHTML={{ __html: description_project }}
          />
        </div>
      </div>
      {gallery_project.length > 0 && (
        <section className="pt-[88px]">
          <Gallery gallery={gallery_project} />
        </section>
      )}
      <section className="pt-[20px] pb-[53px]">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            {prevProject && (
              <Link href={`/projects/${prevProject.slug}`}>
                <img
                  className="cursor-pointer"
                  src="/images/icons/left.svg"
                  alt="Anterior proyecto"
                />
              </Link>
            )}
          </div>
          <Link href={"/projects"}>
            <p className="flex items-start underline text-[1.25em] leading-[0px] cursor-pointer">
              {`${t("projectPage.all-projects")}`}
            </p>
          </Link>
          <div className="flex items-start">
            {nextProject && (
              <Link href={`/projects/${nextProject.slug}`}>
                <img
                  className="cursor-pointer"
                  src="/images/icons/right.svg"
                  alt="Siguiente proyecto"
                />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
