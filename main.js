import { ADATLISTA } from "./adat.js";

$(function () {
    osszallit();
    const ELEM = $(".table");
    let tartalom = osszeAllit();
    ELEM.append(tartalom);
});

function osszallit() {
    let txt = "<table>";
    for (let index = 0; index < 3; index++) {
        txt += `<tr>`;
        const obejct = ADATLISTA
        for (let index = 0; index < ADATLISTA.length; index++) {
            txt += `
                    <td>${ADATLISTA[index]}</td>
                   `;
        }
        txt += `</tr>`;
    }
    
    txt = "</table>";
    console.log(txt);
    return txt;
};
