    //Boton toggle
    document.addEventListener("DOMContentLoaded", () => {

    const marcoBoton = document.body.querySelector(".marcoBoton");
    const circuloBoton = document.body.querySelector(".circuloBoton");
    marcoBoton.addEventListener("click", () => {
    circuloBoton.classList.remove("animacionMoverDerecha");
    circuloBoton.classList.remove("animacionMoverIzquierda");
    circuloBoton.offsetWidth;

    setTimeout(() => {
        marcoBoton.classList.toggle("desplazar");
    }, 200);

    let esModoOscuro = marcoBoton.classList.toggle("botonModoOscuro");

    if (esModoOscuro) {
        circuloBoton.classList.add("animacionMoverDerecha");
    } else {
        circuloBoton.classList.add("animacionMoverIzquierda");
    }
});
});