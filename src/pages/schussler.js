import "../style.css";

const SALTS = [
  { no: "No. 1", name: "Calcium fluoratum", desc: "Placeholder opis – za kaj se uporablja, kratko." },
  { no: "No. 2", name: "Calcium phosphoricum", desc: "Placeholder opis – zamenjaš kasneje." },
  // dodaj ostale...
];

const grid = document.getElementById("saltGrid");

grid.innerHTML = SALTS.map((s) => {
  const slug = s.name.toLowerCase().replace(/\s+/g, "-");
  const img = `./img/schussler/${slug}.jpg`; // optional
  return `
    <article class="salt-card">
      <div class="salt-card__media" style="background-image:url('${img}')" aria-hidden="true"></div>
      <div class="salt-card__body">
        <div class="salt-card__kicker">${s.no}</div>
        <h3 class="salt-card__title">${s.name}</h3>
        <p class="muted">${s.desc}</p>
      </div>
    </article>
  `;
}).join("");
