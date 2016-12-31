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
     }, 1000)
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
    }, 1000)
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
    }, 1000)
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
    $('.mainContainer').hide();
    $('.contactForm').hide();
})
$(window).on("load", function(){
    $('#cover').fadeOut();
    $('.mainText').fadeIn(1000);
      mixpanel.track("Content Loaded", {
          "isRetina": window.devicePixelRatio > 1,
          "name": "home",
          "internal": false
      });
    fbq('track', 'ViewContent', {
        value: 0,
        currency: 'USD'
    });


    // $(function(){
    //     $(".textLine").typed({
    //       strings: ["<strong>38%</strong> of consumers <em>stop</em> engaging online <br> if the content is unattractive",
    //         "^500Web Design | Graphic Design | Cinematography | Photography^500<br>Don't lose the vital 38%"],
    //       contentType: 'html',
    //       typeSpeed: 0,
    //       startDelay: 1500,
    //       showCursor: false,
    //       backSpeed: 0.1,
    //       backDelay: 6000,
    //       onStringTyped: function () {
    //           setTimeout(function () {
    //               $('.secondarylogo').fadeIn(1000);
    //           }, 1500)
    //       },
    //       callback: function () {
    //           setTimeout(function () {
    //               $('.mainContainer').fadeOut(1000);
    //               setTimeout(function () {
    //                 //   mixpanel.track("Content Loaded", {
    //                 //       "isRetina": window.devicePixelRatio > 1,
    //                 //       "name": "home",
    //                 //       "internal": false
    //                 //   });
    //                   $('.mainText').fadeIn(1000);
    //               }, 1000)
    //           }, 2000)
    //       }
    //     });
    // });
})
