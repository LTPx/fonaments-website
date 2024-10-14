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
      <hr className="border-t border-black border-1 mb-[12px]" />
      <div className="flex gap-[22px] pb-[37px]">
        <div className="flex flex-col gap-[42px]">
          <h2>{memberTeam.name}</h2>
          <img
            src={memberTeam.image}
            className="h-[600px] w-[589px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-[42px]">
          <h2>{memberTeam.profession}</h2>
          <p className="w-[767px] text-[20px] leading-[26px]">
            {memberTeam.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberTeam;
