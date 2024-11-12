import { WordPressProject } from "./_interfaces/wordpress-project";

export function getUniqueCategories(projects: WordPressProject[]): {id: number, name:string, slug: string}[] {
  const uniqueCategories = new Map();

  projects.forEach(project => {
      const categories = project._embedded['wp:term'].categories;

      categories.forEach(category => {
          uniqueCategories.set(category.id, {
              id: category.id,
              name: category.name,
              slug: category.slug
          });
      });
  });

  return Array.from(uniqueCategories.values());
}
