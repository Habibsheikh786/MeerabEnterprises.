"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade + Slide from Bottom
    gsap.utils.toArray<HTMLElement>("section").forEach((section, i) => {
      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: i * 0.1,
      });
    });

    // Animate Headings
    gsap.utils.toArray<HTMLElement>("h2").forEach((heading) => {
      gsap.from(heading, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate Paragraphs
    gsap.utils.toArray<HTMLElement>("p").forEach((para) => {
      gsap.from(para, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: para,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate Images
    gsap.utils.toArray<HTMLElement>("img").forEach((img) => {
      gsap.from(img, {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return null;
}
