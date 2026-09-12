"use client";

import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { VolumetricLight } from "@/components/ui/VolumetricLight";

const HERO_CARDS = [
  {
    label: "Creative formats",
    value: "AI UGC, VSLs, motion",
    position: "lg:absolute lg:right-[4%] lg:top-[22%] lg:rotate-[4deg]",
  },
  {
    label: "White-label delivery",
    value: "Confidential, agency-ready production",
    position: "lg:absolute lg:right-[6%] lg:top-[56%] lg:-rotate-[3deg]",
  },
];

const HERO_CAPABILITIES = [
  "AI UGC ads",
  "VSL editing",
  "Motion graphics",
  "AI video generation",
  "Script and hooks",
  "White-label support",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const kineticTextRef = useRef<HTMLSpanElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [loaderPct, setLoaderPct] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      Promise.resolve().then(() => {
        setLoaderPct(100);
        setLoaded(true);
      });
      return;
    }
    const obj = { pct: 0 };
    gsap.to(obj, {
      pct: 100,
      duration: 1.4,
      ease: "power4.inOut",
      onUpdate: () => setLoaderPct(Math.round(obj.pct)),
      onComplete: () => setLoaded(true),
    });
  }, []);

  useEffect(() => {
    if (!loaded || !headlineRef.current || !sectionRef.current || !kineticTextRef.current) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(
          [
            headlineRef.current,
            ".hero-badge",
            ".hero-subtext",
            ".hero-buttons",
            ".hero-capability-card",
            ".hero-shape",
            scrollIndicatorRef.current,
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "transform" }
        );
        return;
      }

      const split = new SplitType(headlineRef.current!, { types: "lines,words,chars" });
      const kineticSplit = new SplitType(kineticTextRef.current!, { types: "chars" });

      if (split.lines) {
        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.style.overflow = "hidden";
          wrapper.style.display = "block";
          wrapper.style.paddingTop = "10px";
          wrapper.style.marginTop = "-10px";
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(".hero-badge", { opacity: 1, y: 0, duration: 1.2 })
        .fromTo(
          split.lines,
          { yPercent: 100 },
          { yPercent: 0, duration: 1.2, stagger: 0.15 },
          "-=0.8"
        )
        .to(".hero-subtext", { opacity: 1, duration: 1 }, "-=0.6")
        .to(".hero-buttons", { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" }, "-=0.6")
        .to(
          ".hero-capability-card",
          {
            opacity: 1,
            x: 0,
            rotate: (i, el) => el.dataset.rotation || 0,
            duration: 1.4,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.8"
        )
        .to(".hero-shape", { opacity: 1, duration: 1.5 }, "-=1")
        .to(scrollIndicatorRef.current, { opacity: 0.4, duration: 1 }, "-=0.5");

      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });

      const handleKineticHover = () => {
        gsap.to(kineticSplit.chars, {
          color: "#ffffff",
          duration: 0.3,
          stagger: 0.03,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
          repeatDelay: 0.1,
        });
      };

      kineticTextRef.current?.addEventListener("mouseenter", handleKineticHover);

      return () => {
        kineticTextRef.current?.removeEventListener("mouseenter", handleKineticHover);
        split.revert();
        kineticSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden bg-[var(--bg-primary)] pt-32 pb-8 sm:pt-36 sm:pb-12 lg:pt-40"
    >
      {!loaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)]">
          <span className="font-mono text-sm tracking-[0.3em] text-white/70">
            {String(loaderPct).padStart(3, "0")}%
          </span>
        </div>
      )}

      <div className="noise-overlay" aria-hidden="true" />
      <VolumetricLight className="hero-shape opacity-0" />

      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 sm:px-10"
        style={{ visibility: loaded ? "visible" : "hidden" }}
      >
        <div className="flex max-w-3xl flex-col items-center text-center lg:items-start lg:text-left xl:max-w-4xl">
          <span className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--highlight)]/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--highlight)] opacity-0 will-change-transform sm:text-xs">
            <span aria-hidden="true">*</span>
            VIDEO AD CREATIVE FOR AGENCIES
          </span>

          <h1 ref={headlineRef} className="text-hero pb-4 font-serif text-white">
            Performance Ad Creatives for Agencies
            <br className="hidden md:inline" />
            {" "}That Need More{" "}
            <span ref={kineticTextRef} className="cursor-default text-[var(--highlight)] italic transition-colors">
              Production Capacity
            </span>
          </h1>

          <p className="hero-subtext text-body mt-4 max-w-lg opacity-0 will-change-[opacity]">
            I help performance marketing agencies produce AI UGC ads, VSLs, motion graphics, and creative variations without you hiring another full-time editor.
          </p>

          <div className="hero-buttons mt-8 flex w-full scale-95 flex-col items-center justify-center gap-4 opacity-0 will-change-transform sm:w-auto sm:flex-row lg:justify-start">
            <MagneticButton className="w-full sm:w-auto" href="#contact">
              Start a Paid Trial
            </MagneticButton>
            <MagneticButton variant="ghost" className="w-full sm:w-auto" href="#work">
              View My Work
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block" style={{ visibility: loaded ? "visible" : "hidden" }}>
        <div className="relative mx-auto h-full w-full max-w-7xl">
          {HERO_CARDS.map((card) => (
            <div
              key={card.label}
              data-rotation={card.position.includes("-rotate") ? -3 : 4}
              className={`hero-capability-card w-72 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left opacity-0 backdrop-blur-md will-change-transform ${card.position}`}
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--highlight)]">
                {card.label}
              </p>
              <p className="text-lg font-medium leading-snug text-white">{card.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="hero-subtext relative z-10 mt-10 w-full px-6 opacity-0 will-change-[opacity] sm:px-10 lg:mt-12"
        style={{ visibility: loaded ? "visible" : "hidden" }}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
            {HERO_CAPABILITIES.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur-sm sm:px-4 sm:py-2"
              >
                {item}
              </span>
            ))}
          </div>

          <div
            ref={scrollIndicatorRef}
            className="hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white/55 opacity-0 will-change-transform lg:flex"
          >
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
