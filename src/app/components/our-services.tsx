import { Link } from "@/navigation";
import { ServiceHomeWp } from "../_interfaces/wordpress-components";
import Accordion from "./accordion";
import { getTranslations } from "next-intl/server";

interface OurServicesProps {
  title: string;
  description: string;
  accordionItems: ServiceHomeWp[];
}

export async function OurServices(props: OurServicesProps) {
  const { title, description, accordionItems } = props;
  const t = await getTranslations();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[29px] lg:gap-[39px] z-30">
        <div
          className="info-projects"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div
          className="lg:w-[565px] text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="pt-[30px] lg:pt-[80px]">
        {accordionItems.map((item, index) => (
          <Accordion
            className="z-10"
            key={index}
            title={item.title}
            image={item.image?.url}
          >
            <div>
              <div
                className="relative xl:w-[1025px] text-[16px] leading-[22px] lg:text-[26px] lg:leading-[34px]"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              {item.image && (
                <img
                  src={item.image.url}
                  className="object-cover h-[200px] md:h-[400px] lg:h-[754px] xl:h-[754px] w-full pt-[20px] lg:pt-[75px]"
                />
              )}
            </div>
          </Accordion>
        ))}
      </div>
      <div className="pt-[30px] z-30">
        <Link className="inline-block" href={"/studio#services"}>
          <button className="inline-block hover:bg-black hover:text-white hover:rounded-none flex items-center justify-center font-medium text-[18px] leading-[18px] cursor-pointer border border-[#000000] h-[32px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
            {`${t("HomePage.more-services")}`}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OurServices;
