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
  // dodaj ostale...
  {
    slug: "aspen",
    name: "Aspen",
    lead: "test",
    when: "test",
    goal: "Vtest",
    body: `
      <p>Atest</p>
      <ul>
        <li>Tiptest težkim pogovorom.</li>
        <li>Podportest kaj res čutiš.</li>
      </ul>
      <p>Dodaj testko več odstavkov).</p>
    `,
    tags: ["notranja test", "test", "test"],
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
chips.innerHTML = (item.tags || [])
  .map((t) => `<span class="chip">${t}</span>`)
  .join("");

// optional: kasneje zamenjaš z real image <img>
document.getElementById("essenceImg").setAttribute("data-slug", item.slug);


//Nastavim ozadje
document.getElementById("essenceImg").style.backgroundImage = `url('./img/bach/${item.slug}.jpg')`;
document.getElementById("essenceImg").style.backgroundSize = "cover";
document.getElementById("essenceImg").style.backgroundPosition = "center";
