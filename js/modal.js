// Función para abrir el modal
function openFounderModal() {
    document.getElementById('founderModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeFounderModal() {
    document.getElementById('founderModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Manejar el envío del formulario
document.getElementById('founderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const birthDate = document.getElementById('birthDate').value;

    // Formatear fecha de nacimiento para mostrar
    const birth = new Date(birthDate);
    const formattedDate = birth.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Crear mensaje personalizado para WhatsApp
    const message = `Hola, soy ${fullName} y me interesa ser Fundadora Original de VitalBeat.

He revisado su propuesta y me parece una oportunidad única en Guadalajara. Me gustaría ser parte de las primeras 15 mujeres que co-crearán esta experiencia.

Busco:
✓ Una transformación integral real (no solo ejercicio)
✓ Pertenecer a una comunidad de mujeres con propósito  
✓ El beneficio del precio fundadora por 2 años
✓ Ser parte del origen de algo revolucionario

Mi información de contacto:
📧 ${email}
🎂 Fecha de nacimiento: ${formattedDate}

¿Podríamos agendar una llamada para platicar sobre los detalles?

Gracias por su tiempo.`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // Guardar datos (opcional - podrías enviar a tu backend aquí)
    console.log('Datos capturados:', { fullName, email, birthDate, formattedDate });

    // Redirigir a WhatsApp
    window.open(`https://wa.me/526221424577?text=${encodedMessage}`, '_blank');

    // Cerrar modal
    closeFounderModal();

    // Limpiar formulario
    document.getElementById('founderForm').reset();
});

// Cerrar modal al hacer click fuera
document.getElementById('founderModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeFounderModal();
    }
});