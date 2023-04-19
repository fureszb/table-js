import { ADATLISTA } from "./adat.js";
import { megjelenit } from "./megjelenit.js";

export function AddNewItem(lista) {
  $("#newrow").on("click", function () {
    var nevinput = $("<input>").attr({
      type: "text",
      placeholder: "név",
    });

    var fajta = $("<input>").attr({
      type: "text",
      placeholder: "fajta",
    });

    var kor = $("<input>").attr({
      type: "text",
      placeholder: "kor",
    });

    var labszam = $("<input>").attr({
      type: "text",
      placeholder: "labszam",
    });

    var mentes = $("<button>")
      .val("+")
      .text("+")
      .click(function () {
        var newrecord = {
          nev: nevinput.val(),
          fajta: fajta.val(),
          kor: kor.val(),
          lab: labszam.val(),
        };

        lista.push(newrecord);

        megjelenit(lista);

        $("#newrow").prop("disabled", false);
      });

    var tableRow = $("#elementBody");
    var row = tableRow.prepend("<tr>").find("tr:first");

    if (row.length != 0) {
      $("#newrow").prop("disabled", true);
    }

    $("<td>").append(nevinput).appendTo(row);
    $("<td>").append(fajta).appendTo(row);
    $("<td>").append(kor).appendTo(row);
    $("<td>").append(labszam).appendTo(row);
    $("<td>").append(mentes).appendTo(row);
  });
}
