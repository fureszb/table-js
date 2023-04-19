import {megjelenit} from "./megjelenit.js";


export function EditItem(lista)
{
    $(document).on("click",'.edit',function(){
        var rowindex =  $(this).closest("tr").index();
        var nevinput = document.createElement("INPUT");
        nevinput.setAttribute("type", "text");
        nevinput.placeholder= "név";
    
    
        var fajta = document.createElement("INPUT");
    fajta.setAttribute("type", "text");
    fajta.placeholder= "fajta";
    
    var kor = document.createElement("INPUT");
    kor.setAttribute("type", "text");
    kor.placeholder= "kor";
    
    
    var labszam = document.createElement("INPUT");
    labszam.setAttribute("type", "text");
    labszam.placeholder= "labszam";
    
    var mentes =  document.createElement("button");
    mentes.value="+";
    mentes.innerHTML = 'mentés';
    mentes.onclick = function(){
       
    
        lista[rowindex].nev = nevinput.value;
        lista[rowindex].fajta = fajta.value;
        lista[rowindex].kor = kor.value;
        lista[rowindex].lab = labszam.value;
    megjelenit(lista);
    document.querySelector('#newrow').disabled = false;
    
    };
    
    
        var table =   document.getElementById("elementBody");
        var crow = table.rows[ $(this).closest("tr").index()];
       
        for (var i = 0; i < crow.childElementCount-2; i++) {
           
           nevinput.value = crow.cells[0].innerText;
           fajta.value = crow.cells[1].innerText;
           kor.value = crow.cells[2].innerText;
           labszam.value = crow.cells[3].innerText;
            crow.cells[0].append(nevinput);
            crow.cells[1].append(fajta);
            crow.cells[2].append(kor);
            crow.cells[3].append(labszam);
            crow.cells[4].append(mentes);
            
        }
    
    
    });
    
}