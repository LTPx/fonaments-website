import Accordion from "./accordion";

interface ItemsProps {
  title: string;
  description: string;
  imageUrl?: string;
}

interface OurServicesProps {
  title: string;
  description: string;
  accordionItems: ItemsProps[];
}

export function OurServices(props: OurServicesProps) {
  const { title, description, accordionItems } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[29px] lg:gap-[39px]">
        <h2 className="lg:w-[422px]">{title}</h2>
        <p className="lg:w-[565px] text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]">{description}</p>
      </div>
      <div className="pt-[30px] lg:pt-[80px]">
        {accordionItems.map((item, index) => (
          <Accordion key={index} title={item.title}>
            <div>
              <p className="lg:w-[1025px] text-[16px] leading-[22px] lg:text-[26px] lg:leading-[34px]">
                {item.description}
              </p>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  className="h-[200px] md:h-[400px] lg:h-[754px] w-full pt-[20px] lg:pt-[75px]"
                />
              )}
            </div>
          </Accordion>
        ))}
      </div>
      <div className="pt-[30px]">
        <button className="font-medium text-[18px] leading-[18px] cursor-pointer border border-[#000000] h-[32px] px-[15px] rounded-full">
          Más servicios
        </button>
      </div>
    </div>
  );
}

export default OurServices;
