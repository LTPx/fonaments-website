"use client";

import { useState } from "react";

interface Props {
  name: string;
  image: string;
  profession: string;
  description: string;
}

interface MemberTeamProps {
  memberTeam: Props;
}

export function MemberTeam(props: MemberTeamProps) {
  const { memberTeam } = props;

  return (
    <div className="flex flex-col">
      <hr className="border-t border-black border-1 mb-[8px] lg:mb-[12px]" />
      <div className="flex flex-col md:grid md:grid-cols-6 lg:grid lg:grid-cols-2 xl:flex xl:flex-row gap-[17px] lg:gap-[22px] pb-[26px] lg:pb-[37px]">
        <div className="md:col-span-3 lg:col-span-1 flex flex-col gap-[10px] lg:gap-[42px]">
          <div className="">
            <h2 className="text-[30px] leading-[32px] lg:text-[42px] lg:leading-[42px]">
              {memberTeam.name}
            </h2>
            <h2 className="lg:hidden text-[30px] leading-[32px]">
              {memberTeam.profession}
            </h2>
          </div>
          <img
            src={memberTeam.image}
            className="h-[359px] xl:h-[600px] lg:h-[500px] lg:w-[589px] object-cover"
          />
        </div>
        <div className="md:col-span-3 lg:col-span-1 flex flex-col lg:gap-[42px]">
          <h2 className="hidden lg:block">{memberTeam.profession}</h2>
          <p className="xl:w-[767px] text-[16px] leading-[22px] lg:text-[20px] lg:leading-[26px]">
            {memberTeam.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberTeam;
