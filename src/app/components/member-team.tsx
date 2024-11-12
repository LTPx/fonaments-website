import { MemberTeamWp } from "../_interfaces/wordpress-components";

interface MemberTeamProps {
  memberTeam: MemberTeamWp;
}

export function MemberTeam(props: MemberTeamProps) {
  const { memberTeam } = props;

  return (
    <div className="flex flex-col">
      <hr className="border-t border-black border-1 mb-[8px] lg:mb-[12px]" />
      <div className="flex flex-col md:grid md:grid-cols-6 lg:grid lg:grid-cols-2 xl:flex xl:flex-row gap-[17px] lg:gap-[22px] pb-[26px] lg:pb-[37px]">
        <div className="md:col-span-3 lg:col-span-1 flex flex-col gap-[10px] lg:gap-[42px]">
          <div className="">
            <h2 className="text-[1.875em] leading-[32px] lg:text-[2.625em] lg:leading-[42px]">
              {memberTeam.name}
            </h2>
            <h2 className="md:hidden text-[1.875em] leading-[32px]">
              {memberTeam.profession}
            </h2>
          </div>
          <img
            src={memberTeam.image.url}
            className="h-[359px] xl:h-[600px] lg:h-[500px] lg:w-[589px] object-cover"
          />
        </div>
        <div className="md:col-span-3 lg:col-span-1 flex flex-col md:gap-[10px] lg:gap-[42px]">
          <h2 className="hidden md:block">{memberTeam.profession}</h2>
          <div
            className="xl:w-[767px] text-[1em] leading-[22px] lg:text-[1.25em] lg:leading-[26px]"
            dangerouslySetInnerHTML={{ __html: memberTeam.description }}
          />
        </div>
      </div>
    </div>
  );
}

export default MemberTeam;
