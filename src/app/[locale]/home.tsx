import React from "react";
import HeaderCarousel from "../components/header-carousel";
import OurServices from "../components/our-services";
import {
  HomeWp,
  ServiceHomeWp,
  ServiceSectionHomeWp,
} from "../_interfaces/wordpress-components";
import { WordPressProject } from "../_interfaces/wordpress-project";
import HomeInformation from "../components/home-information";

interface Props {
  home_information: HomeWp;
  services: ServiceHomeWp[];
  service_section: ServiceSectionHomeWp;
  projects: WordPressProject[];
}

function Home(props: Props) {
  const { home_information, services, service_section, projects } = props;

  return (
    <div className="container relative mx-auto flex flex-col pt-[7px] lg:pt-[30px] pb-[100px] lg:pb-[80px]">
      <HeaderCarousel projects={projects} title={home_information.title} description={home_information.description} />
      <section className="lg:hidden block pb-[45px] lg:pb-[78px] pt-[66px] lg:pt-[82px]">
        <img src="/images/fonaments.svg" />
      </section>
      <section className="z-30 lg:-mt-[78px]">
        <HomeInformation title={home_information.title} description={home_information.description}/>
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
