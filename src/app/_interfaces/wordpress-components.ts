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
  cover_image: ImageAcf;
  members_team: MemberTeamWp[];
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
  id: number;
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
}
