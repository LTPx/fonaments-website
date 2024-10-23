interface ProjectCardProps {
  imageHover?: string;
  image?: string;
  title?: string;
}

function ProjectCard(props: ProjectCardProps) {
  const { imageHover, image, title } = props;

  return (
    <div className="flex flex-col group">
      <div className="relative h-[456px] xl:h-[600px]">
        <img
          src={image}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            imageHover ? "opacity-100 group-hover:opacity-0" : ""
          }`}
        />
        {imageHover && (
          <img
            src={imageHover}
            alt="image-hover"
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>
      <p className="font-medium text-[14px] leading-[26px] mt-2">{title}</p>
    </div>
  );
}

export default ProjectCard;
