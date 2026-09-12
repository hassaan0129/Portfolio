"use client";

import { useRef } from "react";
import { Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/animations/Reveal";
import { SITE } from "@/constants/site";

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[var(--bg-secondary)] px-6 py-32"
      aria-labelledby="contact-heading"
    >
      <Reveal selector=".contact-fade">
        <div className="mx-auto max-w-2xl text-center">
          <p className="contact-fade mb-4 text-xs uppercase tracking-[0.35em] text-white/60">
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="contact-fade mb-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Let&apos;s talk about your next ad.
          </h2>
          <p className="contact-fade text-body mx-auto mb-12 max-w-xl">
            Send me an email with your project details, or connect on LinkedIn. I reply within a day or two.
          </p>

          <div className="contact-fade flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href={`mailto:${SITE.email}`} className="w-full sm:w-auto">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Me
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <span className="flex h-4 w-4 items-center justify-center text-xs font-bold" aria-hidden="true">
                in
              </span>
              Connect on LinkedIn
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--bg-primary)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a
          href="#"
          className="group text-lg font-semibold tracking-tight text-white transition-colors"
        >
          {SITE.name}
          <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--highlight)] align-middle opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
        <p className="text-xs text-white/60">
          Copyright {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-xs text-white/60">
          <a href="#work" className="transition-colors hover:text-white">View My Work</a>
          <a href="#contact" className="transition-colors hover:text-white">Get in Touch</a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
          <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
