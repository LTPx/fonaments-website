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
    <div>
      <div
        ref={contentRef}
        className={`${className} ${isExpanded ? "" : "line-clamp-[14]"}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {isTruncated && (
        <div className="flex items-center block mt-4">
          <button
            onClick={toggleExpand}
            className={`text-[16px] leading-[22px] lg:text-[26px] lg:leading-[32px] font-medium underline cursor-pointer`}
          >
            {isExpanded ? "Show Less" : "Read On"}
          </button>
        </div>
      )}
    </div>
  );
};

export default TruncatedText;
