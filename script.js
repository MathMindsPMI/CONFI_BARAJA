// ==============================
// SCRIPT.JS — PARTE 1
// ELEMENTOS 1–30 (H → Zn)
// ==============================

// Colores por familia química
const familyColors = {
    "No Metales": "#4CAF50",
    "Gases Nobles": "#00BCD4",
    "Metales Alcalinos": "#FF9800",
    "Metales Alcalinotérreos": "#FFB74D",
    "Metaloides": "#9C27B0",
    "Halógenos": "#E91E63",
    "Metales de Transición": "#3F51B5",
    "Lantánidos": "#8E24AA",
    "Actínidos": "#6A1B9A",
    "Otros Metales": "#607D8B"
};

// Lista completa de elementos (PARTE 1)
const elementos = [
    // 1 - 10
    { num: 1, simbolo: "H", nombre: "Hidrógeno", config: "1s1", familia: "No Metales" },
    { num: 2, simbolo: "He", nombre: "Helio", config: "1s2", familia: "Gases Nobles" },
    { num: 3, simbolo: "Li", nombre: "Litio", config: "1s2 2s1", familia: "Metales Alcalinos" },
    { num: 4, simbolo: "Be", nombre: "Berilio", config: "1s2 2s2", familia: "Metales Alcalinotérreos" },
    { num: 5, simbolo: "B", nombre: "Boro", config: "1s2 2s2 2p1", familia: "Metaloides" },
    { num: 6, simbolo: "C", nombre: "Carbono", config: "1s2 2s2 2p2", familia: "No Metales" },
    { num: 7, simbolo: "N", nombre: "Nitrógeno", config: "1s2 2s2 2p3", familia: "No Metales" },
    { num: 8, simbolo: "O", nombre: "Oxígeno", config: "1s2 2s2 2p4", familia: "No Metales" },
    { num: 9, simbolo: "F", nombre: "Flúor", config: "1s2 2s2 2p5", familia: "Halógenos" },
    { num: 10, simbolo: "Ne", nombre: "Neón", config: "1s2 2s2 2p6", familia: "Gases Nobles" },

    // 11 - 20
    { num: 11, simbolo: "Na", nombre: "Sodio", config: "[Ne] 3s1", familia: "Metales Alcalinos" },
    { num: 12, simbolo: "Mg", nombre: "Magnesio", config: "[Ne] 3s2", familia: "Metales Alcalinotérreos" },
    { num: 13, simbolo: "Al", nombre: "Aluminio", config: "[Ne] 3s2 3p1", familia: "Otros Metales" },
    { num: 14, simbolo: "Si", nombre: "Silicio", config: "[Ne] 3s2 3p2", familia: "Metaloides" },
    { num: 15, simbolo: "P", nombre: "Fósforo", config: "[Ne] 3s2 3p3", familia: "No Metales" },
    { num: 16, simbolo: "S", nombre: "Azufre", config: "[Ne] 3s2 3p4", familia: "No Metales" },
    { num: 17, simbolo: "Cl", nombre: "Cloro", config: "[Ne] 3s2 3p5", familia: "Halógenos" },
    { num: 18, simbolo: "Ar", nombre: "Argón", config: "[Ne] 3s2 3p6", familia: "Gases Nobles" },
    { num: 19, simbolo: "K", nombre: "Potasio", config: "[Ar] 4s1", familia: "Metales Alcalinos" },
    { num: 20, simbolo: "Ca", nombre: "Calcio", config: "[Ar] 4s2", familia: "Metales Alcalinotérreos" },

    // 21 - 30
    { num: 21, simbolo: "Sc", nombre: "Escandio", config: "[Ar] 3d1 4s2", familia: "Metales de Transición" },
    { num: 22, simbolo: "Ti", nombre: "Titanio", config: "[Ar] 3d2 4s2", familia: "Metales de Transición" },
    { num: 23, simbolo: "V", nombre: "Vanadio", config: "[Ar] 3d3 4s2", familia: "Metales de Transición" },
    { num: 24, simbolo: "Cr", nombre: "Cromo", config: "[Ar] 3d5 4s1", familia: "Metales de Transición" },
    { num: 25, simbolo: "Mn", nombre: "Manganeso", config: "[Ar] 3d5 4s2", familia: "Metales de Transición" },
    { num: 26, simbolo: "Fe", nombre: "Hierro", config: "[Ar] 3d6 4s2", familia: "Metales de Transición" },
    { num: 27, simbolo: "Co", nombre: "Cobalto", config: "[Ar] 3d7 4s2", familia: "Metales de Transición" },
    { num: 28, simbolo: "Ni", nombre: "Níquel", config: "[Ar] 3d8 4s2", familia: "Metales de Transición" },
    { num: 29, simbolo: "Cu", nombre: "Cobre", config: "[Ar] 3d10 4s1", familia: "Metales de Transición" },
    { num: 30, simbolo: "Zn", nombre: "Zinc", config: "[Ar] 3d10 4s2", familia: "Metales de Transición" }
];
// ==============================
// SCRIPT.JS — PARTE 2
// ELEMENTOS 31–60 (Ga → Nd)
// ==============================

// Continuación de la lista
elementos.push(
    // 31 - 40
    { num: 31, simbolo: "Ga", nombre: "Galio", config: "[Ar] 3d10 4s2 4p1", familia: "Otros Metales" },
    { num: 32, simbolo: "Ge", nombre: "Germanio", config: "[Ar] 3d10 4s2 4p2", familia: "Metaloides" },
    { num: 33, simbolo: "As", nombre: "Arsénico", config: "[Ar] 3d10 4s2 4p3", familia: "Metaloides" },
    { num: 34, simbolo: "Se", nombre: "Selenio", config: "[Ar] 3d10 4s2 4p4", familia: "No Metales" },
    { num: 35, simbolo: "Br", nombre: "Bromo", config: "[Ar] 3d10 4s2 4p5", familia: "Halógenos" },
    { num: 36, simbolo: "Kr", nombre: "Kriptón", config: "[Ar] 3d10 4s2 4p6", familia: "Gases Nobles" },
    { num: 37, simbolo: "Rb", nombre: "Rubidio", config: "[Kr] 5s1", familia: "Metales Alcalinos" },
    { num: 38, simbolo: "Sr", nombre: "Estroncio", config: "[Kr] 5s2", familia: "Metales Alcalinotérreos" },
    { num: 39, simbolo: "Y", nombre: "Itrio", config: "[Kr] 4d1 5s2", familia: "Metales de Transición" },
    { num: 40, simbolo: "Zr", nombre: "Zirconio", config: "[Kr] 4d2 5s2", familia: "Metales de Transición" },

    // 41 - 50
    { num: 41, simbolo: "Nb", nombre: "Niobio", config: "[Kr] 4d4 5s1", familia: "Metales de Transición" },
    { num: 42, simbolo: "Mo", nombre: "Molibdeno", config: "[Kr] 4d5 5s1", familia: "Metales de Transición" },
    { num: 43, simbolo: "Tc", nombre: "Tecnecio", config: "[Kr] 4d5 5s2", familia: "Metales de Transición" },
    { num: 44, simbolo: "Ru", nombre: "Rutenio", config: "[Kr] 4d7 5s1", familia: "Metales de Transición" },
    { num: 45, simbolo: "Rh", nombre: "Rodio", config: "[Kr] 4d8 5s1", familia: "Metales de Transición" },
    { num: 46, simbolo: "Pd", nombre: "Paladio", config: "[Kr] 4d10", familia: "Metales de Transición" },
    { num: 47, simbolo: "Ag", nombre: "Plata", config: "[Kr] 4d10 5s1", familia: "Metales de Transición" },
    { num: 48, simbolo: "Cd", nombre: "Cadmio", config: "[Kr] 4d10 5s2", familia: "Metales de Transición" },
    { num: 49, simbolo: "In", nombre: "Indio", config: "[Kr] 4d10 5s2 5p1", familia: "Otros Metales" },
    { num: 50, simbolo: "Sn", nombre: "Estaño", config: "[Kr] 4d10 5s2 5p2", familia: "Otros Metales" },

    // 51 - 60
    { num: 51, simbolo: "Sb", nombre: "Antimonio", config: "[Kr] 4d10 5s2 5p3", familia: "Metaloides" },
    { num: 52, simbolo: "Te", nombre: "Telurio", config: "[Kr] 4d10 5s2 5p4", familia: "Metaloides" },
    { num: 53, simbolo: "I", nombre: "Yodo", config: "[Kr] 4d10 5s2 5p5", familia: "Halógenos" },
    { num: 54, simbolo: "Xe", nombre: "Xenón", config: "[Kr] 4d10 5s2 5p6", familia: "Gases Nobles" },
    { num: 55, simbolo: "Cs", nombre: "Cesio", config: "[Xe] 6s1", familia: "Metales Alcalinos" },
    { num: 56, simbolo: "Ba", nombre: "Bario", config: "[Xe] 6s2", familia: "Metales Alcalinotérreos" },
    { num: 57, simbolo: "La", nombre: "Lantano", config: "[Xe] 5d1 6s2", familia: "Lantánidos" },
    { num: 58, simbolo: "Ce", nombre: "Cerio", config: "[Xe] 4f1 5d1 6s2", familia: "Lantánidos" },
    { num: 59, simbolo: "Pr", nombre: "Praseodimio", config: "[Xe] 4f3 6s2", familia: "Lantánidos" },
    { num: 60, simbolo: "Nd", nombre: "Neodimio", config: "[Xe] 4f4 6s2", familia: "Lantánidos" }
);
// ==============================
// SCRIPT.JS — PARTE 3
// ELEMENTOS 61–90 (Pm → Th)
// ==============================

elementos.push(
    // 61 - 70
    { num: 61, simbolo: "Pm", nombre: "Prometio", config: "[Xe] 4f5 6s2", familia: "Lantánidos" },
    { num: 62, simbolo: "Sm", nombre: "Samario", config: "[Xe] 4f6 6s2", familia: "Lantánidos" },
    { num: 63, simbolo: "Eu", nombre: "Europio", config: "[Xe] 4f7 6s2", familia: "Lantánidos" },
    { num: 64, simbolo: "Gd", nombre: "Gadolinio", config: "[Xe] 4f7 5d1 6s2", familia: "Lantánidos" },
    { num: 65, simbolo: "Tb", nombre: "Terbio", config: "[Xe] 4f9 6s2", familia: "Lantánidos" },
    { num: 66, simbolo: "Dy", nombre: "Disprosio", config: "[Xe] 4f10 6s2", familia: "Lantánidos" },
    { num: 67, simbolo: "Ho", nombre: "Holmio", config: "[Xe] 4f11 6s2", familia: "Lantánidos" },
    { num: 68, simbolo: "Er", nombre: "Erbio", config: "[Xe] 4f12 6s2", familia: "Lantánidos" },
    { num: 69, simbolo: "Tm", nombre: "Tulio", config: "[Xe] 4f13 6s2", familia: "Lantánidos" },
    { num: 70, simbolo: "Yb", nombre: "Iterbio", config: "[Xe] 4f14 6s2", familia: "Lantánidos" },

    // 71 - 80
    { num: 71, simbolo: "Lu", nombre: "Lutecio", config: "[Xe] 4f14 5d1 6s2", familia: "Lantánidos" },
    { num: 72, simbolo: "Hf", nombre: "Hafnio", config: "[Xe] 4f14 5d2 6s2", familia: "Metales de Transición" },
    { num: 73, simbolo: "Ta", nombre: "Tántalo", config: "[Xe] 4f14 5d3 6s2", familia: "Metales de Transición" },
    { num: 74, simbolo: "W", nombre: "Wolframio", config: "[Xe] 4f14 5d4 6s2", familia: "Metales de Transición" },
    { num: 75, simbolo: "Re", nombre: "Renio", config: "[Xe] 4f14 5d5 6s2", familia: "Metales de Transición" },
    { num: 76, simbolo: "Os", nombre: "Osmio", config: "[Xe] 4f14 5d6 6s2", familia: "Metales de Transición" },
    { num: 77, simbolo: "Ir", nombre: "Iridio", config: "[Xe] 4f14 5d7 6s2", familia: "Metales de Transición" },
    { num: 78, simbolo: "Pt", nombre: "Platino", config: "[Xe] 4f14 5d9 6s1", familia: "Metales de Transición" },
    { num: 79, simbolo: "Au", nombre: "Oro", config: "[Xe] 4f14 5d10 6s1", familia: "Metales de Transición" },
    { num: 80, simbolo: "Hg", nombre: "Mercurio", config: "[Xe] 4f14 5d10 6s2", familia: "Metales de Transición" },

    // 81 - 90
    { num: 81, simbolo: "Tl", nombre: "Talio", config: "[Xe] 4f14 5d10 6s2 6p1", familia: "Otros Metales" },
    { num: 82, simbolo: "Pb", nombre: "Plomo", config: "[Xe] 4f14 5d10 6s2 6p2", familia: "Otros Metales" },
    { num: 83, simbolo: "Bi", nombre: "Bismuto", config: "[Xe] 4f14 5d10 6s2 6p3", familia: "Otros Metales" },
    { num: 84, simbolo: "Po", nombre: "Polonio", config: "[Xe] 4f14 5d10 6s2 6p4", familia: "Metaloides" },
    { num: 85, simbolo: "At", nombre: "Astato", config: "[Xe] 4f14 5d10 6s2 6p5", familia: "Halógenos" },
    { num: 86, simbolo: "Rn", nombre: "Radón", config: "[Xe] 4f14 5d10 6s2 6p6", familia: "Gases Nobles" },
    { num: 87, simbolo: "Fr", nombre: "Francio", config: "[Rn] 7s1", familia: "Metales Alcalinos" },
    { num: 88, simbolo: "Ra", nombre: "Radio", config: "[Rn] 7s2", familia: "Metales Alcalinotérreos" },
    { num: 89, simbolo: "Ac", nombre: "Actinio", config: "[Rn] 6d1 7s2", familia: "Actínidos" },
    { num: 90, simbolo: "Th", nombre: "Torio", config: "[Rn] 6d2 7s2", familia: "Actínidos" }
);
// ==============================
// SCRIPT.JS — PARTE 4
// ELEMENTOS 91–118 (Pa → Og)
// ==============================

elementos.push(

    // 91 - 100
    { num: 91, simbolo: "Pa", nombre: "Protactinio", config: "[Rn] 5f2 6d1 7s2", familia: "Actínidos" },
    { num: 92, simbolo: "U", nombre: "Uranio", config: "[Rn] 5f3 6d1 7s2", familia: "Actínidos" },
    { num: 93, simbolo: "Np", nombre: "Neptunio", config: "[Rn] 5f4 6d1 7s2", familia: "Actínidos" },
    { num: 94, simbolo: "Pu", nombre: "Plutonio", config: "[Rn] 5f6 7s2", familia: "Actínidos" },
    { num: 95, simbolo: "Am", nombre: "Americio", config: "[Rn] 5f7 7s2", familia: "Actínidos" },
    { num: 96, simbolo: "Cm", nombre: "Curio", config: "[Rn] 5f7 6d1 7s2", familia: "Actínidos" },
    { num: 97, simbolo: "Bk", nombre: "Berkelio", config: "[Rn] 5f9 7s2", familia: "Actínidos" },
    { num: 98, simbolo: "Cf", nombre: "Californio", config: "[Rn] 5f10 7s2", familia: "Actínidos" },
    { num: 99, simbolo: "Es", nombre: "Einstenio", config: "[Rn] 5f11 7s2", familia: "Actínidos" },
    { num: 100, simbolo: "Fm", nombre: "Fermio", config: "[Rn] 5f12 7s2", familia: "Actínidos" },

    // 101 - 110
    { num: 101, simbolo: "Md", nombre: "Mendelevio", config: "[Rn] 5f13 7s2", familia: "Actínidos" },
    { num: 102, simbolo: "No", nombre: "Nobelio", config: "[Rn] 5f14 7s2", familia: "Actínidos" },
    { num: 103, simbolo: "Lr", nombre: "Lawrencio", config: "[Rn] 5f14 7s2 7p1", familia: "Actínidos" },
    { num: 104, simbolo: "Rf", nombre: "Rutherfordio", config: "[Rn] 5f14 6d2 7s2", familia: "Metales de Transición" },
    { num: 105, simbolo: "Db", nombre: "Dubnio", config: "[Rn] 5f14 6d3 7s2", familia: "Metales de Transición" },
    { num: 106, simbolo: "Sg", nombre: "Seaborgio", config: "[Rn] 5f14 6d4 7s2", familia: "Metales de Transición" },
    { num: 107, simbolo: "Bh", nombre: "Bohrio", config: "[Rn] 5f14 6d5 7s2", familia: "Metales de Transición" },
    { num: 108, simbolo: "Hs", nombre: "Hassio", config: "[Rn] 5f14 6d6 7s2", familia: "Metales de Transición" },
    { num: 109, simbolo: "Mt", nombre: "Meitnerio", config: "[Rn] 5f14 6d7 7s2", familia: "Metales de Transición" },
    { num: 110, simbolo: "Ds", nombre: "Darmstadtio", config: "[Rn] 5f14 6d8 7s2", familia: "Metales de Transición" },

    // 111 - 118
    { num: 111, simbolo: "Rg", nombre: "Roentgenio", config: "[Rn] 5f14 6d9 7s2", familia: "Metales de Transición" },
    { num: 112, simbolo: "Cn", nombre: "Copernicio", config: "[Rn] 5f14 6d10 7s2", familia: "Metales de Transición" },
    { num: 113, simbolo: "Nh", nombre: "Nihonio", config: "[Rn] 5f14 6d10 7s2 7p1", familia: "Otros Metales" },
    { num: 114, simbolo: "Fl", nombre: "Flerovio", config: "[Rn] 5f14 6d10 7s2 7p2", familia: "Otros Metales" },
    { num: 115, simbolo: "Mc", nombre: "Moscovio", config: "[Rn] 5f14 6d10 7s2 7p3", familia: "Otros Metales" },
    { num: 116, simbolo: "Lv", nombre: "Livermorio", config: "[Rn] 5f14 6d10 7s2 7p4", familia: "Otros Metales" },
    { num: 117, simbolo: "Ts", nombre: "Tenesino", config: "[Rn] 5f14 6d10 7s2 7p5", familia: "Halógenos" },
    { num: 118, simbolo: "Og", nombre: "Oganesón", config: "[Rn] 5f14 6d10 7s2 7p6", familia: "Gases Nobles" }
);

// ================================
// PARTE 5 — GENERAR TARJETAS
// ================================

// Función que crea cada tarjeta en el DOM
function generarTarjetas() {
    const contenedor = document.getElementById("cardContainer");
    contenedor.innerHTML = ""; // Limpia tarjetas previas

    elementosCombinados.forEach((elemento, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-header">
                <img src="logo.png" class="card-logo" alt="logo">
                <h3>Elemento ${index + 1}</h3>
            </div>

            <div class="card-body">
                <p><strong>Tipo:</strong> ${elemento.tipo}</p>
                <p><strong>Valor:</strong> ${elemento.valor}</p>
            </div>

            <button class="deleteBtn">Eliminar</button>
        `;

        // Evento para eliminar tarjeta
        card.querySelector(".deleteBtn").addEventListener("click", () => {
            elementosCombinados.splice(index, 1);
            guardarEnLocalStorage();
            generarTarjetas();
        });

        contenedor.appendChild(card);
    });
}

// Llamar después de combinar listas
document.getElementById("btnGenerar").addEventListener("click", () => {
    combinarListas();
    generarTarjetas();
});

