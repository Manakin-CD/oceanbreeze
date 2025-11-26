/**
 * Archivo principal de JavaScript
 * Contiene la lógica principal de la aplicación
 */

// Inicializar animaciones AOS
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true, // La animación solo ocurre una vez
            offset: 120
        });
    }
    
    // Inicializar navbar scroll
    initNavbarScroll();
    
    // Inicializar smooth scroll
    initSmoothScroll();
});

/**
 * Maneja el cambio de estilo del navbar al hacer scroll
 * El navbar siempre se mantiene con fondo blanco
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const brandText = document.getElementById('brand-text');
    
    if (!navbar || !brandText) return;
    
    // Aplicar estilo scrolled desde el inicio
    navbar.classList.add('scrolled');
    brandText.classList.remove('text-white');
    brandText.classList.add('text-dark');
    
    // Mantener el estilo scrolled siempre
    window.addEventListener('scroll', () => {
        navbar.classList.add('scrolled');
        brandText.classList.remove('text-white');
        brandText.classList.add('text-dark');
    });
}

/**
 * Inicializa el smooth scroll para los enlaces de anclaje
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Ajuste para el navbar fijo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

