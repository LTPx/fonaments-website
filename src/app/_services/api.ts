import { WordPressPost } from "../_interfaces/wordpress";
import { ProjectPostWp, ProjectWp } from "../_interfaces/wordpress-components";
import { WordPressFrontendPage } from "../_interfaces/wordpress-page";

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
): Promise<WordPressPost[]> {
  const WORDPRESS_API_URL = "https://www.staging.fonamentsarch.com/wp-json";
  const url = `${WORDPRESS_API_URL}/wp/v2/all_projects?_embed`;
  console.log("url projects: ", url);
  const response = await fetch(url, {
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
  const post = posts.length ? posts[0] : undefined;
  return post;
}
