
import { ADATLISTA } from "./adat.js";
let kosar=[];

function Display()
{
    var container = document.getElementById("publik");
    for(var i =0;i<ADATLISTA.length;i++)
    {
        var row = `<div class="card m-1" style="width: 18rem;">
        <img class="card-img-top" src="./images/teszt.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${ADATLISTA[i].nev}</h5>
        <p class="card-text">Fajta:${ADATLISTA[i].fajta}</p>
        <p class="card-text">Kor:${ADATLISTA[i].kor}</p>
        <a href="#" class="btn btn-primary">Megvizsgál</a>
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
    kosar.push(newrecord);

DisplayCartItem();

});




function DisplayCartItem()
{
    
    var container = document.getElementById("kosar");
    for(var i =0;i<kosar.length;i++)
    {
        

        var row = `<div class="card m-1" style="width: 18rem;">
        <img class="card-img-top" src="./images/teszt.jpg" alt="Card image cap">
        <div class="card-body">
      
        <h5 class="card-title">${kosar[i].nev}</h5>
        <p class="card-text">Fajta:${kosar[i].fajta}</p>
        <p class="card-text">Kor:${kosar[i].kor}</p>
        <a href="#" class="btn btn-primary">Megvizsgál</a>
        <button href="#" class="btn btn-primary">Kosárba tesz</button>
        
      </div>
        </div>`
        container.innerHTML+=row;
    }
     
}



