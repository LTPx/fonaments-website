"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface HomeInformationProps {
  title: string;
  description: string;
}


export function HomeInformation(props: HomeInformationProps) {
  const { title, description } = props;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, 600);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="lg:mr-[7.5px] flex flex-col lg:grid lg:grid-cols-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="hidden lg:block col-span-1"></div>
      <div className="col-span-2 flex flex-col gap-[23px]">
        <h2 className="leading-[44px] xl:w-[719px]">{title}</h2>
        <div
          className="xl:w-[692px] text-[1em] leading-[22px] lg:text-[1.25em] lg:leading-[28px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </motion.div>
  );
}

export default HomeInformation;
