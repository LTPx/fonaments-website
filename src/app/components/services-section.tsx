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
      <img src={coverImage} className="h-[800px] w-full object-cover" />
      <div className="flex flex-col pt-[37px]">
        {services.map((service, index) => (
          <Accordion key={index} title={service.title}>
            <div>
              <p className="w-[1025px] text-[26px] leading-[34px]">
                {service.description}
              </p>
              {service.imageUrl && (
                <img
                  src={service.imageUrl}
                  className="h-[754px] w-full pt-[75px]"
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
