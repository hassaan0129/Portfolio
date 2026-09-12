"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { Reveal } from "@/components/animations/Reveal";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--bg-secondary)] px-6 py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal selector=".about-line">
          <p className="about-line mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
            About
          </p>
          <h2
            id="about-heading"
            className="about-line mb-8 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl"
          >
            Video ad creative for performance marketing agencies.
          </h2>
          <p className="about-line text-body max-w-md">
            I&apos;m Hamza Mudassir, a video ad creative helping performance and marketing agencies produce more ad creatives without expanding their internal editing team.
          </p>
          <p className="about-line text-body mt-4 max-w-md">
            I handle the edit end to end: hooks, pacing, captions, sound design, and platform-ready formatting for AI UGC ads, VSLs, and motion graphics.
          </p>
          <p className="about-line text-body mt-4 max-w-md">
            My experience comes from producing real ad creatives within an agency environment, and I now bring that production experience directly to selected agency partners.
          </p>
        </Reveal>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/40">
          <div
            ref={imageRef}
            className="absolute inset-0 -top-10 bg-gradient-to-br from-white/10 via-transparent to-[var(--highlight)]/10"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
