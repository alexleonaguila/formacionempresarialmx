import { useEffect, useRef } from "react";

/**
 * Observa un elemento y añade la clase `in-view` cuando entra al viewport.
 * Funciona con las clases CSS `.reveal`, `.reveal-left`, `.reveal-scale`.
 * También activa los hijos directos con `.stagger` si el elemento padre las tiene.
 */
export function useInView<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
