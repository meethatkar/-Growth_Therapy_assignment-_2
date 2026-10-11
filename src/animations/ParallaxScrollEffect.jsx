"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Parallax movement ranges based on whether the element scales or just translates
const SCALED_Y_RANGE = 40;

/**
 * Shared animation logic for parallax scroll effects.
 * Calculates safe travel bounds based on scale bleed so image edges never expose container gaps.
 *
 * @param {HTMLElement} el - The target element to animate.
 * @param {HTMLElement} trigger - The trigger element for ScrollTrigger.
 * @param {Object} config - Animation configuration.
 * @param {number} config.speed - Speed multiplier for parallax.
 * @param {number} config.scaleAmount - Scale multiplier (defaults to >= 1.12 for seamless bleed).
 * @param {string} config.start - ScrollTrigger start condition.
 * @param {string} config.end - ScrollTrigger end condition.
 * @param {number|boolean} config.scrub - ScrollTrigger scrub setting.
 */
function applyParallax(el, trigger, { speed, scaleAmount, start, end, scrub }) {
  // Ensure we have enough scale bleed so moving yPercent never exposes blank container edges
  const effectiveScale = Math.max(scaleAmount || 1, 1.12);
  const maxBleed = ((effectiveScale - 1) / 2) * 100;
  const safeShift = Math.min(speed * SCALED_Y_RANGE, maxBleed * 0.85);

  gsap.fromTo(
    el,
    {
      scale: effectiveScale,
      yPercent: -safeShift,
    },
    {
      scale: effectiveScale,
      yPercent: safeShift,
      ease: "none",
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
        invalidateOnRefresh: true,
      },
    }
  );
}

/**
 * Hook to apply parallax effects to DOM elements based on data attributes.
 * Looks for [data-scroll-speed] and optional [data-scroll-scale].
 * @param {React.RefObject} containerRef - Ref to the container holding the elements.
 */
export function useDataParallax(containerRef) {
  useGSAP(
    () => {
      if (!containerRef?.current) return;

      const parallaxElements = containerRef.current.querySelectorAll(
        "[data-scroll-speed]"
      );

      parallaxElements.forEach((el) => {
        const rawSpeed = el.getAttribute("data-scroll-speed");
        const speed = parseFloat(rawSpeed) || 0.2;
        const scaleAttr = el.getAttribute("data-scroll-scale");
        const scaleAmount = scaleAttr ? parseFloat(scaleAttr) : 1.15;

        applyParallax(el, el.parentElement || el, {
          speed,
          scaleAmount,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        });
      });
    },
    { scope: containerRef, dependencies: [containerRef] }
  );
}

/**
 * ParallaxScrollEffect Component
 *
 * Reusable wrapper component for GSAP ScrollTrigger parallax effects powered by useGSAP.
 * Accepts any component children (especially Next.js <Image fill />) and applies a smooth parallax scroll effect.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content or Image to animate
 * @param {number} [props.speed=0.2] - Parallax speed multiplier
 * @param {boolean|number} [props.scale=true] - Enables parallax image zoom/bleed (true defaults to 1.15, or pass a number)
 * @param {number} [props.scaleAmount=1.15] - Explicit scale amount if scale is true
 * @param {string} [props.start="top bottom"] - ScrollTrigger start position
 * @param {string} [props.end="bottom top"] - ScrollTrigger end position
 * @param {number|boolean} [props.scrub=0.5] - Scrub smoothness
 * @param {boolean} [props.overflowHidden=true] - Clips overflowing parallax movement
 * @param {string} [props.className=""] - Additional CSS classes for container wrapper
 * @param {string} [props.innerClassName=""] - Additional CSS classes for inner target div
 * @param {React.ElementType} [props.as="div"] - The HTML element to render as
 */
export default function ParallaxScrollEffect({
  children,
  speed = 0.2,
  scale = true,
  scaleAmount = 1.15,
  start = "top bottom",
  end = "bottom top",
  scrub = 0.5,
  overflowHidden = true,
  className = "",
  innerClassName = "",
  as: Component = "div",
  style,
  ...props
}) {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current || !targetRef.current) return;

      const effectiveScale =
        typeof scale === "number"
          ? scale
          : scale === true
          ? scaleAmount
          : 1.12;

      applyParallax(targetRef.current, containerRef.current, {
        speed,
        scaleAmount: effectiveScale,
        start,
        end,
        scrub,
      });
    },
    {
      scope: containerRef,
      dependencies: [speed, scale, scaleAmount, start, end, scrub],
    }
  );

  const hasPosition = /\b(absolute|fixed|sticky)\b/.test(className);

  const classes = [
    !hasPosition ? "relative" : "",
    overflowHidden ? "overflow-hidden" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const innerClasses = [
    "w-full h-full will-change-transform",
    innerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      ref={containerRef}
      data-scroll
      style={style}
      className={classes || undefined}
      {...props}
    >
      <div
        ref={targetRef}
        style={{ position: "relative" }}
        className={innerClasses || undefined}
      >
        {children}
      </div>
    </Component>
  );
}
