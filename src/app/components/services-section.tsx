import { ServiceHomeWp } from "../_interfaces/wordpress-components";
import Accordion from "./accordion";

interface ServiceSectionsProps {
  coverImage: string;
  services: ServiceHomeWp[];
}

export function ServiceSections(props: ServiceSectionsProps) {
  const { coverImage, services } = props;

  return (
    <div className="flex flex-col pb-[200px]">
      <img
        src={coverImage}
        className="h-[194px] md:h-[600px] lg:h-[800px] w-full object-cover"
      />
      <div className="flex flex-col pt-[23px] lg:pt-[37px]">
        {services.map((service, index) => (
            <Accordion
            key={index}
            title={service.title}
            image={service.image?.url}>
            <div>
              <div
                className="lg:w-[1025px] text-[16px] leading-[22px] lg:text-[26px] lg:leading-[34px]"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              {service.image.url && (
                <img
                  src={service.image.url}
                  className="object-cover h-[200px] md:h-[450px] lg:h-[754px] w-full pt-[20px] lg:pt-[75px]"
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
