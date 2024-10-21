import Link from "next/link";
import Carousel from "./carousel";

interface imagesProps {
  imageUrl: string;
  title: string;
}

interface HeaderCarouselProps {
  items: imagesProps[];
}

export function HeaderCarousel(props: HeaderCarouselProps) {
  const { items } = props;

  return (
    <Carousel slidesNumber={3}>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} className="h-[456px] xl:h-[600px] object-cover w-full" />
          <p className="font-medium text-[14px] leading-[26px]">{item.title}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default HeaderCarousel;
