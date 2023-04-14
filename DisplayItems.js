
import { ADATLISTA } from "./adat.js";

function Display()
{
    var container = document.getElementById("publik");
    for(var i =0;i<ADATLISTA.length;i++)
    {
        var row = `<div class="card m-1" id="gallery-images" style="width: 18rem;">
        <img class="card-img-top" src="./images/teszt.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${ADATLISTA[i].nev}</h5>
        <p class="card-text">Fajta:${ADATLISTA[i].fajta}</p>
        <p class="card-text">Kor:${ADATLISTA[i].kor}</p>
        <a href="#" class="btn btn-primary megvizsgal">Megvizsgál</a>
        <button href="#" class="btn btn-primary" value="${i}" id="buy">Kosárba tesz</button>
      </div>
        </div>`
        container.innerHTML+=row;
     }
}
Display();

$(".btn").click('#buy',function(){
    var index = $(this).val();

    var newrecord = {nev:ADATLISTA[index].nev,fajta:ADATLISTA[index].fajta,kor:ADATLISTA[index].kor,lab:ADATLISTA[index].lab};
    
addCart(newrecord,index);
});


function addCart(newrecord,id)
{
    var container = document.getElementById("kosar");
    var row = `<div class="card m-1" id="remove_${id}" style="width: 18rem;">
        <img class="card-img-top" src="./images/teszt.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${newrecord.nev}</h5>
        <p class="card-text">Fajta:${newrecord.fajta}</p>
        <p class="card-text">Kor:${newrecord.kor}</p>
        <a class="btn btn-primary">Megvizsgál</a>
        <button  class="btn btn-primary" value="${id}" id="delete">X</button>
      </div>
        </div>`
        container.innerHTML+=row;
}

$(document).on('click', '#delete', function() {
    var index = $(this).val();
    document.getElementById("remove_"+index).remove();
   
    console.log(index);
  });