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

document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      src: "./imagenes/los_mas_vendidos/conjunto_vestido_jeans.png",
      alt: "Conjunto de vestido jeans",
      name: "Conjunto de vestido jeans",
    },
    {
      src: "./imagenes/los_mas_vendidos/sudadera_rosa_con_estampado.png",
      alt: "Sudadera rosa con estampado",
      name: "Sudadera rosa con estampado",
    },
    {
      src: "./imagenes/los_mas_vendidos/sudadera_blanco_con_estampado.png",
      alt: "Sudadera blanco con estampado",
      name: "Sudadera blanco con estampado",
    },
    {
      src: "./imagenes/los_mas_vendidos/polera_de_color_naranja.svg",
      alt: "Polera de color naranja",
      name: "Polera de color naranja",
    },
    {
      src: "./imagenes/los_mas_vendidos/polera_de_color_naranja2.svg",
      alt: "Polera de color naranja 2",
      name: "Polera de color naranja 2",
    },
    {
      src: "./imagenes/los_mas_vendidos/polera_de_color_naranja3.svg",
      alt: "Polera de color naranja 3",
      name: "Polera de color naranja 3",
    },
  ];

  const contentElement = document.getElementById("los-mas-vendidos-content");
  let currentStartIndex = 0;

  // Function to calculate how many cards fit the screen
  function calculateVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 4; // Extra large screens
    } else if (screenWidth >= 992) {
      return 3; // Large screens
    } else if (screenWidth >= 768) {
      return 2; // Medium screens
    } else {
      return 1; // Small screens
    }
  }

  // Function to render the visible cards
  function renderCards() {
    const visibleCards = calculateVisibleCards();
    contentElement.innerHTML = ""; // Clear current cards

    for (
      let i = currentStartIndex;
      i < currentStartIndex + visibleCards && i < products.length;
      i++
    ) {
      const product = products[i];
      const card = document.createElement("div");
      card.classList.add("los-mas-vendidos-content-card");
      card.innerHTML = `
        <img src="${product.src}" alt="${product.alt}" />
        <p>${product.name}</p>
        <button>Ver más</button>
      `;
      contentElement.appendChild(card);
    }
  }

  // Function to handle next/prev button clicks
  function handleNextPrev(direction) {
    const visibleCards = calculateVisibleCards();
    if (direction === "next") {
      if (currentStartIndex + visibleCards < products.length) {
        currentStartIndex += visibleCards;
      }
    } else if (direction === "prev") {
      if (currentStartIndex - visibleCards >= 0) {
        currentStartIndex -= visibleCards;
      }
    }
    renderCards();
  }

  // Event listeners for next/prev buttons
  document.getElementById("next-button").addEventListener("click", function () {
    handleNextPrev("next");
  });
  document.getElementById("prev-button").addEventListener("click", function () {
    handleNextPrev("prev");
  });

  // Re-render the cards when window is resized
  window.addEventListener("resize", renderCards);

  // Initial render
  renderCards();
});
