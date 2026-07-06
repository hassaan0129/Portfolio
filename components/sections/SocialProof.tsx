"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { TESTIMONIALS } from "@/constants/content";

const STATS = [
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 50, suffix: "M+", label: "Views generated" },
  { value: 48, suffix: "hr", label: "Average turnaround" },
];

export function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    if (prefersReducedMotion()) {
      gsap.set(".stat-value", { innerText: (i, el) => el.dataset.value });
      return;
    }

    document.querySelectorAll<HTMLElement>(".stat-value").forEach((el) => {
      const target = Number(el.dataset.value);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => (el.textContent = Math.round(obj.val).toString()),
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    });

    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".testimonial-track", start: "top 80%" },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--bg-primary)] py-32"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="proof-heading" className="sr-only">
          Results and client feedback
        </h2>

        <div className="mb-24 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                <span className="stat-value" data-value={stat.value}>
                  0
                </span>
                {stat.suffix}
              </div>
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal scroll testimonial track */}
      <div className="testimonial-track flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TESTIMONIALS.map((t) => (
          <blockquote
            key={t.name}
            className="testimonial-card w-[320px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:w-[380px]"
          >
            <p className="text-body mb-6">&ldquo;{t.quote}&rdquo;</p>
            <footer>
              <p className="text-sm font-medium text-white">{t.name}</p>
              <p className="text-xs text-white/40">{t.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}