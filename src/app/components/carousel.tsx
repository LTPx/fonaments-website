"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

type CarouselProps = {
  className?: string;
  children: any;
  slidesToScroll?: number;
  slidesNumber: number;
  hideArrows?: boolean;
};

function SampleNextArrow(props: any) {
  const { className, style, onClick, disabled } = props;
  return (
    <div className="absolute bottom-[-35px] lg:bottom-[-40px] right-0">
      <img
        src="/images/icons/arrow-right.svg"
        className={`${className} ${
          disabled ? "opacity-25 cursor-not-allowed" : ""
        }`}
        style={{
          ...style,
          right: "10px",
          position: "relative",
          width: "45px",
          zIndex: 500,
          cursor: disabled && "not-allowed",
        }}
        onClick={!disabled ? onClick : undefined}
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick, disabled } = props;
  return (
    <div className="absolute bottom-[-35px] lg:bottom-[-40px] left-0">
      <img
        src="/images/icons/arrow-left.svg"
        className={`${className} ${
          disabled ? "opacity-25 cursor-not-allowed" : ""
        }`}
        style={{
          ...style,
          left: "0px",
          position: "relative",
          width: "45px",
          zIndex: 500,
          cursor: disabled && "not-allowed",
        }}
        onClick={!disabled ? onClick : undefined}
      />
    </div>
  );
}

export function Carousel(props: CarouselProps) {
  const { children, slidesToScroll, slidesNumber, hideArrows } = props;
  const [isMobile, setIsMobile] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldShowSlider =
    React.Children.count(children) > slidesNumber || isMobile;

  const handleAfterChange = (current: number) => {
    const totalSlides = React.Children.count(children);
    const slidesToShow = isMobile ? 1.1 : slidesNumber;
    const maxIndex = totalSlides - slidesToShow;
    setIsPrevDisabled(current === 0);
    setIsNextDisabled(current >= maxIndex);
  };

  const settings: any = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesNumber ? slidesNumber || 3 : 4,
    slidesToScroll: shouldShowSlider ? slidesToScroll || 1 : 1,
    swipe: isMobile ? true : false,
    touchMove: isMobile ? true : false,
    afterChange: handleAfterChange,
    ...(hideArrows
      ? {}
      : {
          nextArrow: <SampleNextArrow disabled={isNextDisabled} />,
          prevArrow: <SamplePrevArrow disabled={isPrevDisabled} />,
        }),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return shouldShowSlider ? (
    <Slider {...settings}>
      {React.Children.map(children, (child, index) => (
        <div className="pr-[10px] lg:pr-[15px]" key={index}>
          {child}
        </div>
      ))}
    </Slider>
  ) : (
    <div className={`grid grid-cols-${slidesNumber} gap-[15px]`}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="col-span-1">
          {child}
        </div>
      ))}
    </div>
  );
}

export default Carousel;