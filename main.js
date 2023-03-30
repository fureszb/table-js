import { ADATLISTA } from "./adat.js";
import { kulcsLista } from "./adat.js";
$(function () {
    adatMegjelenit(ADATLISTA)

    const NEVELEM = $("#nev");
    NEVELEM = NEVELEM.event.target;
    NEVELEM.on("click", ()=>{
        rendezes(ADATLISTA, "nev")
    })
})

function rendezes(lista, kulcs){
    lista.sort(a,b, ()=>{
        return a[kulcs].localeCompare(b[kulcs]);
    })
}

function adatMegjelenit(lista) {
    let txt = "<div class = 'table-responsive'>"
    txt += "<table class= 'table table-bordered table-hover'>";
    txt += "<thead class = 'table-primary'><tr>";
    for (const key in kulcsLista){
      txt += `<th id ='${key}'> ${kulcsLista[key]}</th>`; 
    }
    txt += "<th></th></tr></thead>"
    for (let index = 0; index < lista.length; index++) {
      txt += '<tr>'
      const object = lista[index];
      for (const key in object){
        const element = object[key]
        if(key == nev){
          txt += `<th> ${element} </th>`
        } else {
          txt += `<td> ${element} </td>`
        }
      }
      txt += `<td><button id="${index}"> X </button></td>`;
      txt += `</tr>`    
    }
    txt += '</table>'
    txt += '</div>'
    
    let hely = $('article')
    return hely.append(txt);
  }
  