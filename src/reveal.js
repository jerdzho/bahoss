// src/reveal.js
export function initReveal(root = document) {
  const els = Array.from(root.querySelectorAll("[data-reveal]"));

  // takoj pokaži (da ne ostane prazno, če IO ne sproži)
  requestAnimationFrame(() => {
    els.forEach((el) => el.classList.add("is-visible"));
  });

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target); // animiraj 1x
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  els.forEach((el) => io.observe(el));
}