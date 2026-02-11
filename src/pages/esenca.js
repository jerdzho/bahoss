import "../style.css";

const ESSENCES = [
  {
    slug: "agrimony",
    name: "Agrimony",
    lead: "Ko navzven deluješ v redu, znotraj pa držiš napetost.",
    when: "Pretvarjanje, da je vse ok; notranji nemir; izogibanje konfliktu.",
    goal: "Več iskrenosti do sebe, več miru brez maske.",
    body: `
      <p>Agrimony je pogosto povezano z “nasmehom čez vse”, ko se v ozadju nabira napetost.</p>
      <ul>
        <li>Tipično: humor kot obramba, izogibanje težkim pogovorom.</li>
        <li>Podpora: da lažje poveš, kaj res čutiš.</li>
      </ul>
      <p>Dodaj tukaj svoj dolg opis (lahko več odstavkov).</p>
    `,
    tags: ["notranja napetost", "maskiranje", "mir"],
  },
  {
    slug: "aspen",
    name: "Aspen",
    lead: "test",
    when: "test",
    goal: "test",
    body: `<p>test</p>`,
    tags: ["test"],
  },
];

const params = new URLSearchParams(location.search);
const slug = params.get("e");

const item = ESSENCES.find((x) => x.slug === slug) ?? ESSENCES[0];

document.title = `${item.name} – Bachova esenca`;

document.getElementById("essenceTitle").textContent = item.name;
document.getElementById("essenceLead").textContent = item.lead;
document.getElementById("essenceWhen").textContent = item.when;
document.getElementById("essenceGoal").textContent = item.goal;
document.getElementById("essenceBody").innerHTML = item.body;

const chips = document.getElementById("essenceChips");
chips.innerHTML = (item.tags || []).map((t) => `<span class="chip">${t}</span>`).join("");

const BASE = import.meta.env.BASE_URL;
const img = document.getElementById("essenceImg");
img.style.backgroundImage = `url('${BASE}img/bach/${item.slug}.jpg')`;
img.style.backgroundSize = "cover";
img.style.backgroundPosition = "center";
