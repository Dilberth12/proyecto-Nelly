//Ejecutar función en el evento click
document.getElementById("abrir").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu-mover");
var abrir = document.getElementById("abrir");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body-mover");
        side_menu.classList.toggle("menu-desplegar");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body-mover");
    side_menu.classList.add("menu-desplegar");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body-mover");
        side_menu.classList.remove("menu-desplegar");
    }

    if (window.innerWidth < 760){

        body.classList.add("body-mover");
        side_menu.classList.add("menu-desplegar");
    }

});

//animacion del boton de menu

const btn_ocultar = document.querySelector('.ocultar');

btn_ocultar.addEventListener('click', function (){
    document.getElementById('menu').classList.toggle('oculto');
})

//ANIMACION DEL ICOMNO DE MENU
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}