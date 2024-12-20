"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import ProjectCard from "./project-card";
import "swiper/swiper-bundle.css";
import type { Swiper as SwiperType } from "swiper";
import { WordPressProject } from "../_interfaces/wordpress-project";
import MotionLogo from "./motion-logo";

interface AnimationCarouselProps {
  projects: WordPressProject[];
}

export function AnimationCarousel(props: AnimationCarouselProps) {
  const { projects } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isCarouselFinished, setIsCarouselFinished] = useState(false);
  const [hasReachedEndOnce, setHasReachedEndOnce] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowCarousel(true);
      setTimeout(() => setIsVisible(true), 1200);
    }, 800);

    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width <= 1023);
      setIsLargeScreen(width >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      history.pushState(null, document.title, location.href);
    };
    history.pushState(null, document.title, location.href);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    const isEnd = swiper.isEnd;
    const isStart = swiper.isBeginning;
    setIsFirstSlide(isStart);

    if (isEnd) {
      setHasReachedEndOnce(true);
      setTimeout(() => {
        setIsLastSlide(true);
      }, 1000);
    } else {
      setIsLastSlide(false);
    }

    setIsCarouselFinished(isEnd);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const mousewheel = swiperRef.current.params.mousewheel;
      if (typeof mousewheel === "object" && mousewheel !== null) {
        mousewheel.forceToAxis = isLastSlide;
      } else {
        swiperRef.current.params.mousewheel = {
          forceToAxis: isLastSlide,
        };
      }
    }
  }, [isLastSlide]);

  const mousewheelConfig =
    projects.length > 3 ? { forceToAxis: isLastSlide } : false;

  return (
    <div>
      <Swiper
        modules={[Navigation, Mousewheel, Keyboard]}
        spaceBetween={15}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        keyboard={{ enabled: true }}
        style={{
          position: "relative",
          zIndex: 10,
        }}
        mousewheel={mousewheelConfig}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        loop={false}
        speed={800}
      >
        <MotionLogo />
        {showCarousel && (
          <>
            <div
              className={`transition-opacity duration-700 ${
                showCarousel ? "opacity-100" : "opacity-0"
              }`}
              style={{
                position: "relative",
                zIndex: 20,
              }}
            >
              {projects.map((item, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    position: "relative",
                    zIndex: 20,
                  }}
                >
                  <Link href={`/projects/${item.slug}`}>
                    <div
                      className={`transition-opacity duration-700 ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        position: "relative",
                        zIndex: 20,
                        transitionDelay: `${index * 400}ms`,
                      }}
                    >
                      <ProjectCard
                        className="h-[456px] lg:h-[50vh] xl:h-[52vh]"
                        title={item.title.rendered}
                        image={item.acf.cover_image_project.sizes.large}
                        imageHover={
                          item.acf.hover_image
                            ? item.acf.hover_image.sizes.large
                            : ""
                        }
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </>
        )}
        <div
          className={`flex justify-between ${showCarousel ? "" : "invisible"}`}
        >
          <button className="arrow-left arrow">
            <img
              src="/images/icons/arrow-left.svg"
              className={`invert-custom ${
                isFirstSlide ? "opacity-25 cursor-not-allowed" : ""
              }`}
              style={{
                position: "relative",
                width: "45px",
                zIndex: 500,
              }}
            />
          </button>
          <div className="carousel-right">
            <button
              className={`arrow-right arrow`}
              disabled={isLastSlide}
              onClick={(e) => {
                if (isLastSlide) e.preventDefault();
              }}
            >
              <img
                src="/images/icons/arrow-right.svg"
                className={`invert-custom ${
                  isLastSlide ? "opacity-25 cursor-not-allowed" : ""
                }`}
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
