$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    items : 2,
    lazyLoad : true,
    navigation : true,
    itemsDesktop: false,
    	itemsDesktop : false, //5 items between 1000px and 901px
      	itemsDesktopSmall : false, // betweem 900px and 601px
      	itemsTablet: false,
      	autoPlay : true,
      	slideSpeed : 200,
      	stopOnHover: true,
      	navigation : false
      });
});