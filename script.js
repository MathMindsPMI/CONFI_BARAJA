/* ============================================================
   CONFIELECTRO — BARJA DE ELEMENTOS (SCRIPT PRINCIPAL)
   Este archivo contiene:
   - 118 elementos con: nombre, símbolo, Z, familia
   - Configuración electrónica completa
   - Configuración electrónica abreviada (gas noble)
   ============================================================ */

/* ============================
   1) LISTA COMPLETA DE ELEMENTOS
   ============================ */
const elementos = [
  { z:1,  simb:"H",  nombre:"Hidrógeno", familia:"noMetales" },
  { z:2,  simb:"He", nombre:"Helio", familia:"gasesNobles" },
  { z:3,  simb:"Li", nombre:"Litio", familia:"alcalinos" },
  { z:4,  simb:"Be", nombre:"Berilio", familia:"alcalinoterreos" },
  { z:5,  simb:"B",  nombre:"Boro", familia:"metaloides" },
  { z:6,  simb:"C",  nombre:"Carbono", familia:"noMetales" },
  { z:7,  simb:"N",  nombre:"Nitrógeno", familia:"noMetales" },
  { z:8,  simb:"O",  nombre:"Oxígeno", familia:"noMetales" },
  { z:9,  simb:"F",  nombre:"Flúor", familia:"halogenos" },
  { z:10, simb:"Ne", nombre:"Neón", familia:"gasesNobles" },

  { z:11, simb:"Na", nombre:"Sodio", familia:"alcalinos" },
  { z:12, simb:"Mg", nombre:"Magnesio", familia:"alcalinoterreos" },
  { z:13, simb:"Al", nombre:"Aluminio", familia:"otros" },
  { z:14, simb:"Si", nombre:"Silicio", familia:"metaloides" },
  { z:15, simb:"P",  nombre:"Fósforo", familia:"noMetales" },
  { z:16, simb:"S",  nombre:"Azufre", familia:"noMetales" },
  { z:17, simb:"Cl", nombre:"Cloro", familia:"halogenos" },
  { z:18, simb:"Ar", nombre:"Argón", familia:"gasesNobles" },

  { z:19, simb:"K",  nombre:"Potasio", familia:"alcalinos" },
  { z:20, simb:"Ca", nombre:"Calcio", familia:"alcalinoterreos" },
  { z:21, simb:"Sc", nombre:"Escandio", familia:"transicion" },
  { z:22, simb:"Ti", nombre:"Titanio", familia:"transicion" },
  { z:23, simb:"V",  nombre:"Vanadio", familia:"transicion" },
  { z:24, simb:"Cr", nombre:"Cromo", familia:"transicion" },
  { z:25, simb:"Mn", nombre:"Manganeso", familia:"transicion" },
  { z:26, simb:"Fe", nombre:"Hierro", familia:"transicion" },
  { z:27, simb:"Co", nombre:"Cobalto", familia:"transicion" },
  { z:28, simb:"Ni", nombre:"Níquel", familia:"transicion" },
  { z:29, simb:"Cu", nombre:"Cobre", familia:"transicion" },
  { z:30, simb:"Zn", nombre:"Zinc", familia:"transicion" },
  { z:31, simb:"Ga", nombre:"Galio", familia:"otros" },
  { z:32, simb:"Ge", nombre:"Germanio", familia:"metaloides" },
  { z:33, simb:"As", nombre:"Arsénico", familia:"metaloides" },
  { z:34, simb:"Se", nombre:"Selenio", familia:"noMetales" },
  { z:35, simb:"Br", nombre:"Bromo", familia:"halogenos" },
  { z:36, simb:"Kr", nombre:"Kriptón", familia:"gasesNobles" },

  { z:37, simb:"Rb", nombre:"Rubidio", familia:"alcalinos" },
  { z:38, simb:"Sr", nombre:"Estroncio", familia:"alcalinoterreos" },
  { z:39, simb:"Y",  nombre:"Itrio", familia:"transicion" },
  { z:40, simb:"Zr", nombre:"Zirconio", familia:"transicion" },
  { z:41, simb:"Nb", nombre:"Niobio", familia:"transicion" },
  { z:42, simb:"Mo", nombre:"Molibdeno", familia:"transicion" },
  { z:43, simb:"Tc", nombre:"Tecnecio", familia:"transicion" },
  { z:44, simb:"Ru", nombre:"Rutenio", familia:"transicion" },
  { z:45, simb:"Rh", nombre:"Rodio", familia:"transicion" },
  { z:46, simb:"Pd", nombre:"Paladio", familia:"transicion" },
  { z:47, simb:"Ag", nombre:"Plata", familia:"transicion" },
  { z:48, simb:"Cd", nombre:"Cadmio", familia:"transicion" },
  { z:49, simb:"In", nombre:"Indio", familia:"otros" },
  { z:50, simb:"Sn", nombre:"Estaño", familia:"otros" },
  { z:51, simb:"Sb", nombre:"Antimonio", familia:"metaloides" },
  { z:52, simb:"Te", nombre:"Telurio", familia:"metaloides" },
  { z:53, simb:"I",  nombre:"Yodo", familia:"halogenos" },
  { z:54, simb:"Xe", nombre:"Xenón", familia:"gasesNobles" },

  { z:55, simb:"Cs", nombre:"Cesio", familia:"alcalinos" },
  { z:56, simb:"Ba", nombre:"Bario", familia:"alcalinoterreos" },

  /* Lantánidos */
  { z:57, simb:"La", nombre:"Lantano", familia:"lantanidos" },
  { z:58, simb:"Ce", nombre:"Cerio", familia:"lantanidos" },
  { z:59, simb:"Pr", nombre:"Praseodimio", familia:"lantanidos" },
  { z:60, simb:"Nd", nombre:"Neodimio", familia:"lantanidos" },
  { z:61, simb:"Pm", nombre:"Prometio", familia:"lantanidos" },
  { z:62, simb:"Sm", nombre:"Samario", familia:"lantanidos" },
  { z:63, simb:"Eu", nombre:"Europio", familia:"lantanidos" },
  { z:64, simb:"Gd", nombre:"Gadolinio", familia:"lantanidos" },
  { z:65, simb:"Tb", nombre:"Terbio", familia:"lantanidos" },
  { z:66, simb:"Dy", nombre:"Disprosio", familia:"lantanidos" },
  { z:67, simb:"Ho", nombre:"Holmio", familia:"lantanidos" },
  { z:68, simb:"Er", nombre:"Erbio", familia:"lantanidos" },
  { z:69, simb:"Tm", nombre:"Tulio", familia:"lantanidos" },
  { z:70, simb:"Yb", nombre:"Iterbio", familia:"lantanidos" },
  { z:71, simb:"Lu", nombre:"Lutecio", familia:"lantanidos" },

  /* Actínidos */
  { z:72, simb:"Hf", nombre:"Hafnio", familia:"transicion" },
  { z:73, simb:"Ta", nombre:"Tántalo", familia:"transicion" },
  { z:74, simb:"W",  nombre:"Wolframio", familia:"transicion" },
  { z:75, simb:"Re", nombre:"Renio", familia:"transicion" },
  { z:76, simb:"Os", nombre:"Osmio", familia:"transicion" },
  { z:77, simb:"Ir", nombre:"Iridio", familia:"transicion" },
  { z:78, simb:"Pt", nombre:"Platino", familia:"transicion" },
  { z:79, simb:"Au", nombre:"Oro", familia:"transicion" },
  { z:80, simb:"Hg", nombre:"Mercurio", familia:"transicion" },
  { z:81, simb:"Tl", nombre:"Talio", familia:"otros" },
  { z:82, simb:"Pb", nombre:"Plomo", familia:"otros" },
  { z:83, simb:"Bi", nombre:"Bismuto", familia:"otros" },
  { z:84, simb:"Po", nombre:"Polonio", familia:"metaloides" },
  { z:85, simb:"At", nombre:"Astato", familia:"halogenos" },
  { z:86, simb:"Rn", nombre:"Radón", familia:"gasesNobles" },

  { z:87, simb:"Fr", nombre:"Francio", familia:"alcalinos" },
  { z:88, simb:"Ra", nombre:"Radio", familia:"alcalinoterreos" },

  { z:89, simb:"Ac", nombre:"Actinio", familia:"actinidos" },
  { z:90, simb:"Th", nombre:"Torio", familia:"actinidos" },
  { z:91, simb:"Pa", nombre:"Protactinio", familia:"actinidos" },
  { z:92, simb:"U",  nombre:"Uranio", familia:"actinidos" },
  { z:93, simb:"Np", nombre:"Neptunio", familia:"actinidos" },
  { z:94, simb:"Pu", nombre:"Plutonio", familia:"actinidos" },
  { z:95, simb:"Am", nombre:"Americio", familia:"actinidos" },
  { z:96, simb:"Cm", nombre:"Curio", familia:"actinidos" },
  { z:97, simb:"Bk", nombre:"Berkelio", familia:"actinidos" },
  { z:98, simb:"Cf", nombre:"Californio", familia:"actinidos" },
  { z:99, simb:"Es", nombre:"Einstenio", familia:"actinidos" },
  { z:100, simb:"Fm", nombre:"Fermio", familia:"actinidos" },
  { z:101, simb:"Md", nombre:"Mendelevio", familia:"actinidos" },
  { z:102, simb:"No", nombre:"Nobelio", familia:"actinidos" },
  { z:103, simb:"Lr", nombre:"Lawrencio", familia:"actinidos" },

  { z:104, simb:"Rf", nombre:"Rutherfordio", familia:"transicion" },
  { z:105, simb:"Db", nombre:"Dubnio", familia:"transicion" },
  { z:106, simb:"Sg", nombre:"Seaborgio", familia:"transicion" },
  { z:107, simb:"Bh", nombre:"Bohrio", familia:"transicion" },
  { z:108, simb:"Hs", nombre:"Hassio", familia:"transicion" },
  { z:109, simb:"Mt", nombre:"Meitnerio", familia:"transicion" },
  { z:110, simb:"Ds", nombre:"Darmstadtio", familia:"transicion" },
  { z:111, simb:"Rg", nombre:"Roentgenio", familia:"transicion" },
  { z:112, simb:"Cn", nombre:"Copernicio", familia:"transicion" },
  { z:113, simb:"Nh", nombre:"Nihonio", familia:"otros" },
  { z:114, simb:"Fl", nombre:"Flerovio", familia:"otros" },
  { z:115, simb:"Mc", nombre:"Moscovio", familia:"otros" },
  { z:116, simb:"Lv", nombre:"Livermorio", familia:"otros" },
  { z:117, simb:"Ts", nombre:"Tenesino", familia:"halogenos" },
  { z:118, simb:"Og", nombre:"Oganesón", familia:"gasesNobles" }
];
// ===============================
// ELEMENTOS 21–56
// ===============================

elements.push(
  {
    n: 21, s: "Sc", name: "Escandio", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d1 4s2",
    short: "[Ar] 3d1 4s2"
  },
  {
    n: 22, s: "Ti", name: "Titanio", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d2 4s2",
    short: "[Ar] 3d2 4s2"
  },
  {
    n: 23, s: "V", name: "Vanadio", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d3 4s2",
    short: "[Ar] 3d3 4s2"
  },
  {
    n: 24, s: "Cr", name: "Cromo", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d5 4s1",
    short: "[Ar] 3d5 4s1"
  },
  {
    n: 25, s: "Mn", name: "Manganeso", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d5 4s2",
    short: "[Ar] 3d5 4s2"
  },
  {
    n: 26, s: "Fe", name: "Hierro", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d6 4s2",
    short: "[Ar] 3d6 4s2"
  },
  {
    n: 27, s: "Co", name: "Cobalto", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d7 4s2",
    short: "[Ar] 3d7 4s2"
  },
  {
    n: 28, s: "Ni", name: "Níquel", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d8 4s2",
    short: "[Ar] 3d8 4s2"
  },
  {
    n: 29, s: "Cu", name: "Cobre", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s1",
    short: "[Ar] 3d10 4s1"
  },
  {
    n: 30, s: "Zn", name: "Zinc", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2",
    short: "[Ar] 3d10 4s2"
  },

  // ——— Período 4 completo hasta Kr ———
  {
    n: 31, s: "Ga", name: "Galio", fam: "otros metales", block: "p",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p1",
    short: "[Ar] 3d10 4s2 4p1"
  },
  {
    n: 32, s: "Ge", name: "Germanio", fam: "metaloides", block: "p",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p2",
    short: "[Ar] 3d10 4s2 4p2"
  },
  {
    n: 33, s: "As", name: "Arsénico", fam: "metaloides", block: "p",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p3",
    short: "[Ar] 3d10 4s2 4p3"
  },
  {
    n: 34, s: "Se", name: "Selenio", fam: "no metales", block: "p",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p4",
    short: "[Ar] 3d10 4s2 4p4"
  },
  {
    n: 35, s: "Br", name: "Bromo", fam: "halógenos", block: "p",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p5",
    short: "[Ar] 3d10 4s2 4p5"
  },
  {
    n: 36, s: "Kr", name: "Kriptón", fam: "gases nobles", block: "p",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6",
    short: "[Ar] 3d10 4s2 4p6"
  },

  // ——— Período 5 (Y → Xe) ———
  {
    n: 37, s: "Rb", name: "Rubidio", fam: "metales alcalinos", block: "s",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s1",
    short: "[Kr] 5s1"
  },
  {
    n: 38, s: "Sr", name: "Estroncio", fam: "alcalinotérreos", block: "s",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s2",
    short: "[Kr] 5s2"
  },
  {
    n: 39, s: "Y", name: "Itrio", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d1 5s2",
    short: "[Kr] 4d1 5s2"
  },
  {
    n: 40, s: "Zr", name: "Circonio", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d2 5s2",
    short: "[Kr] 4d2 5s2"
  },
  {
    n: 41, s: "Nb", name: "Niobio", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d4 5s1",
    short: "[Kr] 4d4 5s1"
  },
  {
    n: 42, s: "Mo", name: "Molibdeno", fam: "metales de transición", block: "d",
    conf: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d5 5s1",
    short: "[Kr] 4d5 5s1"
  },
  {
    n: 43, s: "Tc", name: "Tecnecio", fam: "metales de transición", block: "d",
    conf: "[SE USA CONFIG TEÓRICA] 1s2 ... 4d5 5s2",
    short: "[Kr] 4d5 5s2"
  },
  {
    n: 44, s: "Ru", name: "Rutenio", fam: "metales de transición", block: "d",
    conf: "1s2 ... 4d7 5s1",
    short: "[Kr] 4d7 5s1"
  },
  {
    n: 45, s: "Rh", name: "Rodio", fam: "metales de transición", block: "d",
    conf: "1s2 ... 4d8 5s1",
    short: "[Kr] 4d8 5s1"
  },
  {
    n: 46, s: "Pd", name: "Paladio", fam: "metales de transición", block: "d",
    conf: "1s2 ... 4d10",
    short: "[Kr] 4d10"
  },
  {
    n: 47, s: "Ag", name: "Plata", fam: "metales de transición", block: "d",
    conf: "1s2 ... 4d10 5s1",
    short: "[Kr] 4d10 5s1"
  },
  {
    n: 48, s: "Cd", name: "Cadmio", fam: "metales de transición", block: "d",
    conf: "1s2 ... 4d10 5s2",
    short: "[Kr] 4d10 5s2"
  },
  {
    n: 49, s: "In", name: "Indio", fam: "otros metales", block: "p",
    conf: "1s2 ... 4d10 5s2 5p1",
    short: "[Kr] 4d10 5s2 5p1"
  },
  {
    n: 50, s: "Sn", name: "Estaño", fam: "otros metales", block: "p",
    conf: "11s2 ... 4d10 5s2 5p2",
    short: "[Kr] 4d10 5s2 5p2"
  },
  {
    n: 51, s: "Sb", name: "Antimonio", fam: "metaloides", block: "p",
    conf: "1s2 ... 4d10 5s2 5p3",
    short: "[Kr] 4d10 5s2 5p3"
  },
  {
    n: 52, s: "Te", name: "Telurio", fam: "metaloides", block: "p",
    conf: "1s2 ... 4d10 5s2 5p4",
    short: "[Kr] 4d10 5s2 5p4"
  },
  {
    n: 53, s: "I", name: "Yodo", fam: "halógenos", block: "p",
    conf: "1s2 ... 4d10 5s2 5p5",
    short: "[Kr] 4d10 5s2 5p5"
  },
  {
    n: 54, s: "Xe", name: "Xenón", fam: "gases nobles", block: "p",
    conf: "1s2 ... 4d10 5s2 5p6",
    short: "[Kr] 4d10 5s2 5p6"
  },

  // ——— Inicio de 6to período ———
  {
    n: 55, s: "Cs", name: "Cesio", fam: "metales alcalinos", block: "s",
    conf: "[Xe] 6s1",
    short: "[Xe] 6s1"
  },
  {
    n: 56, s: "Ba", name: "Bario", fam: "alcalinotérreos", block: "s",
    conf: "[Xe] 6s2",
    short: "[Xe] 6s2"
  }
);
// ===============================
// ELEMENTOS 57–86
// ===============================

// Lantánidos (57–71)
elements.push(
  {
    n: 57, s: "La", name: "Lantano", fam: "lantánidos", block: "f",
    conf: "[Xe] 5d1 6s2",
    short: "[Xe] 5d1 6s2"
  },
  {
    n: 58, s: "Ce", name: "Cerio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f1 5d1 6s2",
    short: "[Xe] 4f1 5d1 6s2"
  },
  {
    n: 59, s: "Pr", name: "Praseodimio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f3 6s2",
    short: "[Xe] 4f3 6s2"
  },
  {
    n: 60, s: "Nd", name: "Neodimio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f4 6s2",
    short: "[Xe] 4f4 6s2"
  },
  {
    n: 61, s: "Pm", name: "Prometio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f5 6s2",
    short: "[Xe] 4f5 6s2"
  },
  {
    n: 62, s: "Sm", name: "Samario", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f6 6s2",
    short: "[Xe] 4f6 6s2"
  },
  {
    n: 63, s: "Eu", name: "Europio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f7 6s2",
    short: "[Xe] 4f7 6s2"
  },
  {
    n: 64, s: "Gd", name: "Gadolinio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f7 5d1 6s2",
    short: "[Xe] 4f7 5d1 6s2"
  },
  {
    n: 65, s: "Tb", name: "Terbio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f9 6s2",
    short: "[Xe] 4f9 6s2"
  },
  {
    n: 66, s: "Dy", name: "Disprosio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f10 6s2",
    short: "[Xe] 4f10 6s2"
  },
  {
    n: 67, s: "Ho", name: "Holmio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f11 6s2",
    short: "[Xe] 4f11 6s2"
  },
  {
    n: 68, s: "Er", name: "Erbio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f12 6s2",
    short: "[Xe] 4f12 6s2"
  },
  {
    n: 69, s: "Tm", name: "Tulio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f13 6s2",
    short: "[Xe] 4f13 6s2"
  },
  {
    n: 70, s: "Yb", name: "Iterbio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f14 6s2",
    short: "[Xe] 4f14 6s2"
  },
  {
    n: 71, s: "Lu", name: "Lutecio", fam: "lantánidos", block: "f",
    conf: "[Xe] 4f14 5d1 6s2",
    short: "[Xe] 4f14 5d1 6s2"
  }
);

// Actínidos (72–86)
elements.push(
  {
    n: 72, s: "Hf", name: "Hafnio", fam: "metales de transición", block: "d",
    conf: "[Xe] 4f14 5d2 6s2",
    short: "[Xe] 4f14 5d2 6s2"
  },
  {
    n: 73, s: "Ta", name: "Tántalo", fam: "metales de transición", block: "d",
    conf: "[Xe] 4f14 5d3 6s2",
    short: "[Xe] 4f14 5d3 6s2"
  },
  {
    n: 74, s: "W", name: "Wolframio", fam: "metales de transición", block: "d",
    conf: "[Xe] 4f14 5d4 6s2",
    short: "[Xe] 4f14 5d4 6s2"
  },
  {
    n: 75, s: "Re", name: "Renio", fam: "metales de transición", block: "d",
    conf: "[Xe] 4f14 5d5 6s2",
    short: "[Xe] 4f14 5d5 6s2"
  },
  {
    n: 76, s: "Os", name: "Osmio", fam: "metales de transición", block: "d",
    conf: "[Xe] 4f14 5d6 6s2",
    short: "[Xe] 4f14 5d6 6s2"
  },
  {
    n: 77, s: "Ir", name: "Iridio", fam: "metales de transición", block: "d",
    conf: "[Xe] 4f14 5d7 6s2",
    short: "[Xe] 4f14 5d7 6s2"
  },
  {
    n: 78, s: "Pt", name: "Platino", fam: "metales de transición", block: "d",
    conf: "[Xe] 4f14 5d9 6s1",
    short: "[Xe] 4f14 5d9 6s1"
  },
  {
    n: 79, s: "Au", name: "Oro", fam: "metales de transición", block: "d",
    conf: "[Xe] 4f14 5d10 6s1",
    short: "[Xe] 4f14 5d10 6s1"
  },
  {
    n: 80, s: "Hg", name: "Mercurio", fam: "metales de transición", block: "d",
    conf: "[Xe] 4f14 5d10 6s2",
    short: "[Xe] 4f14 5d10 6s2"
  },
  {
    n: 81, s: "Tl", name: "Talio", fam: "otros metales", block: "p",
    conf: "[Xe] 4f14 5d10 6s2 6p1",
    short: "[Xe] 4f14 5d10 6s2 6p1"
  },
  {
    n: 82, s: "Pb", name: "Plomo", fam: "otros metales", block: "p",
    conf: "[Xe] 4f14 5d10 6s2 6p2",
    short: "[Xe] 4f14 5d10 6s2 6p2"
  },
  {
    n: 83, s: "Bi", name: "Bismuto", fam: "otros metales", block: "p",
    conf: "[Xe] 4f14 5d10 6s2 6p3",
    short: "[Xe] 4f14 5d10 6s2 6p3"
  },
  {
    n: 84, s: "Po", name: "Polonio", fam: "metaloides", block: "p",
    conf: "[Xe] 4f14 5d10 6s2 6p4",
    short: "[Xe] 4f14 5d10 6s2 6p4"
  },
  {
    n: 85, s: "At", name: "Astato", fam: "halógenos", block: "p",
    conf: "[Xe] 4f14 5d10 6s2 6p5",
    short: "[Xe] 4f14 5d10 6s2 6p5"
  },
  {
    n: 86, s: "Rn", name: "Radón", fam: "gases nobles", block: "p",
    conf: "[Xe] 4f14 5d10 6s2 6p6",
    short: "[Xe] 4f14 5d10 6s2 6p6"
  }
);
    // ============================
    // EXPORTAR HISTORIAL A CSV
    // ============================
    function exportCSV() {
        if (historial.length === 0) {
            alert("Aún no hay datos en el historial.");
            return;
        }

        let csv = "Número,Nombre,Símbolo,Configuración Completa,Configuración Reducida,Familia\n";

        historial.forEach(item => {
            csv += `${item.numero},${item.nombre},${item.simbolo},"${item.configCompleta}","${item.configReducida}",${item.familia}\n`;
        });

        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "historial_elementos.csv";
        a.click();

        URL.revokeObjectURL(url);
    }

    document.getElementById("exportarCSV").addEventListener("click", exportCSV);


    // ============================
    // COLORES SEGÚN FAMILIA (TARJETA)
    // ============================
    function getFamilyColor(familia) {
        const colores = {
            "Alcalino": "#FFB3B3",
            "Alcalinotérreo": "#FFD6A5",
            "Metales de transición": "#FDFFB6",
            "Otros metales": "#CAFFBF",
            "Metaloides": "#9BF6FF",
            "No metales": "#A0C4FF",
            "Halógenos": "#BDB2FF",
            "Gases nobles": "#FFC6FF",
            "Lantánidos": "#FFFFC2",
            "Actínidos": "#D0F4DE"
        };
        return colores[familia] || "#FFFFFF";
    }

    // ============================
    // APLICAR COLOR A LA CARTA
    // ============================
    function colorearCarta(elemento) {
        const card = document.querySelector(".card");
        card.style.background = getFamilyColor(elemento.familia);
    }


    // ============================
    // ASIGNAR CONFIGURACIÓN S, P, D, F SUBRAYADA POR COLOR
    // ============================
    function colorearSubniveles(texto) {
        return texto
            .replace(/(\d+s\d+)/g, "<span class='sub-s'>$1</span>")
            .replace(/(\d+p\d+)/g, "<span class='sub-p'>$1</span>")
            .replace(/(\d+d\d+)/g, "<span class='sub-d'>$1</span>")
            .replace(/(\d+f\d+)/g, "<span class='sub-f'>$1</span>");
    }


    // ============================
    // FUNCIÓN PARA MOSTRAR CONFIGURACIÓN ELECTRÓNICA
    // ============================
    document.getElementById("mostrarConfig").addEventListener("click", () => {
        if (!ultimoElemento) return;

        const frente = document.querySelector(".card-front");
        const atras = document.querySelector(".card-back");

        const configC = colorearSubniveles(ultimoElemento.configuracion);
        const configR = colorearSubniveles(ultimoElemento.configuracionReducida);

        atras.innerHTML = `
            <h2>${ultimoElemento.simbolo}</h2>
            <h3>Configuración electrónica</h3>

            <p><strong>Completa:</strong></p>
            <p class="config">${configC}</p>

            <p><strong>Reducida:</strong></p>
            <p class="config">${configR}</p>

            <button id="volver">Volver</button>
        `;

        // Activar animación flip 3D
        document.querySelector(".card-inner").classList.add("flip");

        // Botón volver
        document.getElementById("volver").addEventListener("click", () => {
            document.querySelector(".card-inner").classList.remove("flip");
        });
    });

});
