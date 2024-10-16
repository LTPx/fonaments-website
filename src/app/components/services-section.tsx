import Accordion from "./accordion";

interface ServicesProps {
  title: string;
  description: string;
  imageUrl?: string;
}

interface ServiceSectionsProps {
  coverImage: string;
  services: ServicesProps[];
}

export function ServiceSections(props: ServiceSectionsProps) {
  const { coverImage, services } = props;

  return (
    <div className="flex flex-col pb-[200px]">
      <img
        src={coverImage}
        className="h-[194px] lg:h-[800px] w-full object-cover"
      />
      <div className="flex flex-col pt-[23px] lg:pt-[37px]">
        {services.map((service, index) => (
          <Accordion key={index} title={service.title}>
            <div>
              <p className="lg:w-[1025px] text-[16px] leading-[22px] lg:text-[26px] lg:leading-[34px]">
                {service.description}
              </p>
              {service.imageUrl && (
                <img
                  src={service.imageUrl}
                  className="h-[200px] lg:h-[754px] w-full pt-[20px] lg:pt-[75px]"
                />
              )}
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default ServiceSections;
