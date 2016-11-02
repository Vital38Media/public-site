// auto generated Javascript file, automatically added to index.html


function showPortfolio() {
     $('.mainText').fadeOut(1000);
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
    $('.portfoliotext').fadeOut(1000);
    mixpanel.track("Page View", {
        "isRetina": window.devicePixelRatio > 1,
        "name": "home",
        "internal": true
    });
    setTimeout(function () {
        $('.mainText').fadeIn(1000);
    }, 1000)
}
$(document).ready(function () {
    mixpanel.track("Page View", {
        "isRetina": window.devicePixelRatio > 1,
        "name": "home",
        "internal": false
    });
    $('.secondarylogo').hide();
    $('.mainText').hide();
    $('.portfoliotext').hide();
})
$(window).on("load", function(){
    $('#cover').fadeOut();
    $(function(){
        $(".textLine").typed({
          strings: ["<strong>38%</strong> of consumers <em>stop</em> engaging online <br> if the content is unattractive",
            "^500Web Design | Graphic Design | Cinematography | Photography^500<br>Don't lose the vital 38%"],
          contentType: 'html',
          typeSpeed: 0,
          startDelay: 1500,
          showCursor: false,
          backSpeed: 0.1,
          backDelay: 6000,
          onStringTyped: function () {
              setTimeout(function () {
                  $('.secondarylogo').fadeIn(1000);
              }, 1500)
          },
          callback: function () {
              setTimeout(function () {
                  $('.mainContainer').fadeOut(1000);
                  setTimeout(function () {
                    //   mixpanel.track("Content Loaded", {
                    //       "isRetina": window.devicePixelRatio > 1,
                    //       "name": "home",
                    //       "internal": false
                    //   });
                      $('.mainText').fadeIn(1000);
                  }, 1000)
              }, 2000)
          }
        });
    });
})
