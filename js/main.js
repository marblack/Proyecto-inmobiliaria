$(document).ready(function(){
    // Menu hamburguesa 
    $(".burger").click(function(){
        $(".burger").toggleClass("abierto");
        $(".menu").animate({width:"toggle"}, 500);
        $(".menu a").toggleClass("aparicion");
    });

    /*Scrool suave*/
    $("a").on("click", function(){
        if (this.hash !== ""){
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        };
    });

    

// Ventana modal
    $(".open").click(function(){
        $(".modal, .overlay").addClass("visible");
    });
    // Para que se cierre pinchado fuera del cuadro se tiene que poner en $(".close, .overlay")
    $(".close, .overlay").click(function(){
        $(".modal, .overlay").removeClass("visible");
    });

    // Formulario
    $(".open2").click(function(){
        $(".modal2, .overlay").addClass("visible");
    });
    
    $(".close2, .overlay").click(function(){
        $(".modal2, .overlay").removeClass("visible");
    });
});
