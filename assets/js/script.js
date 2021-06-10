$( document ).ready(function() {
    //documento cargado
    console.log( "ready!" );
    //tooltip link paginas externas
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    //smooth scroll
    $("a").click(function(event){
        if (this.hash !==""){
            event.preventDefault();
            
            var gato = this.hash;

            $("html, body").animate({
                scrolltop: $(gato).offset().top
            }, 100, function(){
                window.location.hash = gato;
            });
        }
    });
    //mostrar o ocultar contenido tarjetas
    $( ".card-body" ).click(function() {
        $("div", this ).toggle( "slow" );
    });

});