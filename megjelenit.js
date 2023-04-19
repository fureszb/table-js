import { kulcsLista } from "./adat.js";
export function megjelenit(lista) {
    console.log(lista);
    var table = $("#tablazat");
    let txt = "";
    txt += "<table class='table table-bordered text-center'>";
    txt += "<thead>";
    for (const key in kulcsLista) {
        txt += `<th data-column="${kulcsLista[key]}" data-order="desc" class='table-dark'> ${kulcsLista[key]}</th>`;
    }

    txt += `<th class='table-dark'>Törlés</th>`
    txt += `<th class='table-dark'>Modositás</th>`
    txt += "</thead>";
    txt += "<tbody id='elementBody'>";
    for (let index = 0; index < lista.length; index++) {

        txt += "<tr>";
        for (let kulcs in lista[index]) {
            txt += `<td>${lista[index][kulcs]}</td>`;
        }
        txt += `<td  class="text-danger deletetd">✘</td>`;
        txt += `<td  class="text-success edit">modosit</td>`;
        txt += "</tr>";

    }
    txt += "</tbody>";
    txt += "</table>";
    table.html(txt);
}
