import { ADATLISTA } from "./adat.js";
import { kulcsLista } from "./adat.js";
import { KEPEKLINK } from "./adat.js";
$(function () {

    const CARDELEM = $("#publik");
    let tartalom = megjelenit(ADATLISTA);
    CARDELEM.append(tartalom);

    $(".btn").on("click", function () {
        let index = (event.target.id);
        console.log(index);
        
    });

})

function megjelenit(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt +=  "<div class='card col-sm-4' >";
        txt+='<img class="card-img-top" src="$KEPEKLINK[kulcs]" alt="kutya képek">'
        txt += "<div class='card-body'>";
        for (let kulcs in lista[index]) {
            txt
            txt += `<h4 class='card-title'>${kulcsLista[kulcs]}:</h4><p>${lista[index][kulcs]}</p>`;
        }
        txt+="<a href=# class='btn btn-primary' id='" + index + "'>Mutat</a>";
        txt += "</div>";
        txt += "</div>";
    }
    return txt;
}