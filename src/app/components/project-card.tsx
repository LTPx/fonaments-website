import { relative } from "path";

interface ProjectCardProps {
  imageHover?: string;
  image?: string;
  title?: string;
  className?: string;
  index?: number;
  totalProjects?: number;
}

function ProjectCard(props: ProjectCardProps) {
  const { imageHover, image, title, className } = props;

  return (
    <div className="flex flex-col group"
    >
      <div className={`relative ${className}`}>
        <img
          src={image}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out transform ${
            imageHover ? "opacity-100 group-hover:opacity-0" : ""
          }`}
        />
        {imageHover && (
          <img
            src={imageHover}
            alt="image-hover"
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
      </div>
      <p className="font-medium text-[14px] leading-[26px] mt-2">{title}</p>
      {/* <p className="font-medium text-[14px] leading-[26px] mt-2">
        {`(${index}/${totalProjects}) ${title}`}
      </p>  */}
    </div>
  );
}

export default ProjectCard;
