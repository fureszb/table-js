import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezes.js";
import { szures } from "./szures.js";
import { kulcsLista } from "./adat.js";
$(function () {
    console.log(szures(ADATLISTA, "fajta", "keverék"));
    rendezesek();

});
const NEVINPUTELEM = $("#nev");
const KORINPUTELEM = $("#kor");
const FAJTAINPUTELEM = $("#fajta");

NEVINPUTELEM.on("input", function () {
    let nevErtek = NEVINPUTELEM.val();
    let szurtlista = szures(ADATLISTA, "nev", nevErtek);
    console.log(szurtlista);
    let tartalom = megjelenit(szurtlista);
    $("table").replaceWith(tartalom);
});

KORINPUTELEM.on("input", function () {
    let korErtek = KORINPUTELEM.val();
    let szurtlista = szures(ADATLISTA, "kor", korErtek);
    console.log(szurtlista);
    let tartalom = megjelenit(szurtlista);
    $("table").replaceWith(tartalom);
});

FAJTAINPUTELEM.on("input", function () {
    let fajtaErtek = FAJTAINPUTELEM.val();
    let szurtlista = szures(ADATLISTA, "fajta", fajtaErtek);
    console.log(szurtlista);
    let tartalom = megjelenit(szurtlista);
    $("table").replaceWith(tartalom);
});

function rendezesek() {

    const TABLAZATELEM = $("article");



    let tartalom = megjelenit(ADATLISTA);
    TABLAZATELEM.append(tartalom);


    $("th").on("click", function () {
        let index = $(this).index();
        let kulcs = Object.keys(ADATLISTA[0])[index];

        rendezes(ADATLISTA, kulcs);

        let tablaElem = $("table");
        let ujTartalom = megjelenit(ADATLISTA);
        tablaElem.replaceWith(ujTartalom);
    })
};
function megjelenit(lista) {
    let txt = "";
    txt += "<table class='table table-bordered text-center'>";
    txt += "<tr>";
    for (const key in kulcsLista) {
        txt += `<th class='table-dark'> ${kulcsLista[key]}<button>⇵</button></th>`;
    }

    txt += "<th class='table-dark'></th>";
    txt += "</tr>";
    for (let index = 0; index < lista.length; index++) {
        txt += "<tr>";
        for (let kulcs in lista[index]) {
            txt += `<td>${lista[index][kulcs]}</td>`;
        }
        txt += "<td class='text-danger'y>✘</td>";
        txt += "</tr>";
    }
    txt += "</table>";
    return txt;
}
