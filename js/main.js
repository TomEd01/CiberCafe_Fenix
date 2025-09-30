// Registrar ScrollTrigger para animaciones con GSAP
gsap.registerPlugin(ScrollTrigger);

// Seleccionar todas las secciones que tendrán animación de scroll
document.querySelectorAll(".scroll-section").forEach(section => {
  const wrapper = section.querySelector(".wrapper");
  const items = Array.from(wrapper.querySelectorAll(".item"));

  // Determinar la dirección de la animación según la clase de la sección
  const direction = section.classList.contains("horizontal-section")
    ? "horizontal"
    : "vertical";

  configurarAnimacionScroll(section, items, direction);
});

/**
 * Configura la animación de scroll para una sección específica.
 * @param {Element} section - La sección a animar.
 * @param {Element[]} items - Los elementos dentro de la sección.
 * @param {string} direction - 'horizontal' o 'vertical'.
 */
function configurarAnimacionScroll(section, items, direction) {
  // Posicionar los elementos excepto el primero fuera de la vista
  items.forEach((item, i) => {
    if (i > 0) {
      gsap.set(item, direction === "horizontal"
        ? { xPercent: 100 }
        : { yPercent: 100 }
      );
    }
  });

  // Crear la línea de tiempo de animación con ScrollTrigger
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: "top top",
      end: `+=${items.length * 100}%`,
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true, // Descomenta para depuración
    },
    defaults: { ease: "none" },
  });

  // Animar la entrada de cada item
  items.forEach((item, i) => {
    timeline.to(item, { borderRadius: "0px" });
    if (items[i + 1]) {
      timeline.to(
        items[i + 1],
        direction === "horizontal"
          ? { xPercent: 0 }
          : { yPercent: 0 },
        "<"
      );
    }
  });
}
// Sticky header logic
const header = document.getElementById('stickyHeader');
const headerSection = document.querySelector('[role="header-contet"]'); // Ojo: tu HTML tiene un typo, debería ser "header-content"
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeaderVisibility() {
  const sectionRect = headerSection.getBoundingClientRect();
  const headerHeight = header.offsetHeight;

  // Si el header-section está visible en la pantalla
  if (sectionRect.bottom > headerHeight) {
    header.classList.add('show');
    header.classList.remove('hide');
  } else {
    // Si el usuario hace scroll hacia arriba en el main, mostrar el header
    if (window.scrollY < lastScrollY) {
      header.classList.add('show');
      header.classList.remove('hide');
    } else {
      header.classList.add('hide');
      header.classList.remove('show');
    }
  }
  lastScrollY = window.scrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHeaderVisibility);
    ticking = true;
  }
});

// Inicializar estado del header
header.classList.add('show');