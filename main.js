import { ADATLISTA } from "./adat.js";
const kulcsLista = Object.keys(ADATLISTA[0]);

$(function () {
  
    osszallit(ADATLISTA);
    const ELEM = $(".table");
    let tartalom = osszeAllit();
    ELEM.append(tartalom);
});

function osszallit(lista){
    let txt = "<div class= `table-responsive`>";
    txt += "<table class=`table table-stripped table-boarded table-hover`>";
    txt += "<thead class=`table-dark`><tr>";
    for(const key in kulcsLista) {
        txt += `<th id='${key}' > ${kulcsLista[key]}  ⇅<th/>`;        
    }
    txt += "<th></th></tr></thead>";
    for (let index = 0; index < lista.length; index++) {
        txt += "<tr>";
        const object = lista[index];
        for (const key in object) {
            const element = object[key];
            if (key === "nev") {
                txt += `<th> ${element}</th>`;                
            }
            else{
                txt += `<td> ${element}</td>`;
            }
        }
        txt += '<td><button class="gomb torol" id="t${index}">✖</button></td></tr>';
    }
    txt += "</table></div>";
    return txt;
};
