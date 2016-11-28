document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) { 
        $('html').toggleClass('menuOpen');
    }
});

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 32) { 
        $('#mainMenu, .video_control, .video_discription').toggleClass('hiden_dv');
		$('.video_section .play_btn').toggleClass('pause_btn');
    }
});

window.onload = function() {
	document.getElementById('item2').focus();
};


// checked box

//function keyPress(e){
//    var key;
//    var box = document.getElementById("Safemode");
//    if (window.event){
//        key = event.keyCode;
//    } else {
//        key = e.which;
//    }
//	
//	if ($(".cheakGridWrapper .check-tiles").is(":focus")) {
//	  if (key==67){
//		  e.preventDefault();
//		  (box.checked) ? box.checked=false : box.checked=true;
//		  return false;
//	  }
//	}else{
//	$(".cheakGridWrapper .check-tiles").removeClass("abc");
//	}
//	
//}
//window.onload = function(){
//    document.onkeydown = keyPress;
//};
