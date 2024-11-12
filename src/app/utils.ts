import { BuildSEOParams } from "./_interfaces/wordpress";
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

export function generateSeoPage(params: BuildSEOParams) {
  const { yoastSeo, locale, fullUrl, slug, locales } = params;
  const originMatch = fullUrl.match(/^(https?:\/\/[^\/]+)/);
  const origin = originMatch ? originMatch[0] : '';

  const {
    title,
    description,
    robots,
    og_description,
    og_title,
    og_image,
    og_site_name,
    og_type,
  } = yoastSeo;
  return {
    title: title,
    description: description,
    alternates: {
      languages: {
        en: `${origin}${locales?.en}`,
        es: `${origin}${locales?.es}`,
        de: `${origin}${locales?.de}`,
      },
    },
    openGraph: {
      title: og_title,
      description: og_description,
      type: og_type as "website",
      siteName: og_site_name,
      locale: locale,
      images: [
        {
          url: og_image[0].url,
          width: og_image[0].width,
          height: og_image[0].height,
        },
      ],
    },

  };
}

// export function generateLinksTranslate(
//   params: WpmlTranslation,
//   fallbackSlug: string
// ): LocaleSlugs {
//   const { en_US, de_DE, es_ES } = params;
//   return {
//     en: en_US?.slug ? `/${en_US.slug}/` : `/${fallbackSlug}/`,
//     es: es_ES?.slug ? `/es/${es_ES.slug}/` : `/es/${fallbackSlug}/`,
//     de: de_DE?.slug ? `/de/${de_DE.slug}/` : `/de/${fallbackSlug}/`,
//   };
// }

// export function generateLinksNoTranslate(slug: string): LocaleSlugs {
//   return generateLinksTranslate({} as WpmlTranslation, slug);
// }
