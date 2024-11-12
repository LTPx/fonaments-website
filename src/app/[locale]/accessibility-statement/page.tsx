import { Suspense } from "react";
import { getWordPressCustomPage } from "@/app/_services/api";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "accessibility-statement");
  if (page) {
    const { acf } = page;
    const { information_page } = acf;
    const title = `Fonaments - ${information_page.title}`
    return {
      title,
      description: page.acf.description_project,
      openGraph: {
        title,
        type: "website",
        siteName: "Fonaments",
        locale: locale,
      },
    };
  } else {
    return {
      title: "Fonaments",
    };
  }
}

async function AccessibilityStatement(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressCustomPage(locale, "accessibility-statement");
  const { acf } = data;
  const { information_page } = acf;

  return (
    <div className="container">
      <section className="flex flex-col lg:flex-row lg:justify-between pb-[47px]">
        <h2 className="lg:w-[280px] tracking-[-1%] leading-[45px] pt-[37px] lg:pt-[37px] lg:w-[]">
          {information_page.title}
        </h2>
        <div className="pt-[14px] lg:pt-[41px]">
          <div
            className="lg:w-[600px] xl:w-[841px] text-[16px] lg:leading-[28px] lg:text-[20px] leading-[20px]"
            dangerouslySetInnerHTML={{ __html: information_page.description }}
          />
        </div>
      </section>
    </div>
  );
}

export default AccessibilityStatement;
