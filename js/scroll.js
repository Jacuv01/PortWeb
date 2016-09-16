$(document).ready(function() {
  $('a[href^=""]').click(function(e){
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });
};
