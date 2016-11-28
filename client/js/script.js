document.addEventListener("keydown", function (e) {
	'use strict';
    if (e.keyCode === 13) { 
        $('html').toggleClass('menuOpen');
    }
});
$(function(){
	'use strict';
	$('.message-box.search').keyup(function(){
		var str = $('.search').text();
		if(str !== ''){
			$('.tw-search').removeClass('active');
			$('.search-result').fadeIn(500);
		}
		else{
			$('.tw-search').addClass('active');
			$('.search-result').fadeOut(500);
			}
	});
// login page js 	
//focus on next text box after fill the value 	
$(".input-code").keyup(function (e) {
    if (this.value.length === this.maxLength) {
      $(this).next('.input-code').focus();
    }
	else
	if(e.keyCode === 8)
	{	//focus on previous text on backspace 
		$(this).prev('.input-code').focus();
	}	
});
// only numeric valy accepted by input 
$(".input-code").keypress(function (e) {
    if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) {return false;}
});
	
});