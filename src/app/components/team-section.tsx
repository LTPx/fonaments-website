import { MemberTeamWp } from "../_interfaces/wordpress-components";
import MemberTeam from "./member-team";

interface TeamSectionProps {
  coverImage: string;
  membersTeam: MemberTeamWp[];
}

export function TeamSection(props: TeamSectionProps) {
  const { coverImage, membersTeam } = props;

  return (
    <div className="flex flex-col pb-[56px] lg:pb-[32px]">
      <img
        src={coverImage}
        className="h-[194px] md:h-[600px] lg:h-[800px] w-full object-cover"
      />
      <div className="flex flex-col pt-[23px] lg:pt-[37px]">
        {membersTeam.map((member, index) => (
          <div key={index}>
            <MemberTeam memberTeam={member} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
