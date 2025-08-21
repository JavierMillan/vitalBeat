// Variables
const PHONE_NUMBER = '526221424577';

// Función principal de WhatsApp (sin modal)
function openWhatsApp() {
    const mensaje = `¡Hola VitalBeat! 👑

Quiero ser FUNDADORA ORIGINAL de VitalBeat.

Me interesa:
• El precio especial de $999/mes (según mes de entrada)
• Ser co-creadora de la experiencia VitalBeat
• Formar parte de las primeras 16 mujeres
• Pre-lanzamiento: 25 de Agosto 2025

¿Podemos agendar una cita para conocer más detalles sobre los precios por mes?

¡Estoy lista para transformar mi energía! 💪`;

    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, '_blank');
}

// Scroll suave al contacto
function scrollToContact() {
    document.getElementById('contacto').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

// Cerrar menú al hacer clic en enlace
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});

// Animaciones de reveal
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 50;

        if (isVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Check on load

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});