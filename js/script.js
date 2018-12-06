$(document).ready(function(){
    //abre e fecha menu 
    $(".nav-toggle, .nav-close").on("click", function(e){
        e.preventDefault();
        $(".nav").toggleClass('active');
    });
});