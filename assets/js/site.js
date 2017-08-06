var v38State = {
    displays: {
        about: false,
        services: false,
        contact: false
    },
    positions: {
        home: 0,
        about: 625
    },
    text: {
        about:  "<br>According to a report from Adobe<a class=\"inline\" href=\"http://wwwimages.adobe.com/content/dam/Adobe/en/max/2015/pdfs/state-of-content-oct.pdf\">*</a>, 38% of consumers will stop " +
            "engaging with a product or website if the content is unattractive.<br><br>" +
            "Vital 38 is a media production firm based in the Silicon Valley. " +
            "We work with you to create a digital media solution that is fast, " +
            "beautiful, and tailored to your every need. <br><br>With a focus on incredible, " +
            "modern design, V38 will help small businesses, companies, and individuals " +
            "grow with a well-designed and meticulously planned online presence. " +
            "<br>" +
            "<br>" +
            "Web design, graphic design, cinematography, and photography come " +
            "together in one seamless service, or compartmentalized services to " +
            "meet any specific need. " +
            "<br>" +
            "<br>" +
            "Don't lose the vital 38%",
        contact: "<br> We'd love to hear from you!<br><br>" +
            "Whether you have a project in mind or just want to chat about what we do, " +
            "send us an email at <strong><a href=\"mailto:projects@vital38.com\">projects@vital38.com</a></strong> or call us at <strong>(650) 336-8624</strong>" +
            "<br><br>We'd love to get to know you, and can't wait to start helping " +
            "you achieve your dream, whatever that may be."
    }
};

function trace (title) {
  v38State.displays[title] = true;
  var callback = null;
  if (title === 'services') {
    callback = function() {
        $('.servicesContent').slideDown();
    };
  } else {
    callback = function() {
      Typed.new('.' + title + 'Text', {
          strings: [v38State.text[title]],
          showCursor: false,
          typeSpeed: -50000,
        });
      };
    }
  Typed.new('.' + title + 'Header', {
     strings: [title[0].toUpperCase() + title.slice(1)],
      showCursor: true,
      cursorChar: "|",
      typeSpeed: 1,
      callback: callback
        });
}

$(window).scroll(function(){
    if ($(this).scrollTop() > $('.contact').position().top - (window.innerHeight/3*2) && !v38State.displays.contact) {
      trace('contact');
    } else if ($(this).scrollTop() > $('.services').position().top - (window.innerHeight/3*2) && !v38State.displays.services) {
      trace('services');
    }  else if ($(this).scrollTop() > $('.about').position().top - (window.innerHeight/3*2) && !v38State.displays.about) {
      trace('about');
    }
});

function scrollToHandler(destinationClass) {
    if (!destinationClass) {
         window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, $('.' + destinationClass).position().top - 101);
    }
}
