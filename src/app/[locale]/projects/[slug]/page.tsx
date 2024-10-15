import { Suspense } from "react";
import { getWordPressPage } from "@/app/_services/api";
import ProjectDetails from "@/app/components/project-details";

async function ProjectSlugPage(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;

  return (
    <div className="container project-slug-page">
      <h1>Proyecto 0098</h1>
      <img
        src="https://s3-alpha-sig.figma.com/img/13e9/c36e/22cb64722351b977206c2b1e78a61953?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYbmhmQiWg~K1offIUs33PwCP9XMv60tVpOVBAQzVg6N8PUN-W-n3j8vqQCFzwJr-~c4Z2C1T~qjpFJ~RvpJP44rDcJ4oFn7Yof0MrSsk4ENsVLOfKXNlhGhCgfzv-qLtITpAhRrnh-OyjJHx9ykxmEw01NZfcQZJF~~yTaVgPsujHeayZ~XKaGZY76lhi3iRiO76myR1jLIiq3HaT6wCM2ylPbRZtSfHR1oLZ5Nz~h-OrQz5i7Ou8PyOJOkP3gma6ErQhs2FzZB9hM3NrQzfExE3jXxWUWNcs~Ci-1zykJq499flZBAyoQ8kk0J1irIM3Sa7GijWuuVVq7A4PKsGw__"
        className="h-[800px] w-full object-cover"
      />
      <section className="pt-[20px]">
        <ProjectDetails />
      </section>
    </div>
  );
}

export default ProjectSlugPage;
