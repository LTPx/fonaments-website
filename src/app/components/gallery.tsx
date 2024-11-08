"use client";
import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { GalleryProjectWp } from "../_interfaces/wordpress-components";

export interface GalleryProps {
  gallery: GalleryProjectWp[];
}

export function Gallery({ gallery }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  let i = 0;
  return (
    <section className="flex flex-col gap-3">
      {(() => {
        const elements = [];

        while (i < gallery.length) {
          const { layout, image } = gallery[i];

          if (layout === "full-width") {
            elements.push(
              <div key={i} className="grid grid-cols-1 gap-3">
                <button
                  type="button"
                  className="col-span-1"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={image.url}
                    className="object-cover object-center rounded-[10px] lg:rounded-[0px] h-[251px] md:h-[500px] lg:h-[800px] w-full"
                    alt={`Gallery image ${i + 1}`}
                    data-fancybox="gallery"
                  />
                </button>
              </div>
            );
            i++;
          } else if (layout === "half-width") {
            if (gallery[i + 1]?.layout === "half-width") {
              elements.push(
                <div key={i} className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="col-span-1"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={image.url}
                      className="object-cover object-center rounded-[10px] lg:rounded-[0px] h-[250px] md:h-[500px] lg:h-[1001px] w-full"
                      alt={`Gallery image ${i + 1}`}
                      data-fancybox="gallery"
                    />
                  </button>
                  <button
                    type="button"
                    className="col-span-1"
                    onClick={() => openLightbox(i + 1)}
                  >
                    <img
                      src={gallery[i + 1].image.url}
                      className="object-cover object-center rounded-[10px] lg:rounded-[0px] h-[250px] md:h-[500px] lg:h-[1001px] w-full"
                      alt={`Gallery image ${i + 2}`}
                      data-fancybox="gallery"
                    />
                  </button>
                </div>
              );
              i += 2;
            } else {
              elements.push(
                <div key={i} className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="col-span-1"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={image.url}
                      className="object-cover object-center rounded-[10px] lg:rounded-[0px] h-[250px] md:h-[500px] lg:h-[1001px] w-full"
                      alt={`Gallery image ${i + 1}`}
                      data-fancybox="gallery"
                    />
                  </button>
                  <div className="col-span-1"></div>
                </div>
              );
              i++;
            }
          }
        }

        return elements;
      })()}

      {isOpen && (
        <Lightbox
          mainSrc={gallery[photoIndex].image.url}
          nextSrc={gallery[(photoIndex + 1) % gallery.length].image.url}
          prevSrc={
            gallery[(photoIndex + gallery.length - 1) % gallery.length].image
              .url
          }
          onCloseRequest={() => setIsOpen(false)}
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % gallery.length)
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
          }
        />
      )}
    </section>
  );
}

export default Gallery;
