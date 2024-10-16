"use client";

import { useState } from "react";
import Gallery from "./gallery";

interface Props {
  imageUrl: string;
  title: string;
}

interface ProjectDetailsProps {
  projects?: Props[];
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const { projects } = props;
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
          <div></div>
          <div className="flex gap-[14px]">
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
          <p className="text-[16px] leading-[22px] lg:text-[20px] lg:leading-[26px]">
            En este proyecto nos encontramos con un edificio de alto valor
            arquitectónico e histórico, al que le sumamos el reto añadido de
            convertir su antiguo uso industrial en vivienda. El objetivo
            principal es hacer de este espacio una vivienda confortable y
            práctica, siempre respetando y resaltando al máximo todos los
            elementos existentes sobre los que estamos actuando. Se trata de un
            ejercicio casi quirúrgico en el cual los nuevos espacios se
            articulan siempre entorno a la arquitectura existente y cediéndole a
            ésta todo el protagonismo. El resultado es una vivienda dividida en
            dos plantas, entre las cuales hemos abierto un gran hueco a doble
            altura que permite que nada más entrar en el edificio ya se perciba
            el imponente espacio de la primera planta, sus columnas y techos de
            madera. Con un estilo actual pero adaptado al espacio existente, el
            mobiliario y la iluminación son casi los únicos elementos que
            articulan la distribución de los espacios en planta piso. En este
            proyecto nos encontramos con un edificio de alto valor
            arquitectónico e histórico, al que le sumamos el reto añadido de
            convertir su antiguo uso industrial en vivienda. El objetivo
            principal es hacer de este espacio una vivienda confortable y
            práctica, siempre respetando y resaltando al máximo todos los
            elementos existentes sobre los que estamos actuando. Se trata de un
            ejercicio casi quirúrgico en el cual los nuevos espacios se
            articulan siempre entorno a la arquitectura existente y cediéndole a
            ésta todo el protagonismo.En colaboracion con el estudio de
            interiorismo DKAT Design.
          </p>
        </div>
      </div>
      <section className="pt-[88px]">
        <Gallery images={images} />
      </section>
      <section className="pt-[7px] pb-[53px]">
        <div className="flex justify-between">
          <div className="flex gap-[6px] items-center">
            <img className="cursor-pointer" src="/images/icons/left.svg" />
            <p className="text-[20px] leading-[38px] cursor-pointer">
              Anterior
            </p>
          </div>
          <p className="underline text-[20px] leading-[38px] cursor-pointer">
            Todos los proyectos
          </p>
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
