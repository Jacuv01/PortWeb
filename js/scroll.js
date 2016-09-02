/*=====	Scroll function anchors =====*/
$(document).ready(function() {



	$('a[href^="#"]').click(function(e){
		var target = $(this).attr('href');
		var strip = target.slice(1);
		var anchor = $("a[id='" + strip +"']");
		e.preventDefault();
		function anchorAnimate() {
			$('html, body').animate({
				scrollTop: anchor.offset().top + $(window).scrollTop() +2
			},'slow');
		}
		anchorAnimate();

	});
	/*=====	Show and hide anchor  =====*/

   $("#back-top").hide();
   var showAnchor = $("#anchor").offset().top + $(window).scrollTop();
   var hideAnchor = $("#anchor-hide").offset().top - $(window).scrollTop();
   $(window).scroll(function() {
      if($(window).scrollTop() > showAnchor) {
         $("#navbarPort").addClass("hide");
         $("#back-top").show(200);
         
      } else if ($(window).scrollTop()-3 > hideAnchor || $(window).scrollTop()==0){
         $("#navbarPort").removeClass("hide");
         $("#back-top").hide(200);
         
      }
   });





/* ==========================================================================
   Detects scroll position NavBar
   ========================================================================== */


   //$('#homeActive').css("font-size", "3em");
   $(window).scroll(function() {
   	var homeTop = $('#home').offset().top + $(window).scrollTop();
   	var meTop = $('#me').offset().top+ $(window).scrollTop();
   	var workTop = $('#work').offset().top+ $(window).scrollTop();
   	var contactTop = $('#contact').offset().top+ $(window).scrollTop();
   	if($(window).scrollTop() >= -1 && $(window).scrollTop()<meTop) {
   		$('#contactActive').css("font-size", "1em");
   		$('#homeActive').css("font-size", "2em");
   		$('#meActive').css("font-size", "1em");
   		$('#workActive').css("font-size", "1em");
   	}else if($(window).scrollTop()>meTop && $(window).scrollTop()<workTop) {
   		$('#contactActive').css("font-size", "1em");
   		$('#homeActive').css("font-size", "1em");
   		$('#meActive').css("font-size", "2em");
   		$('#workActive').css("font-size", "1em");
   	}else if($(window).scrollTop()>workTop && $(window).scrollTop()<contactTop) {
   		$('#contactActive').css("font-size", "1em");
   		$('#homeActive').css("font-size", "1em");
   		$('#meActive').css("font-size", "1em");
   		$('#workActive').css("font-size", "2em");
   	}else if($(window).scrollTop()>contactTop-1) {
   		$('#contactActive').css("font-size", "2em");
   		$('#homeActive').css("font-size", "1em");
   		$('#meActive').css("font-size", "1em");
   		$('#workActive').css("font-size", "1em");
   	}
   });
});
