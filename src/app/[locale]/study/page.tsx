import { Suspense } from "react";
import { getWordPressPage } from "@/app/_services/api";
import ProjectSection from "@/app/components/projects-section";
import StudySection from "@/app/components/study-section";

async function Study(nextParams: { params: { locale: "en" | "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;

  const services = [
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
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9033/8ac5/8357a3e22da53de222a5d1f0c9589f6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRxAw6AXximhfGDHni6xcG4Uum0D722UsssxWPhE9M5ts~eiYuOCYOXHjzoqO7T5DgBY5CJ~SvGwQ9HpZp6Pb-hshYPTVVgnkyyoyTID-FHRFGO~bcZifmXPsDeUsNYmQBAC-I-vrVa-TFYVmv5O3Flvj7h4G~mPXXNAHPJNIFtMhHZBv~6QWyhJAjuRMFHxoRpUhtvCl8arsGW9Uo4BKZ3pzmhtEyCBd84d9YOGISsVeRS9Vx3AS2Iqu4avfZMZioIZi0taeyeg4UUuOkChGVHMEnbEwBR-luhbiLUHgJcNSE6CNkprn7GJwttq2Wv555pALTqhdrwl3mxymL4Zhw__",
      title: "Estudio y gestión de licencias",
      description:
        "Nos encargamos de la tramitación de todas las licencias y permisos necesarios para la construcción y remodelación. Nuestro equipo se asegura de cumplir con todos los requisitos legales y reglamentarios, facilitando un proceso administrativo ágil y sin complicaciones.",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9033/8ac5/8357a3e22da53de222a5d1f0c9589f6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRxAw6AXximhfGDHni6xcG4Uum0D722UsssxWPhE9M5ts~eiYuOCYOXHjzoqO7T5DgBY5CJ~SvGwQ9HpZp6Pb-hshYPTVVgnkyyoyTID-FHRFGO~bcZifmXPsDeUsNYmQBAC-I-vrVa-TFYVmv5O3Flvj7h4G~mPXXNAHPJNIFtMhHZBv~6QWyhJAjuRMFHxoRpUhtvCl8arsGW9Uo4BKZ3pzmhtEyCBd84d9YOGISsVeRS9Vx3AS2Iqu4avfZMZioIZi0taeyeg4UUuOkChGVHMEnbEwBR-luhbiLUHgJcNSE6CNkprn7GJwttq2Wv555pALTqhdrwl3mxymL4Zhw__",
      title: "Diseños de interiores",
      description:
        "Creamos ambientes funcionales y estéticamente agradables, ya sea que estés buscando diseñar un nuevo espacio o renovar uno existente. Nuestro enfoque combina creatividad y pragmatismo para transformar espacios interiores en lugares únicos y confortables.",
    },
  ];

  const membersTeam = [
    {
      name: "Francesc Fullana",
      image:
        "https://s3-alpha-sig.figma.com/img/88b9/be60/439590005eacf67f6fa39eb13faaf915?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f2HxqZQd1dDX2W2izoK-RWBhXzKfF9juHcjjfjaai9Up7WdPp-ZmqivgvUeARzxESkbcfzSfbRadtVT6GGdFWMQS5pYm8il4CR0~YPkEJce3z8nnJ-0fUtg7FvIXqlxWeAX~B3QF~VOYy~9RJWQRRhl7qFju2FzQLM8zz50u1~yQNH0dciFOK5BC2QYs-F69Sby4KkBq7FnCVeNUnIhXVR2BrP9mJbgLrPKJoU717e31srQyxRL~S662EC~3sJTHz0hjYABQ3aEMlA1Iz4lHLLksGN1BlXuU3GRhUMjIWbhXMTK-Ma6Et92mKd1d2OSmMY7m8OblhAYCpY2BqYg55A__",
      profession: "Arquitecto",
      description:
        "Arquitecto y socio fundador de la empresa. Cursó la carrera de arquitecto en la Escuela Superior de Arquitectura de la Universidad Politécnica de Valencia y en la Universidad de Oklahoma, EEUU. Durante sus años de experiencia laboral ha pasado por diferentes despachos de arquitectura y ha trabajado con arquitectos como Patxi Mangado. Todo ello lo ha llevado a participar en proyectos tanto de obra pública como privada y en lugares como Estados Unidos, El Caribe o Mallorca. “Como profesional mi mayor preocupación es no olvidar nunca que el trabajo bien hecho y el éxito sale siempre del trabajo en equipo.”",
    },
    {
      name: "Sergio Piqueras",
      image:
        "https://s3-alpha-sig.figma.com/img/b8e4/1836/4f43e924cc7fd92da7b1e4fb19d09043?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fHdrxkmPb6IUa1VFSonQXvnzI-8becgo0TxzEts4ggDQ9-sEKyHcWICuvrlRCF0B5q4pCVeyOfGRVvEXIlmTz3R~PtdQlquROMyZJZinatNIHfPX~gIUKk7-UCNYRjFzvpjtYJMyoXYqgOvty-oYYYWPrYtuDk~CaER9LOYH6EHolj84a1LLkrTubzUSQdycghAfE1SOoXnPRN2c7MoQ3nRGT0O1-ngzr5ojowj9mQhXyjFug513IKtwuaIobaHRPDQvPHdLSSRh0txyfMHQ2DrDiehAKo2cUfuXKVp6lE9IncZzIP-sb9PLCtkNmdFGCkc3H2wFwfM519NIXlVnrA__",
      profession: "Arquitecto Técnico",
      description:
        "Arquitecto técnico, delineante y socio fundador de la empresa. Inició su incursión en el mundo de la construcción primero como delineante y posteriormente estudiando la carrera de Arquitectura Técnica en la Universidad de les Illes Balears. Su formación laboral la inició en este mismo despacho en el 2001 como delineante del arquitecto Gabriel Fullana, posteriormente una vez concluida su formación de Arquitecto Técnico ha continuado realizando direcciones de obra y coordinaciones. Actualmente coordina su trabajo como Arquitecto Técnico en Fonaments y en el despacho de Jaume Amengual en Santanyí.",
    },
    {
      name: "David Domingo",
      image:
        "https://s3-alpha-sig.figma.com/img/ec54/a7f9/dc91ab3eb9cc838cdbce1273efd6fb16?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYu6KdOEH5aQ3CkQNgmt8cdAxbbXBLzmDwaopK5tegwwMhNbZepAk~PdNTrScyRsgfeN2MWwt28EeFT-McNv9L8uTAL2n6jLsHvy0hGKDAXGraJtJzxUapwZ3H9Fh-OPEvYov17rktvIc7tCPhHvMECjsLmQgv9zsO82ThTam9G96PduHc8nUwJDgpf0YToCofybYodx~QVOLnd804KsWjmOvm8Sr-nGXQ9VgRssTntoQ2DZo1GdGHkPMDp-wP6VgFUlzbOm96pii5~FM5cXmkyhI68krFxc9GgP3Iwb1mkgZtEvT2XzmqAIn-HaTaONrnnH40rQXKJdHc~nkADCbA__",
      profession: "Arquitecto Técnico",
      description:
        "Arquitecto técnico, ingeniero de la edificación y máster en restauración del patrimonio arquitectónico. Desde su titulación y sus inicios en el mundo laboral en su Segovia natal, ha trabajado en varios puntos de la geografía española, así como en Alemania, teniendo experiencia en muchos campos de la arquitectura, la ingenería y el diseño.",
    },
  ];

  return (
    <div className="container page-study">
      <section className="flex flex-col lg:flex-row lg:justify-between">
      <h1 className="pt-[4px] lg:pt-[0px]">Estudio</h1>
        <p className="pt-[14px] lg:pt-[37px] lg:w-[803px] text-[16px] leading-[22px] lg:text-[26px] lg:leading-[32px]">
          En Fonaments Arquitectura, cada proyecto es una colaboración en la que
          la comunicación y la transparencia son clave. Nuestro equipo
          multidisciplinario trabaja de manera coordinada para ofrecer
          soluciones integrales que se adapten a tus necesidades y superen tus
          expectativas. Desde el concepto inicial hasta la finalización, nos
          aseguramos de que cada detalle sea considerado y cada desafío,
          superado.
        </p>
      </section>
      <section className="pt-[50px] lg:pt-[367px]">
        <StudySection services={services} membersTeam={membersTeam}/>
      </section>
    </div>
  );
}

export default Study;
