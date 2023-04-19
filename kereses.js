import { szures } from "./szures.js";
import { megjelenit } from "./megjelenit.js";

export function Search(lista) {
  const NEVINPUTELEM = $("#nev");
  const KORINPUTELEM = $("#kor");
  const FAJTAINPUTELEM = $("#fajta");

  NEVINPUTELEM.on("input", function () {
    let nevErtek = NEVINPUTELEM.val();
    let szurtlista = szures(lista, "nev", nevErtek);

    let tartalom = megjelenit(szurtlista);
    $("#elementBody").html(tartalom);
  });

  KORINPUTELEM.on("input", function () {
    let korErtek = KORINPUTELEM.val();
    let szurtlista = szures(lista, "kor", korErtek);

    let tartalom = megjelenit(szurtlista);
    $("#elementBody").html(tartalom);
  });

  FAJTAINPUTELEM.on("input", function () {
    let fajtaErtek = FAJTAINPUTELEM.val();
    let szurtlista = szures(lista, "fajta", fajtaErtek);

    let tartalom = megjelenit(szurtlista);
    $("#elementBody").html(tartalom);
  });
}
