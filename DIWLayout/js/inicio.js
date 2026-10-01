document.addEventListener("DOMContentLoaded", () => {
    const todasPeliculas = document.querySelectorAll(".pelicula");

    todasPeliculas.forEach(pelicula => {
        pelicula.addEventListener("mouseenter", () => {
            idTemporizador = setTimeout(() => {

                const descripcion = pelicula.querySelector(".descripcion");
                descripcion.style.display = "block";


                let ancho = descripcion.clientHeight;
                //Es la distancia del borde izquierdo de descripcion con el borde derecho de pelicula
                let distancia = getComputedStyle(descripcion).left;
                
            }, 500);
        });

        pelicula.addEventListener("mouseleave", () => {
            clearTimeout(idTemporizador);
                const descripcion = pelicula.querySelector(".descripcion");
                descripcion.style.display = "none";
        });
    });
});