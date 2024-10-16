import MemberTeam from "./member-team";

interface Props {
  name: string;
  image: string;
  profession: string;
  description: string;
}

interface TeamSectionProps {
  coverImage: string;
  membersTeam: Props[];
}

export function TeamSection(props: TeamSectionProps) {
  const { coverImage, membersTeam } = props;

  return (
    <div className="flex flex-col pb-[56px] lg:pb-[32px]">
      <img
        src={coverImage}
        className="h-[194px] lg:h-[800px] w-full object-cover"
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
