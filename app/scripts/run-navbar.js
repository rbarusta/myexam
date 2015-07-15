$(document).ready(function() {
   
  $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#menu').addClass('tope');
             $('#menu').removeClass('no');
             $('#barra-navegacion').addClass('no');
             $('#navi').onePageNav();
             
             

         }
         else {
             $('#menu').removeClass('tope');
             $('#menu').addClass('no');
             $('#barra-navegacion').removeClass('no');
             $('#nav').onePageNav();
              
              
         }
    });

});