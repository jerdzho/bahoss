import "../style.css";

const esc = (s) => String(s)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const BACH = [
  { name: "Agrimony", desc: "Za tiste, ki navzven delujejo brez skrbi, znotraj pa nosijo napetost." },
  { name: "Aspen", desc: "Za nejasne strahove in občutek nelagodja brez jasnega razloga." },
  { name: "Beech", desc: "Za več razumevanja, manj kritičnosti in več tolerance." },
  { name: "Centaury", desc: "Za postavljanje mej in manj pretirane ustrežljivosti." },
  { name: "Cerato", desc: "Za zaupanje vase in manj iskanja potrditve od drugih." },
  { name: "Cherry Plum", desc: "Za strah pred izgubo nadzora in notranjo napetost." },
  { name: "Chestnut Bud", desc: "Za učenje iz izkušenj in manj ponavljanja istih vzorcev." },
  { name: "Chicory", desc: "Za bolj sproščeno navezanost in manj posedovalnosti." },
  { name: "Clematis", desc: "Za prisotnost, prizemljenost in manj odtavanja." },
  { name: "Crab Apple", desc: "Za občutek čistosti, sprejemanja in manj osredotočenosti na napake." },
  { name: "Elm", desc: "Za občutek sposobnosti, ko je odgovornosti preveč." },
  { name: "Gentian", desc: "Za optimizem, ko pridejo dvomi po neuspehih ali ovirah." },
  { name: "Gorse", desc: "Za upanje, ko je prisoten občutek obupa." },
  { name: "Heather", desc: "Za več notranje varnosti in manj potrebe po stalni pozornosti." },
  { name: "Holly", desc: "Za mehčanje močnih čustev (npr. zavist, jeza) in več topline." },
  { name: "Honeysuckle", desc: "Za spuščanje preteklosti in več prisotnosti v sedanjosti." },
  { name: "Hornbeam", desc: "Za svež zagon, ko se zdi dan “preveč” že zjutraj." },
  { name: "Impatiens", desc: "Za potrpežljivost in manj notranjega hitenja." },
  { name: "Larch", desc: "Za samozavest in manj strahu pred neuspehom." },
  { name: "Mimulus", desc: "Za konkretne strahove (znane) in več poguma." },
  { name: "Mustard", desc: "Za nepričakovano žalost in temačnost brez vzroka." },
  { name: "Oak", desc: "Za tiste, ki vztrajajo čez mejo – učenje počitka." },
  { name: "Olive", desc: "Za izčrpanost in obnovo energije." },
  { name: "Pine", desc: "Za občutke krivde in pretirano samokritiko." },
  { name: "Red Chestnut", desc: "Za pretirano skrb za druge in občutek varnosti." },
  { name: "Rock Rose", desc: "Za močan strah/paniko in občutek notranje trdnosti." },
  { name: "Rock Water", desc: "Za popuščanje pretirane strogosti do sebe." },
  { name: "Scleranthus", desc: "Za odločnost in manj notranjega nihanja." },
  { name: "Star of Bethlehem", desc: "Za tolažbo po šoku ali težkih izkušnjah." },
  { name: "Sweet Chestnut", desc: "Za občutek, ko je notranje “na robu” in potrebuje oporo." },
  { name: "Vervain", desc: "Za umirjanje pretiranega zagnanosti in napetosti." },
  { name: "Vine", desc: "Za mehkejše vodenje in manj rigidnosti." },
  { name: "Walnut", desc: "Za prehode, spremembe in zaščito pred zunanjimi vplivi." },
  { name: "Water Violet", desc: "Za odprtost in več povezanosti brez umika." },
  { name: "White Chestnut", desc: "Za umirjanje vsiljivih misli in notranji mir." },
  { name: "Wild Oat", desc: "Za jasnost smeri in občutek poslanstva." },
  { name: "Wild Rose", desc: "Za motivacijo in “iskrico”, ko je prisotna apatija." },
  { name: "Willow", desc: "Za sprejemanje, manj zagrenjenosti in več notranje prožnosti." },
];

const grid = document.getElementById("bachGrid");
if (!grid) throw new Error("#bachGrid not found");

const BASE = import.meta.env.BASE_URL;

grid.innerHTML = BACH.map((x) => {
  const slug = x.name.toLowerCase().replace(/\s+/g, "-");
  const imgUrl = `${BASE}img/bach/${slug}.jpg`;

  return `
    <a class="bach-card" href="./esenca.html?e=${slug}" aria-label="${esc(x.name)}">
      <div class="bach-card__inner">
        <div class="bach-card__img" style="background-image:url('${imgUrl}')" aria-hidden="true"></div>
        <div class="bach-card__body">
          <h3 class="bach-card__title">${esc(x.name)}</h3>
        </div>
      </div>
      <p class="bach-card__desc">${esc(x.desc)}</p>
    </a>
  `;
}).join("");



