
export  function kep()

{
  
  $(document).ready(function() {
    $("#megvizsgal").on("click", function() {
    
      let kepIndex = 0;
      const $ARTICLE = $(".galleria");
      const LISTA = ["teszt.jpg", "gold-golden-retriever.jpeg", "teszt.jpg", "teszt.jpg"];

      // Kiíratjuk a képeket
      for (let index = 0; index < LISTA.length; index++) {
        $ARTICLE.append(`<div><img class="auto" width="60px" height="60px" src="./images/${LISTA[index]}"></div>`);
      }

      // A "megvizsgal" gombra való kattintás esetén megjelenítjük a nagyító funkciókat
      $(".lightbox").show();

      // Beállítjuk a képgombok működését
      $ARTICLE.find("div").on("click", function() {
        kepIndex = $(this).index();
        $(".nagykep").attr("src", `./images/${LISTA[kepIndex]}`);
      });
      $(".jobb").on("click", function() {
        kepIndex++;
        if (kepIndex > LISTA.length - 1) {
          kepIndex = 0;
        }
        $(".nagykep").attr("src", `./images/${LISTA[kepIndex]}`);
      });
      $(".bal").on("click", function() {
        kepIndex--;
        if (kepIndex < 0) {
          kepIndex = LISTA.length - 1;
        }
        $(".nagykep").attr("src", `./images/${LISTA[kepIndex]}`);
      });
    });
  });
}

