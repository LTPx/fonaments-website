"use client";

import { useTranslations } from "next-intl";
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
  const t = useTranslations();

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const cleanContent = (html: string) => {
    return html
      .replace(/<p>\s*<\/p>/g, "")
      .replace(/<br\s*\/?>/g, "")
      .replace(/\n\s*\n/g, "\n");
  };

  const cleanedContent = cleanContent(content);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      const isOverflowing = element.scrollHeight > element.clientHeight;
      setIsTruncated(isOverflowing);
    }
  }, [cleanedContent]);

  return (
    <div className="lg:min-h-[366px]">
      <div
        ref={contentRef}
        className={`${className} ${
          isExpanded ? "" : "line-clamp-[12] lg:line-clamp-[10]"
        }`}
        dangerouslySetInnerHTML={{ __html: cleanedContent }}
      />
      {isTruncated && (
        <div className="flex items-center block mt-[32px]">
          <button
            onClick={toggleExpand}
            className={`text-[16px] leading-[22px] lg:text-[14px] lg:leading-[14px] font-medium underline cursor-pointer`}
          >
            {isExpanded ? `${t("projectPage.read-less")}` : `${t("projectPage.read-more")}`}
          </button>
        </div>
      )}
    </div>
  );
};

export default TruncatedText;
