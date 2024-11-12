import { WordPressPost } from "../_interfaces/wordpress";
import { WordPressFrontendPage } from "../_interfaces/wordpress-page";
import { WordPressProject } from "../_interfaces/wordpress-project";

export async function getWordPressCustomPage(
  locale: "en" | "es" | "de",
  slug: string
): Promise<WordPressFrontendPage> {
  const parentPages = {
    en: 'english-pages',
    es: 'spanish-pages',
    de: 'german-pages',
  };
  const parentPage = parentPages[locale];
  const WORDPRESS_API_URL = "https://www.staging.fonamentsarch.com/wp-json";
  const url = `${WORDPRESS_API_URL}/custom/v1/page_by_slug?slug=${slug}&parent_slug=${parentPage}&lang=${locale}`;
  console.log("url custom page: ", url);
  const response = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });
  const page = await response.json();
  if (!response.ok) throw new Error(page.message);
  return page;
}

export async function getWordPressPage(
  locale: "en" | "es" | "de",
  slug: string
): Promise<WordPressFrontendPage> {
  const WORDPRESS_API_URL = "https://www.staging.fonamentsarch.com/wp-json";
  const url = `${WORDPRESS_API_URL}/wp/v2/pages?slug=${slug}&acf_format=standard`;
  console.log("url: ", url);
  const response = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });
  const pages = await response.json();
  if (!response.ok) throw new Error(pages.message);
  const page = pages.length ? pages[0] : undefined;
  return page;
}

export async function getAllProjects(
  locale: "en" | "es" | "de"
): Promise<WordPressProject[]> {
  const WORDPRESS_API_URL = "https://www.staging.fonamentsarch.com/wp-json";
  const url = `${WORDPRESS_API_URL}/wp/v2/all_projects?_embed&lang=${locale}`;
  const urlCustom = `${WORDPRESS_API_URL}/custom/v1/all_projects?lang=${locale}`;
  console.log("url projects: ", urlCustom);
  const response = await fetch(urlCustom, {
    next: {
      revalidate: 0,
    },
  });
  const projects = await response.json();
  if (!response.ok) throw new Error(projects.message);
  return projects;
}

export async function getProjectBySlug(
  locale: "en" | "es" | "de",
  slug: string
): Promise<WordPressPost> {
  const WORDPRESS_API_URL = "https://www.staging.fonamentsarch.com/wp-json";
  const url = `${WORDPRESS_API_URL}/wp/v2/all_projects?slug=${slug}&acf_format=standard`;
  console.log("url project: ", url);
  const response = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });
  const posts = await response.json();
  if (!response.ok) throw new Error(posts.message);
  const post = posts.length > 0 ? posts[0] : undefined;
  return post;
}
