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
    // Hide all content
    hideAll();
    // Fire mixpanel event
    fireEvent('mixpanel', 'Page View', {
        "isRetina": window.devicePixelRatio > 1,
        "name": "home",
        "internal": true
    });
    // Display contact area
    setTimeout(function () {
        $('.mainText').fadeIn(1000);
    }, 500)
}

function showContact() {
    // Hide all content
    hideAll();
    // Fire mixpanel event
    fireEvent('mixpanel', 'Page View', {
        "isRetina": window.devicePixelRatio > 1,
        "name": "contact",
        "internal": true
    });
    // Fire FB event
    fireEvent('fbq', 'Lead', {
        value: 0,
        currency: 'USD'
    });
    // Display contact area
    setTimeout(function () {
        $('.contactForm').fadeIn(1000);
    }, 500)
}

function hideAll() {
    $('.mainText').fadeOut(1000);
    $('.portfoliotext').fadeOut(1000);
    $('.contactForm').fadeOut(1000);
}

// Fires an event to its respective service provided that development mode
// is not enabled.
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

// Submits the form data to Mixpanel before the form data is emailed to
// projects@vital38.com
function formSubmit(formData) {
    mixpanelObj = {};
    formData.forEach(function (e) {
        mixpanelObj[e.name] = e.value;
    });
    fireEvent('mixpanel', 'formSubmit', mixpanelObj);
    if (development) {
        alert("Your data wasn't sent since the site is running in development mode!")
    }
}

// Displays the modal IF a promotion is currently running
// (indicated in devconf.js)
function runModal() {
    if (isPromo) {
        if (!localStorage.modal || (parseInt(localStorage.modal) + 86400000 < Date.now())) {
            setTimeout(function () {
                $('#myModal').modal('show');
                localStorage.modal = Date.now();
            }, 3000)
        }
    }
}

function runDevSetup(r) {
    if (r) {
        // Make the modal show on every page load regardless of its current
        // state
        localStorage.setItem('modal', 0);
    }
}
