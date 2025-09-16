
// Variables globales
const PHONE_NUMBER = '526221424577';

// Función para clase demo (ahora abre modal)
function openDemoClass() {
    document.getElementById('demoModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal
function closeDemoModal() {
    document.getElementById('demoModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Función para generar mensaje dinámico
function generateDemoMessage(formData) {
    return `💕 ¡Hola VitalBeat!

Me interesa mucho vivir la experiencia con la CLASE DEMO por $150.

🌸 MIS DATOS:
• Nombre completo: ${formData.nombre}
• Teléfono: ${formData.telefono}
• Experiencia con ejercicio: ${formData.experiencia}

⏰ HORARIO ELEGIDO:
✅ ${formData.horario}

💝 ENTIENDO QUE:
✅ La clase demo cuesta $150 pesos
✅ Dura aproximadamente 50 minutos
✅ Incluye ejercicio funcional + Barre
✅ Máximo 8 mujeres por sesión
✅ Es mi oportunidad de vivir la magia VitalBeat

¡Estoy emocionada de reconectarme conmigo misma! 🦋✨`;
}

// Manejar envío del formulario
document.addEventListener('DOMContentLoaded', function () {
    const demoForm = document.getElementById('demoForm');

    demoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener datos del formulario
        const formData = {
            nombre: document.getElementById('nombre').value,
            edad: document.getElementById('edad').value,
            telefono: document.getElementById('telefono').value,
            experiencia: document.getElementById('experiencia').value,
            horario: document.querySelector('input[name="horario"]:checked')?.value
        };

        // Validar que se haya seleccionado un horario
        if (!formData.horario) {
            alert('Por favor selecciona un horario para tu clase demo');
            return;
        }

        // Generar mensaje
        const mensaje = generateDemoMessage(formData);

        // Abrir WhatsApp
        const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappURL, '_blank');

        // Cerrar modal
        closeDemoModal();

        // Limpiar formulario
        demoForm.reset();
    });

    // Cerrar modal al hacer clic fuera
    document.getElementById('demoModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeDemoModal();
        }
    });

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

    // Parallax sutil para elementos decorativos
    const parallaxElements = document.querySelectorAll('.pulse-element');
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;

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

    // Accordion logic for mobile-first collapsible cards in LA EXPERIENCIA VITALBEAT
    const toggles = document.querySelectorAll('.accordion-toggle');
    const contents = document.querySelectorAll('.accordion-content');
    function closeAll() {
        contents.forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.accordion-arrow i').forEach(i => i.classList.remove('fa-chevron-up'));
        document.querySelectorAll('.accordion-arrow i').forEach(i => i.classList.add('fa-chevron-down'));
    }
    function openAccordion(idx) {
        contents[idx].classList.remove('hidden');
        document.querySelectorAll('.accordion-arrow')[idx]?.querySelector('i').classList.remove('fa-chevron-down');
        document.querySelectorAll('.accordion-arrow')[idx]?.querySelector('i').classList.add('fa-chevron-up');
    }
    // Always start collapsed, always show arrows
    closeAll();
    document.querySelectorAll('.accordion-arrow').forEach(a => a.style.display = 'inline-flex');
    toggles.forEach((toggle, idx) => {
        toggle.addEventListener('click', function (e) {
            if (contents[idx].classList.contains('hidden')) {
                closeAll();
                openAccordion(idx);
            } else {
                contents[idx].classList.add('hidden');
                document.querySelectorAll('.accordion-arrow')[idx]?.querySelector('i').classList.remove('fa-chevron-up');
                document.querySelectorAll('.accordion-arrow')[idx]?.querySelector('i').classList.add('fa-chevron-down');
            }
        });
    });

    // Error handling para elementos que podrían no existir
    console.log('VitalBeat JS inicializado correctamente ✨');
    console.log(`Elementos .reveal encontrados: ${revealElements.length}`);
});