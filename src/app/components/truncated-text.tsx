"use client";

import React, { useState, useEffect, useRef } from "react";

interface TruncatedTextProps {
  content: string;
  className?: string;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
  content,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      const isOverflowing = element.scrollHeight > element.clientHeight;
      setIsTruncated(isOverflowing);
    }
  }, [content]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="lg:min-h-[366px]">
      <div
        ref={contentRef}
        className={`${className} ${
          isExpanded ? "" : "line-clamp-[12] lg:line-clamp-[10]"
        }`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {isTruncated && (
        <div className="flex items-center block mt-[32px]">
          <button
            onClick={toggleExpand}
            className={`text-[16px] leading-[22px] lg:text-[14px] lg:leading-[14px] font-medium underline cursor-pointer`}
          >
            {isExpanded ? "Leer menos" : "Leer más"}
          </button>
        </div>
      )}
    </div>
  );
};

export default TruncatedText;
