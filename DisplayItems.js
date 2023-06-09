import { ADATLISTA } from "./adat.js";
import { kep } from "./gallery.js";

function Display() {
  var container = $("#publik");
  for (var i = 0; i < ADATLISTA.length; i++) {
    var row = `<div class="card m-1" id="gallery-images" style="width: 18rem;">
      <img class="card-img-top" src="./images/teszt.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${ADATLISTA[i].nev}</h5>
        <p class="card-text">Fajta:${ADATLISTA[i].fajta}</p>
        <p class="card-text">Kor:${ADATLISTA[i].kor}</p>
        <button type="button" class="btn btn-primary megvizsgal" data-bs-toggle="modal" data-bs-target="#exampleModal" >Megvizsgál</button>
        <button href="#" class="btn btn-primary" value="${i}" id="buy">Kosárba tesz</button>
      </div>
    </div>`;
    container.append(row);
  }
}

Display();

$(document).on("click", "#buy", function () {
  var index = $(this).val();

  var newrecord = {
    nev: ADATLISTA[index].nev,
    fajta: ADATLISTA[index].fajta,
    kor: ADATLISTA[index].kor,
    lab: ADATLISTA[index].lab,
  };

  addCart(newrecord, index);
});

function addCart(newrecord, id) {
  var container = $("#kosar");
  var row = `<div class="card m-1" id="remove_${id}" style="width: 18rem;">
      <img class="card-img-top" src="./images/teszt.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${newrecord.nev}</h5>
        <p class="card-text">Fajta:${newrecord.fajta}</p>
        <p class="card-text">Kor:${newrecord.kor}</p>
        <a class="btn btn-primary">Megvizsgál</a>
        <button class="btn btn-primary" value="${id}" id="delete">X</button>
      </div>
    </div>`;
  container.append(row);
}

$(document).on("click", "#delete", function () {
  var index = $(this).val();
  $("#remove_" + index).remove();
});

kep();
