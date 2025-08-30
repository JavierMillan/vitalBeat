// Variables
const PHONE_NUMBER = '526221424577';

// Función principal de WhatsApp (sin modal)
function openWhatsApp() {
    const mensaje = `¡Hola VitalBeat! 👑

Quiero ser FUNDADORA ORIGINAL de VitalBeat.

Me interesa:
• Asistir a la CLASE DEMO este martes 2 de septiembre
• Conocer el precio especial de $999/mes (períodos según mes de entrada)
• Ser co-creadora de la experiencia VitalBeat
• Formar parte de las primeras 16 mujeres

ESTRUCTURA DE PRECIOS FUNDADORAS:
• Mes 1: $999 x 1 año
• Mes 2-3: $999 x 6 meses  
• Después: $1,200/mes (solo clases, sin beneficios de fundadora)

¿Podemos confirmar mi asistencia a la clase demo del martes 2 de septiembre para asegurar mi lugar como fundadora?

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