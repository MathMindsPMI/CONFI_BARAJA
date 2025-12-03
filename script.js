/* ============================================================
   script.js — PARTE 1 / 4
   Contiene:
   - Lista de 118 elementos (z, sym, name, familyKey)
   - Orden orbital (Madelung)
   - Gases nobles de referencia
   - Excepciones conocidas
   - Funciones para construir configuración completa y abreviada
   - Utilidad para colorear subniveles
   ============================================================ */

/* ==========================
   Datos: 118 elementos
   familyKey: claves para mapear a clases/colores en CSS
   ========================== */
const ELEMENTS = [
  {z:1,  sym:"H",  name:"Hidrógeno", familyKey:"No-metal"},
  {z:2,  sym:"He", name:"Helio", familyKey:"Gas-noble"},
  {z:3,  sym:"Li", name:"Litio", familyKey:"Alcalino"},
  {z:4,  sym:"Be", name:"Berilio", familyKey:"Alcalinotérreo"},
  {z:5,  sym:"B",  name:"Boro", familyKey:"Metaloide"},
  {z:6,  sym:"C",  name:"Carbono", familyKey:"No-metal"},
  {z:7,  sym:"N",  name:"Nitrógeno", familyKey:"No-metal"},
  {z:8,  sym:"O",  name:"Oxígeno", familyKey:"No-metal"},
  {z:9,  sym:"F",  name:"Flúor", familyKey:"Halógeno"},
  {z:10, sym:"Ne", name:"Neón", familyKey:"Gas-noble"},

  {z:11, sym:"Na", name:"Sodio", familyKey:"Alcalino"},
  {z:12, sym:"Mg", name:"Magnesio", familyKey:"Alcalinotérreo"},
  {z:13, sym:"Al", name:"Aluminio", familyKey:"Post-transición"},
  {z:14, sym:"Si", name:"Silicio", familyKey:"Metaloide"},
  {z:15, sym:"P",  name:"Fósforo", familyKey:"No-metal"},
  {z:16, sym:"S",  name:"Azufre", familyKey:"No-metal"},
  {z:17, sym:"Cl", name:"Cloro", familyKey:"Halógeno"},
  {z:18, sym:"Ar", name:"Argón", familyKey:"Gas-noble"},

  {z:19, sym:"K",  name:"Potasio", familyKey:"Alcalino"},
  {z:20, sym:"Ca", name:"Calcio", familyKey:"Alcalinotérreo"},
  {z:21, sym:"Sc", name:"Escandio", familyKey:"Metales de transición"},
  {z:22, sym:"Ti", name:"Titanio", familyKey:"Metales de transición"},
  {z:23, sym:"V",  name:"Vanadio", familyKey:"Metales de transición"},
  {z:24, sym:"Cr", name:"Cromo", familyKey:"Metales de transición"},
  {z:25, sym:"Mn", name:"Manganeso", familyKey:"Metales de transición"},
  {z:26, sym:"Fe", name:"Hierro", familyKey:"Metales de transición"},
  {z:27, sym:"Co", name:"Cobalto", familyKey:"Metales de transición"},
  {z:28, sym:"Ni", name:"Níquel", familyKey:"Metales de transición"},
  {z:29, sym:"Cu", name:"Cobre", familyKey:"Metales de transición"},
  {z:30, sym:"Zn", name:"Cinc", familyKey:"Metales de transición"},
  {z:31, sym:"Ga", name:"Galio", familyKey:"Post-transición"},
  {z:32, sym:"Ge", name:"Germanio", familyKey:"Metaloide"},
  {z:33, sym:"As", name:"Arsénico", familyKey:"Metaloide"},
  {z:34, sym:"Se", name:"Selenio", familyKey:"No-metal"},
  {z:35, sym:"Br", name:"Bromo", familyKey:"Halógeno"},
  {z:36, sym:"Kr", name:"Kriptón", familyKey:"Gas-noble"},

  {z:37, sym:"Rb", name:"Rubidio", familyKey:"Alcalino"},
  {z:38, sym:"Sr", name:"Estroncio", familyKey:"Alcalinotérreo"},
  {z:39, sym:"Y",  name:"Itrio", familyKey:"Metales de transición"},
  {z:40, sym:"Zr", name:"Zirconio", familyKey:"Metales de transición"},
  {z:41, sym:"Nb", name:"Niobio", familyKey:"Metales de transición"},
  {z:42, sym:"Mo", name:"Molibdeno", familyKey:"Metales de transición"},
  {z:43, sym:"Tc", name:"Tecnecio", familyKey:"Metales de transición"},
  {z:44, sym:"Ru", name:"Rutenio", familyKey:"Metales de transición"},
  {z:45, sym:"Rh", name:"Rodio", familyKey:"Metales de transición"},
  {z:46, sym:"Pd", name:"Paladio", familyKey:"Metales de transición"},
  {z:47, sym:"Ag", name:"Plata", familyKey:"Metales de transición"},
  {z:48, sym:"Cd", name:"Cadmio", familyKey:"Metales de transición"},
  {z:49, sym:"In", name:"Indio", familyKey:"Post-transición"},
  {z:50, sym:"Sn", name:"Estaño", familyKey:"Post-transición"},
  {z:51, sym:"Sb", name:"Antimonio", familyKey:"Metaloide"},
  {z:52, sym:"Te", name:"Telurio", familyKey:"Metaloide"},
  {z:53, sym:"I",  name:"Yodo", familyKey:"Halógeno"},
  {z:54, sym:"Xe", name:"Xenón", familyKey:"Gas-noble"},

  {z:55, sym:"Cs", name:"Cesio", familyKey:"Alcalino"},
  {z:56, sym:"Ba", name:"Bario", familyKey:"Alcalinotérreo"},

  /* Lantánidos 57-71 */
  {z:57, sym:"La", name:"Lantano", familyKey:"Lantánido"},
  {z:58, sym:"Ce", name:"Cerio", familyKey:"Lantánido"},
  {z:59, sym:"Pr", name:"Praseodimio", familyKey:"Lantánido"},
  {z:60, sym:"Nd", name:"Neodimio", familyKey:"Lantánido"},
  {z:61, sym:"Pm", name:"Prometio", familyKey:"Lantánido"},
  {z:62, sym:"Sm", name:"Samario", familyKey:"Lantánido"},
  {z:63, sym:"Eu", name:"Europio", familyKey:"Lantánido"},
  {z:64, sym:"Gd", name:"Gadolinio", familyKey:"Lantánido"},
  {z:65, sym:"Tb", name:"Terbio", familyKey:"Lantánido"},
  {z:66, sym:"Dy", name:"Disprosio", familyKey:"Lantánido"},
  {z:67, sym:"Ho", name:"Holmio", familyKey:"Lantánido"},
  {z:68, sym:"Er", name:"Erbio", familyKey:"Lantánido"},
  {z:69, sym:"Tm", name:"Tulio", familyKey:"Lantánido"},
  {z:70, sym:"Yb", name:"Iterbio", familyKey:"Lantánido"},
  {z:71, sym:"Lu", name:"Lutecio", familyKey:"Lantánido"},

  /* Período 6 (72–86) */
  {z:72, sym:"Hf", name:"Hafnio", familyKey:"Metales de transición"},
  {z:73, sym:"Ta", name:"Tántalo", familyKey:"Metales de transición"},
  {z:74, sym:"W",  name:"Wolframio", familyKey:"Metales de transición"},
  {z:75, sym:"Re", name:"Renio", familyKey:"Metales de transición"},
  {z:76, sym:"Os", name:"Osmio", familyKey:"Metales de transición"},
  {z:77, sym:"Ir", name:"Iridio", familyKey:"Metales de transición"},
  {z:78, sym:"Pt", name:"Platino", familyKey:"Metales de transición"},
  {z:79, sym:"Au", name:"Oro", familyKey:"Metales de transición"},
  {z:80, sym:"Hg", name:"Mercurio", familyKey:"Metales de transición"},
  {z:81, sym:"Tl", name:"Talio", familyKey:"Post-transición"},
  {z:82, sym:"Pb", name:"Plomo", familyKey:"Post-transición"},
  {z:83, sym:"Bi", name:"Bismuto", familyKey:"Post-transición"},
  {z:84, sym:"Po", name:"Polonio", familyKey:"Metaloide"},
  {z:85, sym:"At", name:"Astato", familyKey:"Halógeno"},
  {z:86, sym:"Rn", name:"Radón", familyKey:"Gas-noble"},

  /* Período 7 (87–118) */
  {z:87, sym:"Fr", name:"Francio", familyKey:"Alcalino"},
  {z:88, sym:"Ra", name:"Radio", familyKey:"Alcalinotérreo"},
  {z:89, sym:"Ac", name:"Actinio", familyKey:"Actínido"},
  {z:90, sym:"Th", name:"Torio", familyKey:"Actínido"},
  {z:91, sym:"Pa", name:"Protactinio", familyKey:"Actínido"},
  {z:92, sym:"U",  name:"Uranio", familyKey:"Actínido"},
  {z:93, sym:"Np", name:"Neptunio", familyKey:"Actínido"},
  {z:94, sym:"Pu", name:"Plutonio", familyKey:"Actínido"},
  {z:95, sym:"Am", name:"Americio", familyKey:"Actínido"},
  {z:96, sym:"Cm", name:"Curio", familyKey:"Actínido"},
  {z:97, sym:"Bk", name:"Berkelio", familyKey:"Actínido"},
  {z:98, sym:"Cf", name:"Californio", familyKey:"Actínido"},
  {z:99, sym:"Es", name:"Einstenio", familyKey:"Actínido"},
  {z:100,sym:"Fm", name:"Fermio", familyKey:"Actínido"},
  {z:101,sym:"Md", name:"Mendelevio", familyKey:"Actínido"},
  {z:102,sym:"No", name:"Nobelio", familyKey:"Actínido"},
  {z:103,sym:"Lr", name:"Lawrencio", familyKey:"Actínido"},
  {z:104,sym:"Rf", name:"Rutherfordio", familyKey:"Metales de transición"},
  {z:105,sym:"Db", name:"Dubnio", familyKey:"Metales de transición"},
  {z:106,sym:"Sg", name:"Seaborgio", familyKey:"Metales de transición"},
  {z:107,sym:"Bh", name:"Bohrio", familyKey:"Metales de transición"},
  {z:108,sym:"Hs", name:"Hassio", familyKey:"Metales de transición"},
  {z:109,sym:"Mt", name:"Meitnerio", familyKey:"Metales de transición"},
  {z:110,sym:"Ds", name:"Darmstadtio", familyKey:"Metales de transición"},
  {z:111,sym:"Rg", name:"Roentgenio", familyKey:"Metales de transición"},
  {z:112,sym:"Cn", name:"Copernicio", familyKey:"Metales de transición"},
  {z:113,sym:"Nh", name:"Nihonio", familyKey:"Post-transición"},
  {z:114,sym:"Fl", name:"Flerovio", familyKey:"Post-transición"},
  {z:115,sym:"Mc", name:"Moscovio", familyKey:"Post-transición"},
  {z:116,sym:"Lv", name:"Livermorio", familyKey:"Post-transición"},
  {z:117,sym:"Ts", name:"Tennessino", familyKey:"Halógeno"},
  {z:118,sym:"Og", name:"Oganesón", familyKey:"Gas-noble"}
];

/* ==========================
   Orden de orbitales (Madelung) y capacidades
   ========================== */
const ORBITAL_ORDER = [
  {orb:"1s", cap:2},
  {orb:"2s", cap:2},
  {orb:"2p", cap:6},
  {orb:"3s", cap:2},
  {orb:"3p", cap:6},
  {orb:"4s", cap:2},
  {orb:"3d", cap:10},
  {orb:"4p", cap:6},
  {orb:"5s", cap:2},
  {orb:"4d", cap:10},
  {orb:"5p", cap:6},
  {orb:"6s", cap:2},
  {orb:"4f", cap:14},
  {orb:"5d", cap:10},
  {orb:"6p", cap:6},
  {orb:"7s", cap:2},
  {orb:"5f", cap:14},
  {orb:"6d", cap:10},
  {orb:"7p", cap:6}
];

/* ==========================
   Gases nobles (referencia para notación abreviada)
   ========================== */
const NOBLE_GASES = [
  {z:2,  sym:"He"},
  {z:10, sym:"Ne"},
  {z:18, sym:"Ar"},
  {z:36, sym:"Kr"},
  {z:54, sym:"Xe"},
  {z:86, sym:"Rn"},
  {z:118,sym:"Og"}
];

/* ==========================
   Excepciones conocidas en configuraciones (mejor aproximación)
   (algunos elementos tienen arreglos experimentales)
   ========================== */
function applyExceptions(Z, map) {
  // Basadas en casos clásicos: Cr, Cu, Mo, Ag, Pd, Au, etc.
  if (Z === 24) { // Cr
    if (map["4s"]) map["4s"] = 1;
    map["3d"] = Math.max(5, map["3d"] || 0);
  }
  if (Z === 29) { // Cu
    if (map["4s"]) map["4s"] = 1;
    map["3d"] = Math.max(10, map["3d"] || 0);
  }
  if (Z === 42) { // Mo
    if (map["5s"]) map["5s"] = 1;
    map["4d"] = Math.max(5, map["4d"] || 0);
  }
  if (Z === 46) { // Pd
    // Pd often 4d10 (no 5s)
    map["4d"] = 10;
    map["5s"] = 0;
  }
  if (Z === 47) { // Ag
    if (map["5s"]) map["5s"] = 1;
    map["4d"] = Math.max(10, map["4d"] || 0);
  }
  if (Z === 79) { // Au
    if (map["6s"]) map["6s"] = 1;
    map["5d"] = Math.max(10, map["5d"] || 0);
    map["4f"] = Math.max(14, map["4f"] || 0);
  }
  // Additional small adjustments can be added here if desired.
}

/* ==========================
   Construir configuración electrónica completa (por subniveles)
   Devuelve string como: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 ..."
   ========================== */
function computeFullConfiguration(Z) {
  if (!Z || Z < 1) return "";
  let remaining = Z;
  const map = {}; // orb -> electrons
  for (let i = 0; i < ORBITAL_ORDER.length && remaining > 0; i++) {
    const orb = ORBITAL_ORDER[i];
    const take = Math.min(orb.cap, remaining);
    if (take > 0) map[orb.orb] = take;
    remaining -= take;
  }
  // Apply known exceptions to better match experimental ground states
  applyExceptions(Z, map);

  // Build ordered string
  const parts = ORBITAL_ORDER.map(o => {
    const n = map[o.orb] || 0;
    return n > 0 ? `${o.orb}${n}` : null;
  }).filter(Boolean);

  return parts.join(" ");
}

/* ==========================
   Construir notación abreviada (gas noble)
   Devuelve string como: "[Ar] 3d10 4s1"
   ========================== */
function computeNobleShorthand(Z) {
  if (!Z || Z < 1) return "";
  // find greatest noble gas with z < Z
  const noble = NOBLE_GASES.slice().reverse().find(g => g.z < Z);
  if (!noble) return computeFullConfiguration(Z);

  const fullZMap = buildMapFromFullString(computeFullConfiguration(Z));
  const nobleMap = buildMapFromFullString(computeFullConfiguration(noble.z));

  // subtract nobleMap from fullZMap
  const remainderParts = [];
  for (const orbObj of ORBITAL_ORDER) {
    const orb = orbObj.orb;
    const a = fullZMap[orb] || 0;
    const b = nobleMap[orb] || 0;
    const diff = a - b;
    if (diff > 0) remainderParts.push(`${orb}${diff}`);
  }
  const remainder = remainderParts.join(" ");
  return remainder ? `[${noble.sym}] ${remainder}` : `[${noble.sym}]`;
}

/* Helper: convierte string "1s2 2s2 ..." a mapa { "1s":2, ... } */
function buildMapFromFullString(fullStr) {
  const map = {};
  if (!fullStr) return map;
  const parts = fullStr.split(/\s+/).filter(Boolean);
  for (const p of parts) {
    const m = p.match(/^(\d+[spdf])(\d+)$/i);
    if (m) {
      map[m[1]] = parseInt(m[2], 10);
    }
  }
  return map;
}

/* ==========================
   Resaltar subniveles (s/p/d/f) con spans para CSS
   Ej: "4s2" -> <span class="orb s">4s2</span>
   ========================== */
function colorizeSublevels(fullStr) {
  if (!fullStr) return "";
  return fullStr.split(/\s+/).filter(Boolean).map(p => {
    const m = p.match(/^(\d+)([spdf])(\d+)$/i);
    if (!m) return `<span class="orb">${escapeHtml(p)}</span>`;
    const orbType = m[2].toLowerCase();
    return `<span class="orb ${orbType}">${escapeHtml(p)}</span>`;
  }).join(" ");
}

/* simple html escape */
function escapeHtml(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// =============================================
// === PARTE 2 — ELEMENTOS 39 AL 86 (d y f) ====
// =============================================

// Bloque d (metales de transición)
elements.push(
    {
        name: "Ytrio",
        symbol: "Y",
        number: 39,
        family: "Metales de transición",
        config: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d1 5s2",
        config_gas: "[Kr] 4d1 5s2",
        block: "d"
    },
    {
        name: "Circonio",
        symbol: "Zr",
        number: 40,
        family: "Metales de transición",
        config: "[Kr] 4d2 5s2",
        config_gas: "[Kr] 4d2 5s2",
        block: "d"
    },
    {
        name: "Niobio",
        symbol: "Nb",
        number: 41,
        family: "Metales de transición",
        config: "[Kr] 4d4 5s1",
        config_gas: "[Kr] 4d4 5s1",
        block: "d"
    },
    {
        name: "Molibdeno",
        symbol: "Mo",
        number: 42,
        family: "Metales de transición",
        config: "[Kr] 4d5 5s1",
        config_gas: "[Kr] 4d5 5s1",
        block: "d"
    },
    {
        name: "Tecnecio",
        symbol: "Tc",
        number: 43,
        family: "Metales de transición",
        config: "[Kr] 4d5 5s2",
        config_gas: "[Kr] 4d5 5s2",
        block: "d"
    },
    {
        name: "Rutenio",
        symbol: "Ru",
        number: 44,
        family: "Metales de transición",
        config: "[Kr] 4d7 5s1",
        config_gas: "[Kr] 4d7 5s1",
        block: "d"
    },
    {
        name: "Rodio",
        symbol: "Rh",
        number: 45,
        family: "Metales de transición",
        config: "[Kr] 4d8 5s1",
        config_gas: "[Kr] 4d8 5s1",
        block: "d"
    },
    {
        name: "Paladio",
        symbol: "Pd",
        number: 46,
        family: "Metales de transición",
        config: "[Kr] 4d10",
        config_gas: "[Kr] 4d10",
        block: "d"
    },
    {
        name: "Plata",
        symbol: "Ag",
        number: 47,
        family: "Metales de transición",
        config: "[Kr] 4d10 5s1",
        config_gas: "[Kr] 4d10 5s1",
        block: "d"
    },
    {
        name: "Cadmio",
        symbol: "Cd",
        number: 48,
        family: "Metales de transición",
        config: "[Kr] 4d10 5s2",
        config_gas: "[Kr] 4d10 5s2",
        block: "d"
    },
    {
        name: "Indio",
        symbol: "In",
        number: 49,
        family: "Metales del bloque p",
        config: "[Kr] 4d10 5s2 5p1",
        config_gas: "[Kr] 4d10 5s2 5p1",
        block: "p"
    },
    {
        name: "Estaño",
        symbol: "Sn",
        number: 50,
        family: "Metales del bloque p",
        config: "[Kr] 4d10 5s2 5p2",
        config_gas: "[Kr] 4d10 5s2 5p2",
        block: "p"
    },
    {
        name: "Antimonio",
        symbol: "Sb",
        number: 51,
        family: "Metaloides",
        config: "[Kr] 4d10 5s2 5p3",
        config_gas: "[Kr] 4d10 5s2 5p3",
        block: "p"
    },
    {
        name: "Telurio",
        symbol: "Te",
        number: 52,
        family: "Metaloides",
        config: "[Kr] 4d10 5s2 5p4",
        config_gas: "[Kr] 4d10 5s2 5p4",
        block: "p"
    },
    {
        name: "Yodo",
        symbol: "I",
        number: 53,
        family: "Halógenos",
        config: "[Kr] 4d10 5s2 5p5",
        config_gas: "[Kr] 4d10 5s2 5p5",
        block: "p"
    },
    {
        name: "Xenón",
        symbol: "Xe",
        number: 54,
        family: "Gases nobles",
        config: "[Kr] 4d10 5s2 5p6",
        config_gas: "[Kr] 4d10 5s2 5p6",
        block: "p"
    }
);

// ===========================
// ==== LANTÁNIDOS (f) =======
// ===========================

elements.push(
    {
        name: "Lantano",
        symbol: "La",
        number: 57,
        family: "Lantánidos",
        config: "[Xe] 5d1 6s2",
        config_gas: "[Xe] 5d1 6s2",
        block: "f"
    },
    {
        name: "Cerio",
        symbol: "Ce",
        number: 58,
        family: "Lantánidos",
        config: "[Xe] 4f1 5d1 6s2",
        config_gas: "[Xe] 4f1 5d1 6s2",
        block: "f"
    },
    {
        name: "Praseodimio",
        symbol: "Pr",
        number: 59,
        family: "Lantánidos",
        config: "[Xe] 4f3 6s2",
        config_gas: "[Xe] 4f3 6s2",
        block: "f"
    },
    {
        name: "Neodimio",
        symbol: "Nd",
        number: 60,
        family: "Lantánidos",
        config: "[Xe] 4f4 6s2",
        config_gas: "[Xe] 4f4 6s2",
        block: "f"
    },
    {
        name: "Prometio",
        symbol: "Pm",
        number: 61,
        family: "Lantánidos",
        config: "[Xe] 4f5 6s2",
        config_gas: "[Xe] 4f5 6s2",
        block: "f"
    },
    {
        name: "Samario",
        symbol: "Sm",
        number: 62,
        family: "Lantánidos",
        config: "[Xe] 4f6 6s2",
        config_gas: "[Xe] 4f6 6s2",
        block: "f"
    },
    {
        name: "Europio",
        symbol: "Eu",
        number: 63,
        family: "Lantánidos",
        config: "[Xe] 4f7 6s2",
        config_gas: "[Xe] 4f7 6s2",
        block: "f"
    },
    {
        name: "Gadolinio",
        symbol: "Gd",
        number: 64,
        family: "Lantánidos",
        config: "[Xe] 4f7 5d1 6s2",
        config_gas: "[Xe] 4f7 5d1 6s2",
        block: "f"
    },
    {
        name: "Terbio",
        symbol: "Tb",
        number: 65,
        family: "Lantánidos",
        config: "[Xe] 4f9 6s2",
        config_gas: "[Xe] 4f9 6s2",
        block: "f"
    },
    {
        name: "Disprosio",
        symbol: "Dy",
        number: 66,
        family: "Lantánidos",
        config: "[Xe] 4f10 6s2",
        config_gas: "[Xe] 4f10 6s2",
        block: "f"
    },
    {
        name: "Holmio",
        symbol: "Ho",
        number: 67,
        family: "Lantánidos",
        config: "[Xe] 4f11 6s2",
        config_gas: "[Xe] 4f11 6s2",
        block: "f"
    },
    {
        name: "Erbio",
        symbol: "Er",
        number: 68,
        family: "Lantánidos",
        config: "[Xe] 4f12 6s2",
        config_gas: "[Xe] 4f12 6s2",
        block: "f"
    },
    {
        name: "Tulio",
        symbol: "Tm",
        number: 69,
        family: "Lantánidos",
        config: "[Xe] 4f13 6s2",
        config_gas: "[Xe] 4f13 6s2",
        block: "f"
    },
    {
        name: "Iterbio",
        symbol: "Yb",
        number: 70,
        family: "Lantánidos",
        config: "[Xe] 4f14 6s2",
        config_gas: "[Xe] 4f14 6s2",
        block: "f"
    },
    {
        name: "Lutecio",
        symbol: "Lu",
        number: 71,
        family: "Lantánidos",
        config: "[Xe] 4f14 5d1 6s2",
        config_gas: "[Xe] 4f14 5d1 6s2",
        block: "f"
    }
);

// ===============================
// === ACTÍNIDOS (f) 89–103 =====
// ===============================

elements.push(
    {
        name: "Actinio",
        symbol: "Ac",
        number: 89,
        family: "Actínidos",
        config: "[Rn] 6d1 7s2",
        config_gas: "[Rn] 6d1 7s2",
        block: "f"
    },
    {
        name: "Torio",
        symbol: "Th",
        number: 90,
        family: "Actínidos",
        config: "[Rn] 6d2 7s2",
        config_gas: "[Rn] 6d2 7s2",
        block: "f"
    },
    {
        name: "Protactinio",
        symbol: "Pa",
        number: 91,
        family: "Actínidos",
        config: "[Rn] 5f2 6d1 7s2",
        config_gas: "[Rn] 5f2 6d1 7s2",
        block: "f"
    },
    {
        name: "Uranio",
        symbol: "U",
        number: 92,
        family: "Actínidos",
        config: "[Rn] 5f3 6d1 7s2",
        config_gas: "[Rn] 5f3 6d1 7s2",
        block: "f"
    },
    {
        name: "Neptunio",
        symbol: "Np",
        number: 93,
        family: "Actínidos",
        config: "[Rn] 5f4 6d1 7s2",
        config_gas: "[Rn] 5f4 6d1 7s2",
        block: "f"
    },
    {
        name: "Plutonio",
        symbol: "Pu",
        number: 94,
        family: "Actínidos",
        config: "[Rn] 5f6 7s2",
        config_gas: "[Rn] 5f6 7s2",
        block: "f"
    },
    {
        name: "Americio",
        symbol: "Am",
        number: 95,
        family: "Actínidos",
        config: "[Rn] 5f7 7s2",
        config_gas: "[Rn] 5f7 7s2",
        block: "f"
    },
    {
        name: "Curio",
        symbol: "Cm",
        number: 96,
        family: "Actínidos",
        config: "[Rn] 5f7 6d1 7s2",
        config_gas: "[Rn] 5f7 6d1 7s2",
        block: "f"
    },
    {
        name: "Berkelio",
        symbol: "Bk",
        number: 97,
        family: "Actínidos",
        config: "[Rn] 5f9 7s2",
        config_gas: "[Rn] 5f9 7s2",
        block: "f"
    },
    {
        name: "Californio",
        symbol: "Cf",
        number: 98,
        family: "Actínidos",
        config: "[Rn] 5f10 7s2",
        config_gas: "[Rn] 5f10 7s2",
        block: "f"
    },
    {
        name: "Einstenio",
        symbol: "Es",
        number: 99,
        family: "Actínidos",
        config: "[Rn] 5f11 7s2",
        config_gas: "[Rn] 5f11 7s2",
        block: "f"
    },
    {
        name: "Fermio",
        symbol: "Fm",
        number: 100,
        family: "Actínidos",
        config: "[Rn] 5f12 7s2",
        config_gas: "[Rn] 5f12 7s2",
        block: "f"
    },
    {
        name: "Mendelevio",
        symbol: "Md",
        number: 101,
        family: "Actínidos",
        config: "[Rn] 5f13 7s2",
        config_gas: "[Rn] 5f13 7s2",
        block: "f"
    },
    {
        name: "Nobelio",
        symbol: "No",
        number: 102,
        family: "Actínidos",
        config: "[Rn] 5f14 7s2",
        config_gas: "[Rn] 5f14 7s2",
        block: "f"
    },
    {
        name: "Lawrencio",
        symbol: "Lr",
        number: 103,
        family: "Actínidos",
        config: "[Rn] 5f14 7s2 7p1",
        config_gas: "[Rn] 5f14 7s2 7p1",
        block: "f"
    }
);
// =============================================
// === PARTE 3 — ELEMENTOS 87 AL 118 (p y s) ====
// =============================================

// Bloque s (continuación)
elements.push(
    {
        name: "Francio",
        symbol: "Fr",
        number: 87,
        family: "Metales alcalinos",
        config: "[Rn] 7s1",
        config_gas: "[Rn] 7s1",
        block: "s"
    },
    {
        name: "Radio",
        symbol: "Ra",
        number: 88,
        family: "Metales alcalinotérreos",
        config: "[Rn] 7s2",
        config_gas: "[Rn] 7s2",
        block: "s"
    }
);

// =============================================
// === BLOQUE p FINAL (85–86) ya incluidos ===
// === Aquí continúan del 104 al 118      =====
// =============================================

elements.push(
    {
        name: "Rutherfordio",
        symbol: "Rf",
        number: 104,
        family: "Metales de transición",
        config: "[Rn] 5f14 6d2 7s2",
        config_gas: "[Rn] 5f14 6d2 7s2",
        block: "d"
    },
    {
        name: "Dubnio",
        symbol: "Db",
        number: 105,
        family: "Metales de transición",
        config: "[Rn] 5f14 6d3 7s2",
        config_gas: "[Rn] 5f14 6d3 7s2",
        block: "d"
    },
    {
        name: "Seaborgio",
        symbol: "Sg",
        number: 106,
        family: "Metales de transición",
        config: "[Rn] 5f14 6d4 7s2",
        config_gas: "[Rn] 5f14 6d4 7s2",
        block: "d"
    },
    {
        name: "Bohrio",
        symbol: "Bh",
        number: 107,
        family: "Metales de transición",
        config: "[Rn] 5f14 6d5 7s2",
        config_gas: "[Rn] 5f14 6d5 7s2",
        block: "d"
    },
    {
        name: "Hassio",
        symbol: "Hs",
        number: 108,
        family: "Metales de transición",
        config: "[Rn] 5f14 6d6 7s2",
        config_gas: "[Rn] 5f14 6d6 7s2",
        block: "d"
    },
    {
        name: "Meitnerio",
        symbol: "Mt",
        number: 109,
        family: "Metales de transición",
        config: "[Rn] 5f14 6d7 7s2",
        config_gas: "[Rn] 5f14 6d7 7s2",
        block: "d"
    },
    {
        name: "Darmstatio",
        symbol: "Ds",
        number: 110,
        family: "Metales de transición",
        config: "[Rn] 5f14 6d8 7s2",
        config_gas: "[Rn] 5f14 6d8 7s2",
        block: "d"
    },
    {
        name: "Roentgenio",
        symbol: "Rg",
        number: 111,
        family: "Metales de transición",
        config: "[Rn] 5f14 6d9 7s2",
        config_gas: "[Rn] 5f14 6d9 7s2",
        block: "d"
    },
    {
        name: "Copernicio",
        symbol: "Cn",
        number: 112,
        family: "Metales de transición",
        config: "[Rn] 5f14 6d10 7s2",
        config_gas: "[Rn] 5f14 6d10 7s2",
        block: "d"
    },
    {
        name: "Nihonio",
        symbol: "Nh",
        number: 113,
        family: "Metales del bloque p",
        config: "[Rn] 5f14 6d10 7s2 7p1",
        config_gas: "[Rn] 5f14 6d10 7s2 7p1",
        block: "p"
    },
    {
        name: "Flerovio",
        symbol: "Fl",
        number: 114,
        family: "Metales del bloque p",
        config: "[Rn] 5f14 6d10 7s2 7p2",
        config_gas: "[Rn] 5f14 6d10 7s2 7p2",
        block: "p"
    },
    {
        name: "Moscovio",
        symbol: "Mc",
        number: 115,
        family: "Metales del bloque p",
        config: "[Rn] 5f14 6d10 7s2 7p3",
        config_gas: "[Rn] 5f14 6d10 7s2 7p3",
        block: "p"
    },
    {
        name: "Livermorio",
        symbol: "Lv",
        number: 116,
        family: "Metales del bloque p",
        config: "[Rn] 5f14 6d10 7s2 7p4",
        config_gas: "[Rn] 5f14 6d10 7s2 7p4",
        block: "p"
    },
    {
        name: "Teneso",
        symbol: "Ts",
        number: 117,
        family: "Halógenos",
        config: "[Rn] 5f14 6d10 7s2 7p5",
        config_gas: "[Rn] 5f14 6d10 7s2 7p5",
        block: "p"
    },
    {
        name: "Oganesón",
        symbol: "Og",
        number: 118,
        family: "Gases nobles",
        config: "[Rn] 5f14 6d10 7s2 7p6",
        config_gas: "[Rn] 5f14 6d10 7s2 7p6",
        block: "p"
    }
);

// =============================================
// === FIN DE ELEMENTOS — INICIA RENDERING =====
// =============================================

// Renderizado de tabla
function renderTable() {
    const table = document.getElementById("table");

    elements.forEach(el => {
        const div = document.createElement("div");
        div.className = `element ${el.block}`;
        div.innerHTML = `
            <span class="number">${el.number}</span>
            <span class="symbol">${el.symbol}</span>
            <span class="name">${el.name}</span>
        `;

        div.addEventListener("click", () => showInfo(el));
        table.appendChild(div);
    });
}

renderTable();
/*****************************************************
 * PARTE 4 — FUNCIONES GENERALES Y EVENTOS
 *****************************************************/

/* Función para cerrar el modal con ESC */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
    }
});

/* Botón cerrar modal */
const closeBtn = document.getElementById("close-modal");
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

/* Función para agregar el logo dinámicamente (si existe logo.png) */
function loadLogo() {
    const header = document.querySelector(".header");

    fetch("logo.png")
        .then(res => {
            if (res.ok) {
                const img = document.createElement("img");
                img.src = "logo.png";
                img.classList.add("logo");
                header.appendChild(img);
            }
        })
        .catch(() => console.log("Logo no encontrado, se omite."));
}

/* Ejecutar funciones principales */
generateCards();
loadLogo();

/*****************************************************
 * FIN DEL SCRIPT
 *****************************************************/



