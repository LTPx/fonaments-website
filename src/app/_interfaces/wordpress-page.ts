import {
  About,
  Content,
  Cury,
  GUID,
  ItemListElement,
  OgImage,
  TargetClass,
} from "./wordpress";
import {
  ContactFooterWp,
  ContactWp,
  GalleryProjectWp,
  HomeWp,
  InformationPageWp,
  InformationProjectWp,
  InformationWp,
  InfoWp,
  OfficesFootertWp,
  ProjectPostWp,
  ProjectWp,
  ServiceHomeWp,
  ServiceSectionHomeWp,
  ServicesSectionWp,
  TeamWp,
} from "./wordpress-components";

export interface WordPressFrontendPage {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  featured_media: number;
  template: string;
  parent: number;
  yoast_head: string;
  yoast_head_json: YoastHeadJSON;
  yoast_seo: {
    yoast_title: string;
    yoast_desc: string;
    yoast_canonical: string;
    yoast_focus_kw: string;
  }
  _links: Links;
  acf: AcfComponents;
}

export interface AcfComponents {
  home_information: HomeWp;
  services: ServiceHomeWp[];
  service_section: ServiceSectionHomeWp;
  feature_projects: ProjectWp[];
  offices: OfficesFootertWp;
  contact_information: ContactFooterWp;
  information: InformationWp;
  section: InformationWp;
  team_section: TeamWp;
  services_section: ServicesSectionWp;
  contact: ContactWp;
  gallery_project: GalleryProjectWp[];
  description_project: string;
  cover_image_project: ImageAcf;
  information_project: InformationProjectWp;
  hover_image?: ImageAcf;
  information_section: InformationPageWp;
  information_page: InfoWp;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  "wp:attachment": About[];
  curies: Cury[];
}

export interface Cover {
  image: ImageAcf;
  text: string;
  buttons: ButtonWp[];
}

export interface ButtonWp {
  text: string;
  url: string;
  openNewTab: boolean;
}

export interface ImageAcf {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: Date;
  modified: Date;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: SizesAcf;
}

export interface SizesAcf {
  thumbnail: string;
  "thumbnail-width": number;
  "thumbnail-height": number;
  medium: string;
  "medium-width": number;
  "medium-height": number;
  medium_large: string;
  "medium_large-width": number;
  "medium_large-height": number;
  large: string;
  "large-width": number;
  "large-height": number;
  "1536x1536": string;
  "1536x1536-width": number;
  "1536x1536-height": number;
  "2048x2048": string;
  "2048x2048-width": number;
  "2048x2048-height": number;
}

export interface YoastHeadJSON {
  title: string;
  description: string;
  robots: Robots;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_site_name: string;
  article_publisher: string;
  article_modified_time: Date;
  og_image: OgImage[];
  twitter_card: string;
  twitter_site: string;
  schema: Schema;
}

export interface Robots {
  index: string;
  follow: string;
  "max-snippet": string;
  "max-image-preview": string;
  "max-video-preview": string;
}

export interface Schema {
  "@context": string;
  "@graph": Graph[];
}

export interface Graph {
  "@type": string;
  "@id": string;
  url?: string;
  name?: string;
  isPartOf?: Breadcrumb;
  datePublished?: Date;
  dateModified?: Date;
  breadcrumb?: Breadcrumb;
  inLanguage?: string;
  potentialAction?: PotentialAction[];
  itemListElement?: ItemListElement[];
  description?: string;
}

export interface Breadcrumb {
  "@id": string;
}

export interface PotentialAction {
  "@type": string;
  target: string[] | TargetClass;
  "query-input"?: string;
}
