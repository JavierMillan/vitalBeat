// Variables globales
const PHONE_NUMBER = '526221424577';
const PRELAUNCH_START = new Date('2025-09-08T00:00:00').getTime();
const PRELAUNCH_END = new Date('2026-01-08T23:59:59').getTime();

// Función principal WhatsApp
function openFounderWhatsApp() {
    const mensaje = `✨ Hola VitalBeat!

Siento una conexión profunda con el mensaje "¿Recuerdas quién eras antes?" porque realmente he perdido mi esencia cuidando de todos menos de mí misma.

🌸 MIS DATOS:
• Nombre: [Tu nombre]
• Edad: [Tu edad]
• Teléfono: [Tu teléfono]
• ¿Qué experiencia tienes con ejercicio/bienestar? [Tu respuesta]
• ¿En qué momento perdiste tu esencia? [Tu respuesta]
• ¿Cómo te imaginas después de la transformación? [Tu respuesta]

💫 ENTIENDO LA INVERSIÓN FUNDADORA:
• Mes 1-2 (Sep-Oct): $999/mes x 1 año
• Mes 3 (Nov): $999/mes x 6 meses
• Mes 4 (Dic): $999/mes x 3 meses (beneficios completos)
• Después (Enero 2026): $1,200/mes

🎁 LO QUE MÁS ME RESUENA:
✅ Bioescáner mensual incluido ($349 valor)
✅ Badge Fundadora Original
✅ Momentos VIP y sorpresas exclusivas
✅ Detalles personalizados únicos
✅ 12 clases/mes Ejercicio Funcional + Barre
✅ Círculo de Mujeres y acompañamiento integral
✅ Ser co-creadora de algo transformador


Siento que VitalBeat es exactamente lo que mi alma ha estado buscando. 💕
¡Gracias por crear este espacio para nosotras! 🦋`;

    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, '_blank');
}

// Countdown timer
function updateCountdown() {
    const now = new Date().getTime();

    // Si no ha empezado el prelanzamiento
    if (now < PRELAUNCH_START) {
        const distance = PRELAUNCH_START - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const countdownText = `${days}d ${hours}h ${minutes}m`;
        document.getElementById('countdown').textContent = countdownText;
        document.getElementById('final-countdown').textContent = countdownText;
    }
    // Si está en prelanzamiento
    else if (now >= PRELAUNCH_START && now < PRELAUNCH_END) {
        const distance = PRELAUNCH_END - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const countdownText = `${days}d ${hours}h ${minutes}m`;
        document.getElementById('countdown').textContent = countdownText;
        document.getElementById('final-countdown').textContent = countdownText;
    }
    // Si ya terminó
    else {
        document.getElementById('countdown').textContent = 'PRELANZAMIENTO TERMINADO';
        document.getElementById('final-countdown').textContent = 'PRELANZAMIENTO TERMINADO';
    }
}

// Update countdown every minute
setInterval(updateCountdown, 60000);
updateCountdown();

// Mobile menu y animaciones
document.addEventListener('DOMContentLoaded', function () {
    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;

            if (isVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load

    // Smooth scroll
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
});