// auto generated Javascript file, automatically added to index.html
function showPortfolio() {
     hideAll();
     fireEvent('mixpanel', 'Page View', {
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
    fireEvent('mixpanel', 'Page View', {
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

    fireEvent('mixpanel', 'Page View', {
        "isRetina": window.devicePixelRatio > 1,
        "name": "contact",
        "internal": true
    });

    setTimeout(function () {
        $('.contactForm').fadeIn(1000);
    }, 500)

    fireEvent('fbq', 'Lead', {
        value: 0,
        currency: 'USD'
    });



}

function hideAll() {
    $('.mainText').fadeOut(1000);
    $('.portfoliotext').fadeOut(1000);
    $('.contactForm').fadeOut(1000);
}

function fireEvent(platform, eventName, payload) {
    if (!development) {
        switch (platform) {
            case "fbq":
                fbq('track', eventName, payload);
                break;
            case "mixpanel":
                mixpanel.track(eventName, payload);
                break;
            default:
                console.error("Invalid Event Type", eventName, payload);

        }
    } else {
        console.warn("Development is enabled, so no events will be sent!", platform, eventName, payload);
    }
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

    fireEvent('fbq', 'ViewContent', {
        value: 0,
        currency: 'USD'
    })
})
