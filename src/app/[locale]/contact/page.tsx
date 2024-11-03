import { getWordPressCustomPage } from "@/app/_services/api";

async function Contact(nextParams: { params: { locale: "en" | "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressCustomPage(locale, "contact");
  const { acf } = data;
  const { contact } = acf;

  return (
    <div className="container page-contact">
      <section>
        <h1 className="font-regular lg:block hidden">{contact.title}</h1>
        <h1 className="font-regular pb-[17px] pt-[4px] lg:hidden text-[50px] leading-[58px]">
          Contacto
        </h1>
        <div className="hidden lg:grid lg:grid-cols-2 gap-[20px] pb-[36px]">
          <img
            src={contact.images.first_image.url}
            className="h-[718px] w-full object-cover"
          />
          <img
            src={contact.images.second_image.url}
            className="h-[718px] w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
