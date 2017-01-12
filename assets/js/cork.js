function corkFlip(card) {
    console.log(card);
    card.flip();
}

function autoRotate() {
    var numAds = 8;
    var previous = 0;
    setInterval(function(){
        var random = Math.floor((Math.random() * numAds) + 1);
        while (random === previous) {
            random = Math.floor((Math.random() * numAds) + 1);
        }
        previous = random;
        var element = "#card" + random;
        $(element).flip('toggle');
     }, 3000);
}

$(document).ready(function () {
    $('.grid-item').flip();
})

$(window).on("load", function(){
    $('#cover').fadeOut();
})
