const carruseles = document.querySelectorAll(".carrusel");

let activarWheel = false;

carruseles.forEach((carrusel) => {
    const peliculas = carrusel.querySelector('.peliculas');
  const itemsPelicula = peliculas.querySelectorAll('.pelicula');
  const prevBtn = carrusel.querySelector('.arrow-left');
  const nextBtn = carrusel.querySelector('.arrow-right');

  const itemWidth = itemsPelicula[0].offsetWidth + 10;
  let position = 0;

  prevBtn.addEventListener('click', () => {
    position += itemWidth;
    if (position > 0) position = 0;
    peliculas.style.transform = `translateX(${position}px)`;
  });

  nextBtn.addEventListener('click', () => {
    position -= itemWidth;
    const maxPosition = -(itemWidth * (itemsPelicula.length - Math.floor(peliculas.parentElement.offsetWidth / itemWidth)));
    if (position < maxPosition) position = maxPosition;
    peliculas.style.transform = `translateX(${position}px)`;
  });

carrusel.addEventListener("mouseenter", () => {
  setTimeout(() => {
    activarWheel = true;
  }, 1000);
});

carrusel.addEventListener("mouseleave", () => {
    activarWheel = false;
});
});
