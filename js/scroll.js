   $('a[href^=""]').click(function(e){
   	e.preventDefault();
   	$('html, body').animate({ scrollTop: 0 }, 'fast');
   });
   $('.hidenav').click(function(e){

   	e.preventDefault();
   	$('html, body').animate({ scrollTop: 0 }, 'fast');

   	
   });
   $('.navbar-collapse a').click(function(){
   	$(".navbar-collapse").collapse('hide');
   });