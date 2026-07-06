"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { PROCESS_STEPS } from "@/constants/content";

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        }
      );
    }

    gsap.from(".process-step", {
      opacity: 0,
      x: -24,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--bg-secondary)] px-6 py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
          How it works
        </p>
        <h2
          id="process-heading"
          className="mb-20 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          Five stages. No surprises.
        </h2>

        <div className="relative pl-10">
          <div className="absolute left-0 top-1 h-full w-px bg-white/10" aria-hidden="true" />
          <div
            ref={lineRef}
            className="absolute left-0 top-1 h-full w-px bg-[var(--highlight)]"
            aria-hidden="true"
          />

          <ol className="space-y-16">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.label} className="process-step relative">
                <span
                  className="absolute -left-[46px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[var(--bg-secondary)] text-[10px] text-white/60"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-xl font-medium text-white">
                  {step.label}
                </h3>
                <p className="text-body max-w-lg">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}