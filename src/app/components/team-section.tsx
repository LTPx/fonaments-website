import {
  GalleryProjectWp,
  MemberTeamWp,
} from "../_interfaces/wordpress-components";
import { ImageAcf } from "../_interfaces/wordpress-page";
import MemberTeam from "./member-team";

interface TeamSectionProps {
  coverImage: string;
  membersTeam: MemberTeamWp[];
  gallery: GalleryProjectWp[];
}

export function TeamSection(props: TeamSectionProps) {
  const { coverImage, membersTeam, gallery } = props;

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
      {gallery && (
        <div className="pt-[35px] lg:pt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-4">
          {gallery.map((image, index) => (
            <div
              key={index}
              className={`w-full ${index === 0 ? "col-span-full" : ""}`}
            >
              <img
                src={image.image.url}
                alt={`Gallery image ${index + 1}`}
                className={`w-full ${
                  index === 0
                    ? "h-[194px] md:h-[350px] lg:h-[800px]"
                    : "h-[393px] lg:h-[800px]"
                } object-cover`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamSection;
