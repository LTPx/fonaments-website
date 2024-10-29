import { Link } from "@/navigation";
import { ServiceHomeWp } from "../_interfaces/wordpress-components";
import Accordion from "./accordion";

interface OurServicesProps {
  title: string;
  description: string;
  accordionItems: ServiceHomeWp[];
}

export function OurServices(props: OurServicesProps) {
  const { title, description, accordionItems } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[29px] lg:gap-[39px] z-30">
        <h2 className="lg:w-[422px]">{title}</h2>
        <div
          className="lg:w-[565px] text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="pt-[30px] lg:pt-[80px]">
        {accordionItems.map((item, index) => (
          <Accordion key={index} title={item.title} image={item.image?.url}>
            <div>
              <div
                className="relative z-30 lg:w-[1025px] text-[16px] leading-[22px] lg:text-[26px] lg:leading-[34px]"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              {item.image && (
                <img
                  src={item.image.url}
                  className="object-cover h-[200px] md:h-[400px] lg:h-[754px] w-full pt-[20px] lg:pt-[75px]"
                />
              )}
            </div>
          </Accordion>
        ))}
      </div>
      <div className="pt-[30px] z-30">
        <Link href={"/study"}>
          <p className="hover:bg-black hover:text-white hover:rounded-none flex items-center w-[145px] justify-center font-medium text-[18px] leading-[18px] cursor-pointer border border-[#000000] h-[32px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
            Más servicios
          </p>
        </Link>
      </div>
    </div>
  );
}

export default OurServices;
