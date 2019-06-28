//Javascript file for Portfolio

$(document).ready(function(){
    $( "btn-secondary" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});