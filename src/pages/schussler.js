import "../style.css";
const BASE = import.meta.env.BASE_URL; // npr. "/bahoss/"

const SALTS = [
  { no: "No. 1", name: "Calcium fluoratum", desc: "Placeholder ...", img: `${BASE}img/schussler/calcium-fluoratum.jpg` },
  { no: "No. 2", name: "Calcium phosphoricum", desc: "Placeholder ...", img: `${BASE}img/schussler/calcium-phosphoricum.jpg` },
];



const grid = document.getElementById("saltGrid");

grid.innerHTML = SALTS.map((s) => {
  return `
    <article class="salt-card">
      <div class="salt-card__media" data-img="${s.img || ""}" aria-hidden="true"></div>
      <div class="salt-card__body">
        <div class="salt-card__kicker">${s.no}</div>
        <h3 class="salt-card__title">${s.name}</h3>
        <p class="muted">${s.desc}</p>
      </div>
    </article>
  `;
}).join("");


document.querySelectorAll(".salt-card__media").forEach((el) => {
  const imgUrl = el.getAttribute("data-img");

  el.style.backgroundImage = `
    ${imgUrl ? `url("${imgUrl}"),` : ""}
    radial-gradient(120px 90px at 30% 35%, rgba(215,184,106,.35), transparent 60%),
    radial-gradient(160px 120px at 70% 75%, rgba(47,107,78,.18), transparent 60%),
    linear-gradient(135deg, rgba(255,255,255,.9), rgba(243,245,234,.9))
  `;

  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundPosition = "center";
  el.style.backgroundSize = imgUrl ? "contain, auto, auto, auto" : "auto, auto, auto";
});
