"use client";

import { Link } from "@/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import ProjectCard from "./project-card";
import { WordPressPost } from "../_interfaces/wordpress";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";

interface AnimationCarouselProps {
  projects: WordPressPost[];
}

export function AnimationCarousel(props: AnimationCarouselProps) {
  const { projects } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative z-40">
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={15}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        mousewheel={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={false}
        speed={1000}
        className={`transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={`/projects/${item.slug}`}>
              <ProjectCard
                className="h-[456px] lg:h-[50vh] xl:h-[52vh]"
                title={item.title.rendered}
                image={item._embedded["wp:featuredmedia"][0].source_url}
                imageHover={
                  "https://s3-alpha-sig.figma.com/img/b0ec/1da8/205f0bec1ed743c9339f5dc9d99bb8e9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NhcIzXBMUi8I10tWwPeCV-7SnXiEEWlil1kByWeJwAvW6Go8OdGINKhq6DnFb6vajTT~~yI0yXMVTDdrnMm~rQXzpFjt603UHXNsTbSXmuv~NZoFDVb9NtyL0~btkFw9iOgzGZzP2OMeh60V49-XYVIq98MCKrlyQcbyr~jGAEPWreinUczNftiiTrPawOyoKxaHSB~xFjZdcqixBH1aClRSH~p0YRjumHiWJw7MLHAeLAwpAcvQcNF-O-7AFePVS1YawDQ731qqI33Wr9XtRXgUHzbYMzHbOv7cdRRudYZwoNLbqln9us9xmsXo3j7GwpLZSAKZF7S6LUwynBfb8g__"
                }
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="flex justify-between">
          <button className="arrow-left arrow">
            <img
              src="/images/icons/arrow-left.svg"
              style={{
                position: "relative",
                width: "45px",
                zIndex: 500,
              }}
            />
          </button>
          <div className="carousel-right">
            <button className="arrow-right arrow ">
              <img
                src="/images/icons/arrow-right.svg"
                style={{
                  right: "10px",
                  position: "relative",
                  width: "45px",
                  zIndex: 500,
                }}
              />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default AnimationCarousel;
