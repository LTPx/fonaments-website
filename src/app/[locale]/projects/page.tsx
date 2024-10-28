import { Suspense } from "react";
import { getAllProjects, getWordPressPage } from "@/app/_services/api";
import ProjectSection from "@/app/components/projects-section";
import TruncatedText from "@/app/components/truncated-text";

async function Projects(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressPage(locale, "projects");
  const { acf } = data;
  const { information, section } = acf;
  const allProjects = await getAllProjects("en");
  const projects = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/13e9/c36e/22cb64722351b977206c2b1e78a61953?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mw2FClyPt0cXbNGyI6~ZMTRlGMLN0iTkSoiynVv2SPUfbbUoHNiWpiNVnvBQINw8Rg9aG1yyZ0dlMNH4FitJOsqtvZUem~y6E0vgPJN5pzH6lHT~g3jl0BVW4EFgQrwg1L4aHpxK-Z9Ejf92y-fEabiEvV0FkpFwnUdPndU40p11kqdup0ipMd6pE65CPf22ZddSHIkrASDqE8kmhwRa~JRYLz7-ybPn-qFDmOPjFvvAv3W7QNrQPTptqlxKaIJMMSu67B60~sE-VmD9SYFSSCHO-IRrRh6z2S21ZR9IA~1YLjFOPv8kH4CQGfpa~azIIAK9bvYP~rBeFBY8o6o99g__",
      title: "Slide 1",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/f548/696a/bda9a7c55c7d8d9368d21b848b86e6c5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ctLxd8RGafvMEJqpi2gqU~hy7bP2Xt229QRajsDpOETRs6p2sQw6gS2KQcQXSWLoVkJ5NQ8Vv1U5sCwJvHEe3cfY7t~0XkQP0akPEgWVORNuH7~f0acO50gaOTAJ4IatvQy~ud29YHqNt~7mHVWYXpnttD0DJWXJrJcvs5UqYC7yatqaWga6VTePV0R3Xko4wtz2FVco76mEQnGZK3-2qh9CcoloyyWHLb5q41wgw1Tx-le2uPP2kbm5ITCvGRbeRUVq4waOO45ExI4m1FYS~kg0~0wYPdqK6ryRqUyq2zeX44mCJJzLesV0okTODQHNiLnA0gq-~GKT-8zjgyMmXw__",
      title: "Slide 2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/551d/fee7/a398bf714e8b8b610b23151b5bec2996?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KEJShjQXyAFpEcXRlZIx1uKdswEfH4gmcTxvpe5q7PW6HJKi2BCphCJeU2MptvY9W8gyY~Uqwpv6c3p8j-Cy1cAJyIhpwCc85E-rrPFJlTDO5tdP~EqM9F2SQDlvGjoy2Y0oVMNR0hj87MlnlM54CMPfv1t8QE1lZtsjPQxvUYWZnHqMhB8d7vFIAkFgSHtlpN~gZz91nn0zVFvClBZXS1bGttQJKfiIzijek073XWEhumq4eegkm5UHeTPkWjFu11PBYvOtozqgiAoyQZ8i0ddCy8lJApyUD6HqdIUPw4c9N1hSr9Eo8eIptQ2SB9-0iscFwtEc94elyFOx2BVJWQ__",
      title: "Slide 3",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/13e9/c36e/22cb64722351b977206c2b1e78a61953?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mw2FClyPt0cXbNGyI6~ZMTRlGMLN0iTkSoiynVv2SPUfbbUoHNiWpiNVnvBQINw8Rg9aG1yyZ0dlMNH4FitJOsqtvZUem~y6E0vgPJN5pzH6lHT~g3jl0BVW4EFgQrwg1L4aHpxK-Z9Ejf92y-fEabiEvV0FkpFwnUdPndU40p11kqdup0ipMd6pE65CPf22ZddSHIkrASDqE8kmhwRa~JRYLz7-ybPn-qFDmOPjFvvAv3W7QNrQPTptqlxKaIJMMSu67B60~sE-VmD9SYFSSCHO-IRrRh6z2S21ZR9IA~1YLjFOPv8kH4CQGfpa~azIIAK9bvYP~rBeFBY8o6o99g__",
      title: "Slide 4",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/551d/fee7/a398bf714e8b8b610b23151b5bec2996?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KEJShjQXyAFpEcXRlZIx1uKdswEfH4gmcTxvpe5q7PW6HJKi2BCphCJeU2MptvY9W8gyY~Uqwpv6c3p8j-Cy1cAJyIhpwCc85E-rrPFJlTDO5tdP~EqM9F2SQDlvGjoy2Y0oVMNR0hj87MlnlM54CMPfv1t8QE1lZtsjPQxvUYWZnHqMhB8d7vFIAkFgSHtlpN~gZz91nn0zVFvClBZXS1bGttQJKfiIzijek073XWEhumq4eegkm5UHeTPkWjFu11PBYvOtozqgiAoyQZ8i0ddCy8lJApyUD6HqdIUPw4c9N1hSr9Eo8eIptQ2SB9-0iscFwtEc94elyFOx2BVJWQ__",
      title: "Slide 5",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/f548/696a/bda9a7c55c7d8d9368d21b848b86e6c5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ctLxd8RGafvMEJqpi2gqU~hy7bP2Xt229QRajsDpOETRs6p2sQw6gS2KQcQXSWLoVkJ5NQ8Vv1U5sCwJvHEe3cfY7t~0XkQP0akPEgWVORNuH7~f0acO50gaOTAJ4IatvQy~ud29YHqNt~7mHVWYXpnttD0DJWXJrJcvs5UqYC7yatqaWga6VTePV0R3Xko4wtz2FVco76mEQnGZK3-2qh9CcoloyyWHLb5q41wgw1Tx-le2uPP2kbm5ITCvGRbeRUVq4waOO45ExI4m1FYS~kg0~0wYPdqK6ryRqUyq2zeX44mCJJzLesV0okTODQHNiLnA0gq-~GKT-8zjgyMmXw__",
      title: "Slide 6",
    },
  ];

  const btns = ["Todos", "Obra nueva", "Reforma", "Rústico"];

  return (
    <div className="container page-projects">
      <section className="flex flex-col lg:flex-row lg:justify-between">
        <h1 className="font-regular pt-[4px] lg:pt-[0px]">{information.title}</h1>
        <div className="pt-[14px] lg:pt-[37px]">
        <TruncatedText
          className="text-[16px] leading-[22px] lg:text-[26px] lg:leading-[32px] lg:w-[550px] xl:w-[815px]"
          content={information.description}
        />
        </div>
      </section>
      <section className="pt-[59px] lg:pt-[90px]">
        <ProjectSection options={btns} projects={allProjects} />
      </section>
      <section className="pt-[30px] lg:pt-[180px] pb-[80px] lg:pb-[94px]">
        <hr className="border-t border-black border-1 mb-[10px]" />
        <div className="flex gap-[15px] lg:gap-[0px] flex-col lg:grid lg:grid-cols-2">
          <div
            className="project-info font-medium lg:w-[263px] tracking-[-0.015em] text-[16px] lg:text-[18px] leading-[20px]"
            dangerouslySetInnerHTML={{ __html: section.description }}
          />
          <h2 className="lg:w-[429px] lg:leading-[46px]">{section.title}</h2>
        </div>
      </section>
    </div>
  );
}

export default Projects;
