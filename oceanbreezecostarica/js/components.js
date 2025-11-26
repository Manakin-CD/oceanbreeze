/**
 * Componentes reutilizables
 * Componentes JavaScript para la aplicación
 */

/**
 * Maneja el envío del formulario de contacto
 */
function initContactForm() {
    const contactForm = document.querySelector('#contacto form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const formData = new FormData(this);
        const data = {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            interest: this.querySelector('select').value,
            message: this.querySelector('textarea').value
        };
        
        // Validar datos
        if (!data.name || !data.email || !data.message) {
            if (typeof showNotification === 'function') {
                showNotification('Por favor, completa todos los campos requeridos.', 'error');
            }
            return;
        }
        
        if (!validateEmail(data.email)) {
            if (typeof showNotification === 'function') {
                showNotification('Por favor, ingresa un email válido.', 'error');
            }
            return;
        }
        
        // Aquí iría la lógica para enviar el formulario
        // Por ahora solo mostramos un mensaje de éxito
        if (typeof showNotification === 'function') {
            showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
        }
        
        // Limpiar formulario
        this.reset();
    });
}

/**
 * Inicializa el botón de WhatsApp
 */
function initWhatsAppButton() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            // Opcional: agregar tracking o analytics aquí
            console.log('WhatsApp button clicked');
        });
    }
}

/**
 * Inicializa el scroll indicator
 */
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('section:not(.hero)');
            if (nextSection) {
                const offsetTop = nextSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Inicializar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initWhatsAppButton();
    initScrollIndicator();
});

