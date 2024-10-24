import React from "react";
import HeaderCarousel from "../components/header-carousel";
import OurServices from "../components/our-services";
import {
  HomeWp,
  ProjectPostWp,
  ProjectWp,
  ServiceHomeWp,
  ServiceSectionHomeWp,
} from "../_interfaces/wordpress-components";

interface Props {
  home_information: HomeWp;
  services: ServiceHomeWp[];
  service_section: ServiceSectionHomeWp;
  feature_projects: ProjectWp[];
}

function Home(props: Props) {
  const { home_information, services, service_section, feature_projects } = props;

  return (
    <div className="container mx-auto flex flex-col pt-[7px] lg:pt-[30px] pb-[100px] lg:pb-[80px]">
      <HeaderCarousel items={feature_projects} />
      {/* <section className="pb-[45px] lg:pb-[78px] pt-[90px] lg:pt-[82px]">
        <img src="/images/fonaments.svg" />
      </section> */}
      <section>
        <div className="flex flex-col lg:grid lg:grid-cols-3">
          <div className="hidden lg:block col-span-1"></div>
          <div className="col-span-2 flex flex-col gap-[23px]">
            <h2 className="xl:w-[719px]">{home_information.title}</h2>
            <div
              className="xl:w-[692px] text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]"
              dangerouslySetInnerHTML={{ __html: home_information.description }}
            />
          </div>
        </div>
      </section>
      <section className="pt-[30px] lg:pt-[58px]">
        <img
          src={home_information.image.url}
          className="h-[450px] lg:h-[800px] w-full object-cover"
        />
      </section>
      <section className="pt-[30px] lg:pt-[20px]">
        <OurServices
          title={service_section.title}
          description={service_section.description}
          accordionItems={services}
        />
      </section>
    </div>
  );
}

export default Home;
