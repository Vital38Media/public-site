// Immediately hide all the display elements, leaving only
// the loading indicator showing on-screen
$(document).ready(function () {
    $('.secondarylogo').hide();
    $('.mainText').hide();
    $('.portfoliotext').hide();
    $('.contactForm').hide();
})

// Once all the media has loaded, we can go ahead and set the proper
// content on-screen
$(window).on("load", function(){
    var location = window.location.href;
    $('#cover').fadeOut();

    // Match the URL to decide which content screen to show
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

    // If development mode is enabled, the site will be set up to aid
    // in viewing content for the developer.
    runDevSetup(development);

    // Display the modal if promotions are going on
    runModal();

    // Fire FB Pixel event for page loaded
    fireEvent('fbq', 'ViewContent', {
        value: 0,
        currency: 'USD'
    })
})
