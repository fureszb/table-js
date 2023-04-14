
$('#megvizsgal').click(function() {
        // Az aktuális kép indexének nyomon követése
        var currentImageIndex = 0;
    
        // Az összes kép eltárolása egy tömbben
        var images = $('#gallery-images img');
    
        // A gombokhoz tartozó click eseménykezelők
        $('#gallery-prev').click(function() {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            }
            showCurrentImage();
        });
    
        $('#gallery-next').click(function() {
            currentImageIndex++;
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            showCurrentImage();
        });
    
        // Az első kép megjelenítése
        showCurrentImage();
    
        // Az aktuális kép megjelenítése
        function showCurrentImage() {
            images.hide();
            images.eq(currentImageIndex).show();
        }
    });