"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ScrollRevealText = ({ text, className = "" }) => {
  const containerRef = useRef(null);

  // Split text into words so we can animate them individually
  const words = text.split(" ");

  useGSAP(
    () => {
      gsap.fromTo(
        ".reveal-word",
        {
          opacity: 0.15, // Starts very light
        },
        {
          opacity: 1, // Fades into original text color
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // When the top of the container hits 80% down the viewport
            end: "bottom 50%", // When the bottom of the container hits 50% down the viewport
            scrub: true, // Smoothly link to scroll position
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="reveal-word inline-block mr-[0.25em]">
          {word}
        </span>
      ))}
    </div>
  );
};

export default ScrollRevealText;
