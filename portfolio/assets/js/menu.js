$(document).ready(main);
    function main(){
    var cont = 1;//menu oculto
    $(".menu-bar").click(function(){
        //$('nav').toggle();
        if (cont == 1) { //if is hide
            $("nav ul").animate({
                left: '0'
            });
            cont = 0; //lopongo visible de nuevo sett it show again
        } else {//Si esta visible porque es 0
            $("nav ul").animate({
                left: '-100%'
            });
            cont = 1; //lo pongo invisible
        }
    });
    $("nav ul").click(function () {
            if (cont == 0) {
                $("nav ul").animate({
                    left: '-100%'
                });
                cont = 1; //lo pongo invisible
            }
        })
};