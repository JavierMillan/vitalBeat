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
        const countdownElement = document.getElementById('countdown');
        const finalCountdownElement = document.getElementById('final-countdown');
        
        if (countdownElement) countdownElement.textContent = countdownText;
        if (finalCountdownElement) finalCountdownElement.textContent = countdownText;
    }
    // Si está en prelanzamiento
    else if (now >= PRELAUNCH_START && now < PRELAUNCH_END) {
        const distance = PRELAUNCH_END - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const countdownText = `${days}d ${hours}h ${minutes}m`;
        const countdownElement = document.getElementById('countdown');
        const finalCountdownElement = document.getElementById('final-countdown');
        
        if (countdownElement) countdownElement.textContent = countdownText;
        if (finalCountdownElement) finalCountdownElement.textContent = countdownText;
    }
    // Si ya terminó
    else {
        const countdownElement = document.getElementById('countdown');
        const finalCountdownElement = document.getElementById('final-countdown');
        
        if (countdownElement) countdownElement.textContent = 'PRELANZAMIENTO TERMINADO';
        if (finalCountdownElement) finalCountdownElement.textContent = 'PRELANZAMIENTO TERMINADO';
    }
}

// Update countdown every minute
setInterval(updateCountdown, 60000);
updateCountdown();

// Mobile menu y animaciones
document.addEventListener('DOMContentLoaded', function () {
    // Reveal animations usando Intersection Observer (más eficiente)
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Una vez revelado, podemos dejar de observarlo para mejor performance
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null, // viewport del navegador
            rootMargin: '0px 0px -100px 0px', // Trigger 100px antes de que sea visible
            threshold: 0.1 // Se activa cuando 10% del elemento es visible
        });

        // Observar todos los elementos reveal
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    // Smooth scroll para enlaces internos
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

    // Mobile menu functionality (si existe)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (closeMobileMenu && mobileMenu) {
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Progress bar (si existe)
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const updateProgressBar = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        };

        window.addEventListener('scroll', updateProgressBar);
        updateProgressBar(); // Check on load
    }

    // Lazy loading para imágenes (performance extra)
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Animaciones de entrada staggered para elementos en grid
    const gridElements = document.querySelectorAll('.grid .reveal');
    if (gridElements.length > 0) {
        gridElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Parallax sutil para elementos decorativos
    const parallaxElements = document.querySelectorAll('.pulse-element');
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        parallaxElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', requestTick);
    }

    // Error handling para elementos que podrían no existir
    console.log('VitalBeat JS inicializado correctamente ✨');
    console.log(`Elementos .reveal encontrados: ${revealElements.length}`);
});