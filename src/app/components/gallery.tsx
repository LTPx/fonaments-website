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

  const renderGroup = (startIndex: number) => (
    <>
      {/* Imagen principal que ocupa toda la fila */}
      <div className="grid grid-cols-1 gap-3">
        <button
          type="button"
          className="col-span-1"
          onClick={() => openLightbox(startIndex)}
        >
          <img
            src={gallery[startIndex].image.url}
            className="object-cover object-center rounded-[10px] lg:rounded-[0px] h-[251px] md:h-[500px] lg:h-[800px] w-full"
            alt={`Gallery image ${startIndex + 1}`}
            data-fancybox="gallery"
          />
        </button>
      </div>

      {/* Dos imágenes en la siguiente fila */}
      <div className="grid grid-cols-2 gap-3">
        {gallery.slice(startIndex + 1, startIndex + 3).map((image, index) => (
          <button
            key={startIndex + index + 1}
            type="button"
            className="col-span-1"
            onClick={() => openLightbox(startIndex + index + 1)}
          >
            <img
              src={image.image.url}
              className="object-cover object-center rounded-[10px] lg:rounded-[0px] h-[250px] md:h-[500px] lg:h-[1001px] w-full"
              alt={`Gallery image ${startIndex + index + 2}`}
              data-fancybox="gallery"
            />
          </button>
        ))}
      </div>
    </>
  );

  return (
    <section className="flex flex-col gap-3">
      {renderGroup(0)}
      {gallery.length > 3 && renderGroup(3)}
      {gallery.length > 6 && renderGroup(6)}

      {/* Si hay más imágenes después de la novena */}
      {gallery.length > 9 && (
        <>
          {gallery.slice(9).map((image, index) => (
            <div key={index + 9} className="grid grid-cols-1 gap-3">
              <button
                type="button"
                className="col-span-1"
                onClick={() => openLightbox(index + 9)}
              >
                <img
                  src={image.image.url}
                  className="object-cover object-center rounded-[10px] lg:rounded-[0px] h-[251px] md:h-[500px] lg:h-[800px] w-full"
                  alt={`Gallery image ${index + 10}`}
                  data-fancybox="gallery"
                />
              </button>
            </div>
          ))}
        </>
      )}

      {/* Lightbox para visualizar las imágenes */}
      {isOpen && (
        <Lightbox
          mainSrc={gallery[photoIndex].image.url} 
          nextSrc={gallery[(photoIndex + 1) % gallery.length].image.url}
          prevSrc={gallery[(photoIndex + gallery.length - 1) % gallery.length].image.url}
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
