$(document).ready(function() {
    $('.servicesContent').hide();
    $('#typed-strings').hide();
    $('.headerLogo').hide();
    $('#mobileMenu').hide();
    for (var property in v38State.displays) {
        v38State.displays[property] = true;
    }
});

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function() {
        var fadeDelay = 2000;
        $('#loadingCover').fadeOut(fadeDelay);
        $('#pulse').fadeOut(fadeDelay/2);
        setTimeout(function() {
            for (var property in v38State.displays) {
                v38State.displays[property] = false;
            }
            $('.headerLogo').fadeIn();
            Typed.new('.topTag', {
                strings: ['&lt;p class="intro">'],
                showCursor: false,
                typeSpeed: 1,
                callback: function() {
                    Typed.new('.bodyTag', {
                        stringsElement: document.getElementById("typed-strings"),
                        showCursor: false,
                        typeSpeed: 1,
                        callback: function() {
                            Typed.new('.bottomTag', {
                                strings: ['&lt;/p>'],
                                showCursor: false,
                                typeSpeed: 1,
                            });
                        }
                    });
                }
            });
        }, fadeDelay - 500);
    }, 3000);

   
});