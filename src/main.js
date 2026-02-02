import "./style.css";

/**
 * Reveal on scroll (+ play once per entry)
 */
const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
      } else {
        e.target.classList.remove("is-visible");
      }
    }
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px", // malo prej skrije, malo prej pokaže
  }
);

revealEls.forEach((el) => io.observe(el));


/**
 * Smooth anchor scrolling (keeps offset for sticky header)
 */
const header = document.querySelector(".header");
const headerH = () => header?.getBoundingClientRect().height ?? 72;

document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;

  const id = a.getAttribute("href");
  if (!id || id === "#") return;

  const target = document.querySelector(id);
  if (!target) return;

  e.preventDefault();
  const top = window.scrollY + target.getBoundingClientRect().top - (headerH() + 10);

  window.scrollTo({ top, behavior: "smooth" });

  // close mobile menu if open
  closeMobile();
});

/**
 * Mobile menu
 */
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

function openMobile() {
  if (!mobileMenu) return;
  mobileMenu.hidden = false;
  burgerBtn?.setAttribute("aria-expanded", "true");
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => mobileMenu.classList.add("is-open"));
}

function closeMobile() {
  if (!mobileMenu) return;
  burgerBtn?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("no-scroll");
  mobileMenu.classList.remove("is-open");
  // allow transition then hide
  window.setTimeout(() => {
    if (burgerBtn?.getAttribute("aria-expanded") === "false") mobileMenu.hidden = true;
  }, 180);
}

burgerBtn?.addEventListener("click", () => {
  const expanded = burgerBtn.getAttribute("aria-expanded") === "true";
  expanded ? closeMobile() : openMobile();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobile();
});

/**
 * Scroll progress bar
 */
const bar = document.getElementById("scrollbarBar");
function updateScrollBar() {
  if (!bar) return;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = h <= 0 ? 0 : (window.scrollY / h) * 100;
  bar.style.width = `${Math.min(100, Math.max(0, p))}%`;
}
window.addEventListener("scroll", updateScrollBar, { passive: true });
updateScrollBar();

/**
 * Gentle parallax in hero
 */
const heroCard = document.getElementById("heroCard");
const floats = Array.from(document.querySelectorAll(".float"));
function updateParallax() {
  const y = window.scrollY;
  if (heroCard) heroCard.style.transform = `translateY(${Math.min(18, y * 0.03)}px)`;
  floats.forEach((el, i) => {
    const k = 0.06 + i * 0.015;
    el.style.transform = `translateY(${Math.min(28, y * k)}px)`;
  });
}
window.addEventListener("scroll", updateParallax, { passive: true });
updateParallax();

/**
 * Subtle tilt on hover for elements with [data-tilt]
 */
const tiltEls = Array.from(document.querySelectorAll("[data-tilt]"));
tiltEls.forEach((el) => {
  let raf = 0;

  const onMove = (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;  // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1
    const rx = (0.5 - py) * 6; // degrees
    const ry = (px - 0.5) * 8;

    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    });
  };

  const onLeave = () => {
    cancelAnimationFrame(raf);
    el.style.transform = "";
  };

  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
});

/**
 * Year in footer
 */
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

/**
 * Demo form: prevent submit
 */
document.querySelectorAll("form").forEach((f) => {
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = f.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = "Poslano ✓";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = "Pošlji";
        btn.disabled = false;
        f.reset();
      }, 1200);
    }
  });
});
