function adjustCarouselMargin() {
  // Selecciona ambos headers
  const mobileHeader = document.querySelector(".header.mb");
  const noMobileHeader = document.querySelector(".header.no-mb");
  const carousel = document.querySelector(".carrosel");

  // Calcula la altura del header visible
  const headerHeight =
    window.getComputedStyle(mobileHeader).display !== "none"
      ? mobileHeader.offsetHeight
      : noMobileHeader.offsetHeight;

  // Asigna el margen superior al carousel
  carousel.style.marginTop = `${headerHeight + 8}px`;
}

// Llama a la función cuando se carga la página
window.addEventListener("DOMContentLoaded", adjustCarouselMargin);

// Escucha el redimensionamiento de la ventana y vuelve a ajustar el margen del carousel
window.addEventListener("resize", adjustCarouselMargin);
