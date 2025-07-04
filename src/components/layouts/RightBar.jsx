"use client";

import { useEffect, useRef } from "react";
import SearchBar from "../home/SearchBar";
import PopularTags from "../home/PopularTags";
import Recommendations from "../home/Recommendations";
import FoterBar from "./FoterBar";

export default function RightBar() {
  const spacerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const spacer = spacerRef.current;

    if (!content || !spacer || typeof window === "undefined") return;

    const viewHeight = window.innerHeight;
    const contentHeight = content.offsetHeight;

    if (contentHeight <= viewHeight) {
      content.style.top = "0px";
      return;
    }

    const hiddenHeight = contentHeight - viewHeight;
    let lastScrollY = window.scrollY;

    spacer.style.marginTop = "0px";
    content.style.bottom = `${-hiddenHeight}px`;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const contentRect = content.getBoundingClientRect();
      const isScrollingUp = currentScrollY < lastScrollY;

      if (isScrollingUp && !content.style.bottom) {
        spacer.style.marginTop = `${currentScrollY + contentRect.top}px`;

        content.style.top = "";
        content.style.bottom = `${-hiddenHeight}px`;
      }

      if (!isScrollingUp && !content.style.top) {
        spacer.style.marginTop = `${currentScrollY + contentRect.top}px`;
  
        content.style.top = `${-hiddenHeight}px`;
        content.style.bottom = "";
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  return (
    <div className="relative backface-hidden">
      <div className="relative" ref={spacerRef} />
      <div className="sticky flex flex-col gap-5 h-max pb-28" ref={contentRef}>
        <SearchBar />
        <PopularTags />
        <Recommendations />
        <FoterBar />
      </div>
    </div>
  );
}
