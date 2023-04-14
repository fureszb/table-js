import { ADATLISTA } from "./adat.js";
import {megjelenit} from "./megjelenit.js";

export function AddNewItem(lista)
{
  
    $("#newrow").on("click",function(){
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
        mentes.innerHTML = '+';
        mentes.onclick = function(){
        
        var newrecord = {nev:nevinput.value,fajta:fajta.value,kor:kor.value,lab:labszam.value};
       
        lista.push(newrecord);
       
       
        megjelenit(lista);
        
        document.querySelector('#newrow').disabled = false;
        
        };
        var tableRow  = document.getElementById("elementBody");
        var row = tableRow.insertRow(0);
        if(row.length!=0)
        {
            document.querySelector('#newrow').disabled = true;
        }
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5= row.insertCell(4);
         cell1.append(nevinput);
         cell2.append(fajta);
         cell3.append(kor);
         cell4.append(labszam);
         cell5.append(mentes);
        });
}