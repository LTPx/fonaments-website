import { ImageAcf } from "./wordpress-page";

export interface HomeWp {
  title: string;
  description: string;
  image: ImageAcf;
}

export interface InformationWp {
  title: string;
  description: string;
}

export interface TeamWp {
  image_cover: ImageAcf;
  members_team: MemberTeamWp[];
  gallery: GalleryProjectWp[];
}

export interface ServicesSectionWp {
  cover_image: ImageAcf;
  services: ServiceHomeWp[];
}

export interface MemberTeamWp {
  name: string;
  profession: string;
  image: ImageAcf;
  description: string;
}

export interface ServiceHomeWp {
  title: string;
  description: string;
  image: ImageAcf;
}

export interface ServiceSectionHomeWp {
  title: string;
  description: string;
}

export interface ServiceSectionHomeWp {
  title: string;
  description: string;
}

export interface ProjectWp {
  project: ProjectPostWp;
}

export interface ProjectPostWp {
  ID: number;
  post_title: string;
  imageUrl: string;
}

export interface OfficesFootertWp {
  first_office: OfficetWp;
  second_office: OfficetWp;
}

export interface OfficetWp {
  title: string;
  image: ImageAcf;
  address: string;
  phone: string;
  link_location: string;
}

export interface ContactFooterWp {
  email: string;
  link_instagram: string;
  link_linkedIn: string;
}

export interface ContactWp {
  title: string;
  images: ContactImagesWp;
}

export interface GalleryProjectWp {
  image: ImageAcf;
}

export interface InformationPageWp {
  study_section: InfoWp;
  service_section: InfoWp;
}

export interface InfoWp {
  title: string;
  description: string;
}

export interface InformationProjectWp {
  code_project: InformationCodeWp;
  type_work: InformationWorkWp;
  location: InformationLocationWp;
  built_area: InformationAreaWp;
}

export interface InformationCodeWp {
  title: string;
  code: string;
}

export interface InformationWorkWp {
  title: string;
  description: string;
}

export interface InformationLocationWp {
  title: string;
  description: string;
}

export interface InformationAreaWp {
  title: string;
  area: string;
}

export interface ContactImagesWp {
  first_image: ImageAcf;
  second_image: ImageAcf;
}
