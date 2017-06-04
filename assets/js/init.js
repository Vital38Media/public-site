$(document).ready(function() {
    $('.servicesContent').hide();
});

document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.typedText', {
			stringsElement: document.getElementById('typed-strings'),
            showCursor: true,
            cursorChar: "|",
            typeSpeed: 1,
	});
});