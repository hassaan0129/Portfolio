import { useEffect, useRef, type DependencyList } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Runs `callback` inside a gsap.context() scoped to sectionRef (or the
 * document if no ref given), and reverts all tweens/ScrollTriggers created
 * inside it on unmount or when deps change. Mirrors the ergonomics of
 * @gsap/react's useGSAP without adding the extra dependency.
 */
export function useGSAP(
  callback: (context: gsap.Context) => void | (() => void),
  deps: DependencyList = []
) {
  const scopeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx);
    }, scopeRef.current ?? undefined);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}