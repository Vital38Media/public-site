// auto generated Javascript file, automatically added to index.html
$(function(){
    $(".textLine").typed({
      strings: ["<strong>38%</strong> of consumers <em>stop</em> engaging online <br> if the content is unattractive",
        "^500Web Design | Graphic Design | Cinematography | Photography^500<br>Coming soon"],
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
                  $('.mainText').fadeIn(1000);
              }, 1000)
          }, 2000)
      }
    });
});

$(window).on("load", function(){
    $('.secondarylogo').hide();
    $('.mainText').hide();
})
