"use client";

import { useState } from "react";
import Gallery from "./gallery";
import { Link } from "@/navigation";
import {
  GalleryProjectWp,
  InformationProjectWp,
} from "../_interfaces/wordpress-components";

interface ProjectDetailsProps {
  description_project: string;
  information_project: InformationProjectWp;
  gallery_project: GalleryProjectWp[];
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const { description_project, information_project, gallery_project } = props;
  const images = [
    "https://s3-alpha-sig.figma.com/img/c425/9d7c/756094684b52a1933a88d0a202f6e33d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfggrr~iUqShbB9f6tfX~3Hw5lgTDF0x1kjCN-pAv9WmUNbIjLipFWDmY4fV7M88DNEtmOi641nn2C3Qtph2CLHN9hrMTZmjf~inCVPhcJWIG34mcB6pssDeQXhn7QB1oNvkXoZLxxlKG~b02bpwPkcMbee94UKQ6i2TeCz7eQV8rsXaoe8TPbmF55KQCQ~pT3D~4AnW0y4lcSCpKaWW-Drdi~0-r04WatT205YgOTFRY-kKYwNSShpjEKKqFbQB6pKbJ4zJMoIWnUVwcXR803gBy-VD~Rd7ZZG5bHPgFLFcNLXXRYy31pZItCU-ef1uQCiVo7HGxoKExt~0zzmaTQ__",
    "https://s3-alpha-sig.figma.com/img/c425/9d7c/756094684b52a1933a88d0a202f6e33d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfggrr~iUqShbB9f6tfX~3Hw5lgTDF0x1kjCN-pAv9WmUNbIjLipFWDmY4fV7M88DNEtmOi641nn2C3Qtph2CLHN9hrMTZmjf~inCVPhcJWIG34mcB6pssDeQXhn7QB1oNvkXoZLxxlKG~b02bpwPkcMbee94UKQ6i2TeCz7eQV8rsXaoe8TPbmF55KQCQ~pT3D~4AnW0y4lcSCpKaWW-Drdi~0-r04WatT205YgOTFRY-kKYwNSShpjEKKqFbQB6pKbJ4zJMoIWnUVwcXR803gBy-VD~Rd7ZZG5bHPgFLFcNLXXRYy31pZItCU-ef1uQCiVo7HGxoKExt~0zzmaTQ__",
    "https://s3-alpha-sig.figma.com/img/c425/9d7c/756094684b52a1933a88d0a202f6e33d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfggrr~iUqShbB9f6tfX~3Hw5lgTDF0x1kjCN-pAv9WmUNbIjLipFWDmY4fV7M88DNEtmOi641nn2C3Qtph2CLHN9hrMTZmjf~inCVPhcJWIG34mcB6pssDeQXhn7QB1oNvkXoZLxxlKG~b02bpwPkcMbee94UKQ6i2TeCz7eQV8rsXaoe8TPbmF55KQCQ~pT3D~4AnW0y4lcSCpKaWW-Drdi~0-r04WatT205YgOTFRY-kKYwNSShpjEKKqFbQB6pKbJ4zJMoIWnUVwcXR803gBy-VD~Rd7ZZG5bHPgFLFcNLXXRYy31pZItCU-ef1uQCiVo7HGxoKExt~0zzmaTQ__",
    "https://s3-alpha-sig.figma.com/img/c425/9d7c/756094684b52a1933a88d0a202f6e33d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfggrr~iUqShbB9f6tfX~3Hw5lgTDF0x1kjCN-pAv9WmUNbIjLipFWDmY4fV7M88DNEtmOi641nn2C3Qtph2CLHN9hrMTZmjf~inCVPhcJWIG34mcB6pssDeQXhn7QB1oNvkXoZLxxlKG~b02bpwPkcMbee94UKQ6i2TeCz7eQV8rsXaoe8TPbmF55KQCQ~pT3D~4AnW0y4lcSCpKaWW-Drdi~0-r04WatT205YgOTFRY-kKYwNSShpjEKKqFbQB6pKbJ4zJMoIWnUVwcXR803gBy-VD~Rd7ZZG5bHPgFLFcNLXXRYy31pZItCU-ef1uQCiVo7HGxoKExt~0zzmaTQ__",
    "https://s3-alpha-sig.figma.com/img/c425/9d7c/756094684b52a1933a88d0a202f6e33d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfggrr~iUqShbB9f6tfX~3Hw5lgTDF0x1kjCN-pAv9WmUNbIjLipFWDmY4fV7M88DNEtmOi641nn2C3Qtph2CLHN9hrMTZmjf~inCVPhcJWIG34mcB6pssDeQXhn7QB1oNvkXoZLxxlKG~b02bpwPkcMbee94UKQ6i2TeCz7eQV8rsXaoe8TPbmF55KQCQ~pT3D~4AnW0y4lcSCpKaWW-Drdi~0-r04WatT205YgOTFRY-kKYwNSShpjEKKqFbQB6pKbJ4zJMoIWnUVwcXR803gBy-VD~Rd7ZZG5bHPgFLFcNLXXRYy31pZItCU-ef1uQCiVo7HGxoKExt~0zzmaTQ__",
    "https://s3-alpha-sig.figma.com/img/c425/9d7c/756094684b52a1933a88d0a202f6e33d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfggrr~iUqShbB9f6tfX~3Hw5lgTDF0x1kjCN-pAv9WmUNbIjLipFWDmY4fV7M88DNEtmOi641nn2C3Qtph2CLHN9hrMTZmjf~inCVPhcJWIG34mcB6pssDeQXhn7QB1oNvkXoZLxxlKG~b02bpwPkcMbee94UKQ6i2TeCz7eQV8rsXaoe8TPbmF55KQCQ~pT3D~4AnW0y4lcSCpKaWW-Drdi~0-r04WatT205YgOTFRY-kKYwNSShpjEKKqFbQB6pKbJ4zJMoIWnUVwcXR803gBy-VD~Rd7ZZG5bHPgFLFcNLXXRYy31pZItCU-ef1uQCiVo7HGxoKExt~0zzmaTQ__",
    "https://s3-alpha-sig.figma.com/img/c425/9d7c/756094684b52a1933a88d0a202f6e33d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfggrr~iUqShbB9f6tfX~3Hw5lgTDF0x1kjCN-pAv9WmUNbIjLipFWDmY4fV7M88DNEtmOi641nn2C3Qtph2CLHN9hrMTZmjf~inCVPhcJWIG34mcB6pssDeQXhn7QB1oNvkXoZLxxlKG~b02bpwPkcMbee94UKQ6i2TeCz7eQV8rsXaoe8TPbmF55KQCQ~pT3D~4AnW0y4lcSCpKaWW-Drdi~0-r04WatT205YgOTFRY-kKYwNSShpjEKKqFbQB6pKbJ4zJMoIWnUVwcXR803gBy-VD~Rd7ZZG5bHPgFLFcNLXXRYy31pZItCU-ef1uQCiVo7HGxoKExt~0zzmaTQ__",
    "https://s3-alpha-sig.figma.com/img/c425/9d7c/756094684b52a1933a88d0a202f6e33d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfggrr~iUqShbB9f6tfX~3Hw5lgTDF0x1kjCN-pAv9WmUNbIjLipFWDmY4fV7M88DNEtmOi641nn2C3Qtph2CLHN9hrMTZmjf~inCVPhcJWIG34mcB6pssDeQXhn7QB1oNvkXoZLxxlKG~b02bpwPkcMbee94UKQ6i2TeCz7eQV8rsXaoe8TPbmF55KQCQ~pT3D~4AnW0y4lcSCpKaWW-Drdi~0-r04WatT205YgOTFRY-kKYwNSShpjEKKqFbQB6pKbJ4zJMoIWnUVwcXR803gBy-VD~Rd7ZZG5bHPgFLFcNLXXRYy31pZItCU-ef1uQCiVo7HGxoKExt~0zzmaTQ__",
    "https://s3-alpha-sig.figma.com/img/c425/9d7c/756094684b52a1933a88d0a202f6e33d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfggrr~iUqShbB9f6tfX~3Hw5lgTDF0x1kjCN-pAv9WmUNbIjLipFWDmY4fV7M88DNEtmOi641nn2C3Qtph2CLHN9hrMTZmjf~inCVPhcJWIG34mcB6pssDeQXhn7QB1oNvkXoZLxxlKG~b02bpwPkcMbee94UKQ6i2TeCz7eQV8rsXaoe8TPbmF55KQCQ~pT3D~4AnW0y4lcSCpKaWW-Drdi~0-r04WatT205YgOTFRY-kKYwNSShpjEKKqFbQB6pKbJ4zJMoIWnUVwcXR803gBy-VD~Rd7ZZG5bHPgFLFcNLXXRYy31pZItCU-ef1uQCiVo7HGxoKExt~0zzmaTQ__",
    "https://s3-alpha-sig.figma.com/img/6c9c/f504/e9c1ea704f3b548816cd7ea46c40b0c1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCo6zwTG9982fouRWTgXQBlayCdDmIDIaYHWApneHbxip9JlkUj2IItUPfVjhcgAs-TFMTzIzpLdfEnDyUvXfR4IafWztYITGKU1iFiXoUFXTJ6qrmrUFoyk19JdAUDhcfBZD-gM93ojvT64g8yHYVB4NkYzNTP-zYr6wUedELgRaHwXctgejj46tcEk8iksIARE4GsF1IjliUwZgpEZiJjFVcyRP9MfLcwfmxWQYLlxEVm6PQE7ONc4MeZ9ep03Jc67pAgS2RjVB43z~IGlFaOzy4dpT-9sedj8k03rhwpPpwUVcH-kFsA9TCzoYRYZPly4sJUBZXz-K5fYYkoMCg__",
    "https://s3-alpha-sig.figma.com/img/eb3d/be3f/8521aa5ae4518e9d7e858852f7773547?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aqfeBT7bSg62yeDd87fJECdPMLx4Z-X0a~vexqkn2BQG3mYePz2T1nAFSo55F4j63k~EwvHZqgoPSIoqy0nqnQ4Oc8cWJ0mYgJy6e85PeGXTQHuDPaa8hngh13vdL~2O71BYwAVI4-2RQybhZ6cSAcYtPQyxXCTsHVPQeoLzvaMZRDFIvDn5v-edJlp6oo3AY1p2N9vHLlZ5m2sf5eIoGRsVi4oNRI892myFTwdTOBXGK-U4coURhhYf~dJywl~bSsCG02H0GdphuXKPob-MVAB-9F27H9LU6Xs6jW9Nxy~uTmJu5M4k-Eofkjdvh77zrvsL2HvMgX-xEef5JP2Fhw__",
  ];

  const btns = ["Reforma", "Obra Nueva", "Rustico"];
  const [selectedOption, setSelectedOption] = useState<string>(btns[0]);

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[28px]">
        <div className="flex flex-col justify-between">
          <div>
            <div className="grid grid-cols-3 border-b border-black border-1 pb-[46px]">
              <div className="col-span-1">
                <p className="text-[20px] leading-[26px]">
                  {information_project.code_project.title}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[20px] leading-[26px]">
                  {information_project.code_project.code}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border-b border-black border-1 pb-[46px]">
              <div className="pt-[10px] col-span-1">
                <p className=" text-[20px] leading-[26px]">
                  {information_project.type_work.title}
                </p>
              </div>
              <div className="pt-[10px] col-span-2">
                <p className="text-[20px] leading-[26px]">
                  {information_project.type_work.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border-b border-black border-1 pb-[46px]">
              <div className="pt-[10px] col-span-1">
                <p className="text-[20px] leading-[26px]">
                  {information_project.location.title}
                </p>
              </div>
              <div className="pt-[10px] col-span-2">
                <p className="text-[20px] leading-[26px]">
                  {information_project.location.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 pb-[46px]">
              <div className="pt-[10px] col-span-1">
                <p className="text-[20px] leading-[26px]">
                  {information_project.built_area.title}
                </p>
              </div>
              <div className="pt-[10px] col-span-2">
                <p className="text-[20px] leading-[26px]">
                  {information_project.built_area.area}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[30px] lg:pt-[0px] flex gap-[14px]">
            {btns.map((option, index) => (
              <button
                key={index}
                onClick={() => handleClick(option)}
                className={`font-medium text-[18px] leading-[18px] cursor-pointer border border-[#000000] h-[32px] px-[15px] ${
                  selectedOption === option
                    ? "bg-black text-white rounded-none"
                    : "text-black rounded-full"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div
            className="text-[16px] leading-[22px] lg:text-[20px] lg:leading-[26px]"
            dangerouslySetInnerHTML={{ __html: description_project }}
          />
        </div>
      </div>
      {gallery_project.length > 0 && (
        <section className="pt-[88px]">
          <Gallery gallery={gallery_project} />
        </section>
      )}
      <section className="pt-[15px] pb-[53px]">
        <div className="flex justify-between">
          <div className="flex gap-[6px] items-center">
            <img className="cursor-pointer" src="/images/icons/left.svg" />
            <p className="text-[20px] leading-[38px] cursor-pointer">
              Anterior
            </p>
          </div>
          <Link href={"/projects"}>
            <p className="underline text-[20px] leading-[38px] cursor-pointer">
              Todos los proyectos
            </p>
          </Link>
          <div className="flex gap-[6px] items-center">
            <p className="text-[20px] leading-[38px] cursor-pointer">
              Siguiente
            </p>
            <img className="cursor-pointer" src="/images/icons/right.svg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
