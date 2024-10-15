import React from "react";
import HeaderCarousel from "../components/header-carousel";
import OurServices from "../components/our-services";

interface Props {
  data: any;
}

function Home(props: Props) {
  const { data } = props;
  const headerCarousel = [
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
  ];

  const items = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9033/8ac5/8357a3e22da53de222a5d1f0c9589f6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRxAw6AXximhfGDHni6xcG4Uum0D722UsssxWPhE9M5ts~eiYuOCYOXHjzoqO7T5DgBY5CJ~SvGwQ9HpZp6Pb-hshYPTVVgnkyyoyTID-FHRFGO~bcZifmXPsDeUsNYmQBAC-I-vrVa-TFYVmv5O3Flvj7h4G~mPXXNAHPJNIFtMhHZBv~6QWyhJAjuRMFHxoRpUhtvCl8arsGW9Uo4BKZ3pzmhtEyCBd84d9YOGISsVeRS9Vx3AS2Iqu4avfZMZioIZi0taeyeg4UUuOkChGVHMEnbEwBR-luhbiLUHgJcNSE6CNkprn7GJwttq2Wv555pALTqhdrwl3mxymL4Zhw__",
      title: "Arquitectura",
      description:
        "Estudio de arquitectura en Mallorca especializado en viviendas unifamiliares. En Fonaments, fusionamos de manera armoniosa la herencia y tradición local con perspectivas nuevas para diseñar espacios contemporáneos. En este proyecto, unimos la juventud y la pasión por el mundo de la arquitectura con las ganas de innovar y de plasmar en nuestros proyectos los años de experiencia trabajando tanto aquí en Mallorca como a nivel internacional.",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9033/8ac5/8357a3e22da53de222a5d1f0c9589f6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRxAw6AXximhfGDHni6xcG4Uum0D722UsssxWPhE9M5ts~eiYuOCYOXHjzoqO7T5DgBY5CJ~SvGwQ9HpZp6Pb-hshYPTVVgnkyyoyTID-FHRFGO~bcZifmXPsDeUsNYmQBAC-I-vrVa-TFYVmv5O3Flvj7h4G~mPXXNAHPJNIFtMhHZBv~6QWyhJAjuRMFHxoRpUhtvCl8arsGW9Uo4BKZ3pzmhtEyCBd84d9YOGISsVeRS9Vx3AS2Iqu4avfZMZioIZi0taeyeg4UUuOkChGVHMEnbEwBR-luhbiLUHgJcNSE6CNkprn7GJwttq2Wv555pALTqhdrwl3mxymL4Zhw__",
      title: "Dirección de obra",
      description:
        "Contamos con aparejadores altamente experimentados que supervisan la ejecución técnica y constructiva de los proyectos. Nos encargamos de la coordinación de los trabajos en obra, asegurando que se cumplan los plazos y presupuestos establecidos y que la calidad de la construcción cumpla con los estándares exigidos.",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9033/8ac5/8357a3e22da53de222a5d1f0c9589f6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRxAw6AXximhfGDHni6xcG4Uum0D722UsssxWPhE9M5ts~eiYuOCYOXHjzoqO7T5DgBY5CJ~SvGwQ9HpZp6Pb-hshYPTVVgnkyyoyTID-FHRFGO~bcZifmXPsDeUsNYmQBAC-I-vrVa-TFYVmv5O3Flvj7h4G~mPXXNAHPJNIFtMhHZBv~6QWyhJAjuRMFHxoRpUhtvCl8arsGW9Uo4BKZ3pzmhtEyCBd84d9YOGISsVeRS9Vx3AS2Iqu4avfZMZioIZi0taeyeg4UUuOkChGVHMEnbEwBR-luhbiLUHgJcNSE6CNkprn7GJwttq2Wv555pALTqhdrwl3mxymL4Zhw__",
      title: "Gestión de proyectos",
      description:
        "Nuestra experiencia en gestión de proyectos asegura una planificación y ejecución eficiente. Desde la coordinación entre diferentes profesionales hasta la supervisión de la ejecución, garantizamos que cada etapa del proceso se gestione de manera efectiva, cumpliendo con los tiempos y costos previstos. Ofrecemos a nuestros clientes la opción de contratar el servicio de Project Management, permitiéndoles delegar las gestiones, la coordinación con industriales y empresas colaboradoras, y centrarse en aquellos aspectos del proyecto en los que deseen estar más implicados, asegurando siempre que el resultado final refleje fielmente sus ideas y expectativas",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9033/8ac5/8357a3e22da53de222a5d1f0c9589f6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRxAw6AXximhfGDHni6xcG4Uum0D722UsssxWPhE9M5ts~eiYuOCYOXHjzoqO7T5DgBY5CJ~SvGwQ9HpZp6Pb-hshYPTVVgnkyyoyTID-FHRFGO~bcZifmXPsDeUsNYmQBAC-I-vrVa-TFYVmv5O3Flvj7h4G~mPXXNAHPJNIFtMhHZBv~6QWyhJAjuRMFHxoRpUhtvCl8arsGW9Uo4BKZ3pzmhtEyCBd84d9YOGISsVeRS9Vx3AS2Iqu4avfZMZioIZi0taeyeg4UUuOkChGVHMEnbEwBR-luhbiLUHgJcNSE6CNkprn7GJwttq2Wv555pALTqhdrwl3mxymL4Zhw__",
      title: "Consultoría técnica",
      description:
        "Ofrecemos asesoría especializada en cuestiones técnicas y normativas. Evaluamos la viabilidad de proyectos, realizamos estudios de impacto y proporcionamos soluciones técnicas para garantizar que todos los aspectos del diseño cumplan con las regulaciones y estándares vigentes",
    },
    // {
    //   imageUrl:
    //     "https://s3-alpha-sig.figma.com/img/9033/8ac5/8357a3e22da53de222a5d1f0c9589f6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRxAw6AXximhfGDHni6xcG4Uum0D722UsssxWPhE9M5ts~eiYuOCYOXHjzoqO7T5DgBY5CJ~SvGwQ9HpZp6Pb-hshYPTVVgnkyyoyTID-FHRFGO~bcZifmXPsDeUsNYmQBAC-I-vrVa-TFYVmv5O3Flvj7h4G~mPXXNAHPJNIFtMhHZBv~6QWyhJAjuRMFHxoRpUhtvCl8arsGW9Uo4BKZ3pzmhtEyCBd84d9YOGISsVeRS9Vx3AS2Iqu4avfZMZioIZi0taeyeg4UUuOkChGVHMEnbEwBR-luhbiLUHgJcNSE6CNkprn7GJwttq2Wv555pALTqhdrwl3mxymL4Zhw__",
    //   title: "Estudio y gestión de licencias",
    //   description:
    //     "Nos encargamos de la tramitación de todas las licencias y permisos necesarios para la construcción y remodelación. Nuestro equipo se asegura de cumplir con todos los requisitos legales y reglamentarios, facilitando un proceso administrativo ágil y sin complicaciones.",
    // },
    // {
    //   imageUrl:
    //     "https://s3-alpha-sig.figma.com/img/9033/8ac5/8357a3e22da53de222a5d1f0c9589f6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRxAw6AXximhfGDHni6xcG4Uum0D722UsssxWPhE9M5ts~eiYuOCYOXHjzoqO7T5DgBY5CJ~SvGwQ9HpZp6Pb-hshYPTVVgnkyyoyTID-FHRFGO~bcZifmXPsDeUsNYmQBAC-I-vrVa-TFYVmv5O3Flvj7h4G~mPXXNAHPJNIFtMhHZBv~6QWyhJAjuRMFHxoRpUhtvCl8arsGW9Uo4BKZ3pzmhtEyCBd84d9YOGISsVeRS9Vx3AS2Iqu4avfZMZioIZi0taeyeg4UUuOkChGVHMEnbEwBR-luhbiLUHgJcNSE6CNkprn7GJwttq2Wv555pALTqhdrwl3mxymL4Zhw__",
    //   title: "Diseños de interiores",
    //   description:
    //     "Creamos ambientes funcionales y estéticamente agradables, ya sea que estés buscando diseñar un nuevo espacio o renovar uno existente. Nuestro enfoque combina creatividad y pragmatismo para transformar espacios interiores en lugares únicos y confortables.",
    // },
  ];
  return (
    <div className="container mx-auto flex flex-col pt-[30px] pb-[100px] lg:pb-[80px]">
      <HeaderCarousel items={headerCarousel} />
      <section className="pb-[45px] lg:pb-[78px] pt-[90px] lg:pt-[82px]">
        <img src="/images/fonaments.svg" />
      </section>
      <section>
        <div className="flex flex-col lg:grid lg:grid-cols-3">
          <div className="hidden lg:block col-span-1"></div>
          <div className="col-span-2 flex flex-col gap-[23px]">
            <h2 className="lg:w-[719px]">
              Estudio de arquitectura en Mallorca, con oficinas en Llucmajor y
              Santanyí.
            </h2>
            <p className="lg:w-[692px] text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]">
              En Fonaments, entendemos que cada proyecto es una oportunidad para
              contar una historia y crear una experiencia única. Nuestro equipo
              está dedicado a diseñar espacios que no solo cumplan con los
              estándares más altos de calidad, sino que también reflejen la
              esencia y el espíritu de Mallorca. Con una profunda conexión con
              la isla, comprendemos las particularidades del entorno mallorquín.
              Incorporamos elementos que resuenan con el paisaje y la cultura
              local, asegurando que cada proyecto se integre armoniosamente con
              su entorno.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-[30px] lg:pt-[58px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/2b6c/d974/730ade5a9bea39546ad9d412fd805f56?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URHUMg~8eMeRjmb7jearMV4jAJkpKi~lkhPsLczsszmAVn7Ofn0fmZoKFn5hHtkKz-67TVPi1SYNNw3GOy29tJR9EKjNODQFOjZTcmw3brWCC~16wTCmAd0r6buZn4~zGBiBlfgZy2HjQCyjxbFJC2Ts3SAWm9vyKX9UuHsPc6ME4z0OdbuI4vQaj4EYPJNhsQSbgatYsSfjTzP~-6hAgyM8FDSXC6JM4rSzEgaCY3rDfcDKfPLGMVVvzrVH14A~VHClaC2mIbjd0ywMpXSJb4oE9U~7RUVUqAxkrDf2TKY0V3WeOO0~uTfHHm3aKQ9m~uEyr0Q9lCWEThZBGEMRGQ__"
          className="h-[450px] lg:h-[800px] w-full object-cover"
        />
      </section>
      <section className="pt-[30px] lg:pt-[20px]">
        <OurServices
          title={"Servicios integrales: de la idea a la ejecución"}
          description={
            "Ofrecemos una gama completa de servicios que abarcan todas las fases de un proyecto arquitectónico. Nuestro equipo multidisciplinario combina la experiencia en arquitectura, dirección de obra, gestión de proyectos y más, para garantizar que cada una de tus ideas se materialice con la máxima calidad y eficiencia."
          }
          accordionItems={items}
        />
      </section>
    </div>
  );
}

export default Home;
