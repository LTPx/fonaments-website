"use client";
import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

export interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const renderGroup = (startIndex: number) => (
    <>
      <div className="grid grid-cols-1 gap-3">
        <button
          type="button"
          className="col-span-1"
          onClick={() => openLightbox(startIndex)}
        >
          <img
            src={images[startIndex]}
            className="object-cover object-center rounded-[10px] lg:rounded-[0px] h-[251px] md:h-[500px] lg:h-[800px] w-full"
            alt={`Gallery image ${startIndex + 1}`}
            data-fancybox="gallery"
          />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {images.slice(startIndex + 1, startIndex + 3).map((image, index) => (
          <button
            key={startIndex + index + 1}
            type="button"
            className="col-span-1"
            onClick={() => openLightbox(startIndex + index + 1)}
          >
            <img
              src={image}
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
      {images.length > 3 && renderGroup(3)}
      {images.length > 6 && renderGroup(6)}

      {images.length > 9 && (
        <>
          {images.slice(9).map((image, index) => (
            <div key={index + 9} className="grid grid-cols-1 gap-3">
              <button
                type="button"
                className="col-span-1"
                onClick={() => openLightbox(index + 9)}
              >
                <img
                  src={image}
                  className="object-cover object-center rounded-[10px] lg:rounded-[0px] h-[251px] md:h-[500px] lg:h-[800px] w-full"
                  alt={`Gallery image ${index + 10}`}
                  data-fancybox="gallery"
                />
              </button>
            </div>
          ))}
        </>
      )}

      {/* <div className="flex justify-center">
        <p
          className="text-[14px] leading-[14px] lg:text-[20px] lg:leading-[28px] text-primary underline cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          More images
        </p>
      </div> */}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
        />
      )}
    </section>
  );
}

export default Gallery;
