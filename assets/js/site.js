// auto generated Javascript file, automatically added to index.html


function showPortfolio() {
     hideAll();
     mixpanel.track("Page View", {
         "isRetina": window.devicePixelRatio > 1,
         "name": "portfolio",
         "internal": true
     });
     setTimeout(function () {
         $('.portfoliotext').fadeIn(1000);
     }, 500)
}

function returnHome() {
    hideAll();
    mixpanel.track("Page View", {
        "isRetina": window.devicePixelRatio > 1,
        "name": "home",
        "internal": true
    });
    setTimeout(function () {
        $('.mainText').fadeIn(1000);
    }, 500)
}

function showContact() {
    hideAll();
    mixpanel.track("Page View", {
        "isRetina": window.devicePixelRatio > 1,
        "name": "contact",
        "internal": true
    });
    setTimeout(function () {
        $('.contactForm').fadeIn(1000);
    }, 500)
    fbq('track', 'Lead', {
        value: 0,
        currency: 'USD'
    });


}

function hideAll() {
    $('.mainText').fadeOut(1000);
    $('.portfoliotext').fadeOut(1000);
    $('.contactForm').fadeOut(1000);
}
$(document).ready(function () {
    $('.secondarylogo').hide();
    $('.mainText').hide();
    $('.portfoliotext').hide();
    $('.contactForm').hide();
})
$(window).on("load", function(){
    var location = window.location.href;
    $('#cover').fadeOut();
    if (location.match(/\?(.*)/)) {
        switch (location.match(/\?(.*)/)[1]) {
            case 'contact':
                showContact();
                break;
            case 'portfolio':
                showPortfolio();
                break;
            default:
                returnHome();
        }
    } else {
        returnHome();
    }

      mixpanel.track("Content Loaded", {
          "isRetina": window.devicePixelRatio > 1,
          "name": "home",
          "internal": false
      });
    fbq('track', 'ViewContent', {
        value: 0,
        currency: 'USD'
    });
})
