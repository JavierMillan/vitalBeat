// js/modal.js - VitalBeat Modal para Fundadoras con horarios
// Solo captura datos personales + preferencia de horarios

const PHONE_NUMBER = '526221424577'; // Tu número actual

// Horarios disponibles
const HORARIOS = {
    mañana: [
        { value: '8am', label: '8:00 AM', icon: '☀️' },
        { value: '9am', label: '9:00 AM', icon: '🌤️' }
    ],
    tarde: [
        { value: '6pm', label: '6:00 PM', icon: '🌆' },
        { value: '7pm', label: '7:00 PM', icon: '🌃' },
        { value: '8pm', label: '8:00 PM', icon: '🌙' }
    ]
};

// Variables para el flujo del modal
let modalStep = 1; // 1 = datos personales, 2 = horarios
let founderData = {};

// Funciones para abrir/cerrar modal (mantener compatibilidad)
function openFounderModal() {
    modalStep = 1;
    founderData = {};
    document.getElementById('founderModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    showStep1();
}

function closeFounderModal() {
    document.getElementById('founderModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    modalStep = 1;
    founderData = {};
    
    // Reset form
    const form = document.getElementById('step1Form') || document.getElementById('step2Form');
    if (form) form.reset();
    showStep1();
}

// Mostrar Step 1 - Datos personales (mantener tu diseño)
function showStep1() {
    const modal = document.getElementById('founderModal');
    modal.innerHTML = `
        <div class="bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-vital-skin/30 relative">
            <button onclick="closeFounderModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white">
                <i class="fas fa-times text-xl"></i>
            </button>

            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-vital-skin to-vital-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-crown text-2xl text-white"></i>
                </div>
                <h3 class="text-2xl font-bold mb-2">¡Último paso!</h3>
                <p class="text-gray-400 text-sm">Para contactarte de manera personalizada</p>
                <div class="bg-vital-skin/10 border border-vital-skin/30 rounded-full px-3 py-1 mt-3 inline-block">
                    <span class="text-vital-skin font-bold text-xs">PASO 1 DE 2</span>
                </div>
            </div>

            <form id="step1Form" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Nombre completo *</label>
                    <input type="text" id="fullName" required
                        class="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-vital-skin focus:outline-none"
                        placeholder="Ej: Ana García Martínez">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Correo electrónico *</label>
                    <input type="email" id="email" required
                        class="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-vital-skin focus:outline-none"
                        placeholder="tu.email@ejemplo.com">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Fecha de nacimiento *</label>
                    <input type="date" id="birthDate" required
                        class="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white focus:border-vital-skin focus:outline-none">
                </div>

                <div class="bg-vital-skin/10 border border-vital-skin/30 rounded-xl p-4 mt-6">
                    <p class="text-xs text-gray-300">
                        <i class="fas fa-shield-alt text-vital-skin mr-2"></i>
                        Tu información es 100% privada y solo se usa para contactarte sobre VitalBeat.
                    </p>
                </div>

                <button type="submit"
                    class="w-full bg-gradient-to-r from-vital-skin to-vital-pink text-white py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                    <i class="fas fa-arrow-right mr-2"></i> Continuar
                </button>
            </form>

            <p class="text-center text-xs text-gray-500 mt-4">
                Al continuar aceptas recibir información sobre VitalBeat
            </p>
        </div>
    `;

    // Event listener para Step 1
    document.getElementById('step1Form').addEventListener('submit', handleStep1Submit);
}

// Mostrar Step 2 - Solo horarios
function showStep2() {
    const modal = document.getElementById('founderModal');
    modal.innerHTML = `
        <div class="bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 max-w-lg w-full border border-vital-skin/30 relative">
            <button onclick="closeFounderModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white">
                <i class="fas fa-times text-xl"></i>
            </button>

            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-vital-pink to-vital-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-clock text-2xl text-white"></i>
                </div>
                <h3 class="text-2xl font-bold mb-2">¡Hola ${founderData.fullName}! 👋</h3>
                <p class="text-gray-400 text-sm">Para organizar los horarios perfectos desde el día 1</p>
                <div class="bg-vital-pink/10 border border-vital-pink/30 rounded-full px-3 py-1 mt-3 inline-block">
                    <span class="text-vital-pink font-bold text-xs">PASO 2 DE 2</span>
                </div>
            </div>

            <form id="step2Form" class="space-y-6">
                <!-- Período -->
                <div>
                    <label class="block text-sm font-medium text-gray-300 mb-3">
                        <i class="fas fa-sun text-vital-skin mr-2"></i>¿Cuándo prefieres entrenar?
                    </label>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="cursor-pointer">
                            <input type="radio" name="periodo" value="mañana" class="sr-only" required>
                            <div class="periodo-btn p-4 bg-white/5 rounded-xl border border-gray-600 hover:border-vital-skin transition-all text-center">
                                <i class="fas fa-sun text-yellow-400 text-2xl mb-2"></i>
                                <div class="font-semibold">MAÑANA</div>
                            </div>
                        </label>
                        <label class="cursor-pointer">
                            <input type="radio" name="periodo" value="tarde" class="sr-only">
                            <div class="periodo-btn p-4 bg-white/5 rounded-xl border border-gray-600 hover:border-vital-pink transition-all text-center">
                                <i class="fas fa-moon text-blue-400 text-2xl mb-2"></i>
                                <div class="font-semibold">TARDE</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Horarios específicos -->
                <div id="horariosSection" style="display: none;">
                    <label class="block text-sm font-medium text-gray-300 mb-3">
                        <i class="fas fa-clock text-vital-purple mr-2"></i>Horario ideal para ti:
                    </label>
                    <div class="grid grid-cols-3 gap-2" id="horariosGrid">
                        <!-- Se llenan dinámicamente -->
                    </div>
                </div>

                <div class="bg-gradient-to-r from-vital-skin/10 to-vital-pink/10 border border-vital-skin/30 rounded-xl p-4">
                    <p class="text-xs text-gray-300 text-center">
                        <i class="fas fa-users text-vital-skin mr-2"></i>
                        Esta info nos ayuda a organizar los mejores horarios para las 15 fundadoras
                    </p>
                </div>

                <button type="submit" id="finalSubmitBtn" disabled
                    class="w-full bg-gradient-to-r from-vital-skin to-vital-pink text-white py-4 rounded-xl font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                    <i class="fab fa-whatsapp mr-2"></i> HABLAR CON NUESTRO EQUIPO
                </button>
                
                <button type="button" onclick="showStep1()"
                    class="w-full bg-gray-700 text-white py-2 rounded-xl font-medium hover:bg-gray-600 transition-colors mt-2">
                    <i class="fas fa-arrow-left mr-2"></i> Regresar
                </button>
            </form>
        </div>
    `;

    // Event listeners para Step 2
    setupStep2Listeners();
}

// Manejar envío Step 1
function handleStep1Submit(e) {
    e.preventDefault();
    
    // Guardar datos
    founderData.fullName = document.getElementById('fullName').value;
    founderData.email = document.getElementById('email').value;
    founderData.birthDate = document.getElementById('birthDate').value;
    
    // Ir a Step 2
    modalStep = 2;
    showStep2();
}

// Setup listeners para Step 2
function setupStep2Listeners() {
    const form = document.getElementById('step2Form');
    
    // Período listeners
    form.querySelectorAll('input[name="periodo"]').forEach(radio => {
        radio.addEventListener('change', function() {
            updatePeriodoStyles(this);
            updateHorarios(this.value);
            checkStep2Valid();
        });
    });
    
    // Submit form
    form.addEventListener('submit', handleStep2Submit);
}

// Actualizar horarios cuando se selecciona período
function updateHorarios(periodo) {
    const section = document.getElementById('horariosSection');
    const grid = document.getElementById('horariosGrid');
    
    section.style.display = 'block';
    grid.innerHTML = '';
    
    HORARIOS[periodo].forEach(horario => {
        const horarioHTML = `
            <label class="cursor-pointer">
                <input type="radio" name="horario" value="${horario.value}" class="sr-only" required>
                <div class="horario-btn p-3 bg-white/5 rounded-xl border border-gray-600 hover:border-vital-purple transition-all text-center">
                    <div class="text-xl mb-1">${horario.icon}</div>
                    <div class="font-semibold text-xs">${horario.label}</div>
                </div>
            </label>
        `;
        grid.insertAdjacentHTML('beforeend', horarioHTML);
    });
    
    // Agregar listeners a horarios
    grid.querySelectorAll('input[name="horario"]').forEach(radio => {
        radio.addEventListener('change', function() {
            updateHorarioStyles(this);
            checkStep2Valid();
        });
    });
}

// Actualizar estilos visuales
function updatePeriodoStyles(selected) {
    document.querySelectorAll('.periodo-btn').forEach(btn => {
        btn.classList.remove('bg-vital-skin/20', 'border-vital-skin', 'bg-vital-pink/20', 'border-vital-pink');
        btn.classList.add('border-gray-600');
    });
    
    const btn = selected.parentElement.querySelector('.periodo-btn');
    if (selected.value === 'mañana') {
        btn.classList.add('bg-vital-skin/20', 'border-vital-skin');
    } else {
        btn.classList.add('bg-vital-pink/20', 'border-vital-pink');
    }
}

function updateHorarioStyles(selected) {
    document.querySelectorAll('.horario-btn').forEach(btn => {
        btn.classList.remove('bg-vital-purple/20', 'border-vital-purple');
        btn.classList.add('border-gray-600');
    });
    
    selected.parentElement.querySelector('.horario-btn').classList.add('bg-vital-purple/20', 'border-vital-purple');
}

// Validar Step 2
function checkStep2Valid() {
    const periodo = document.querySelector('input[name="periodo"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const submitBtn = document.getElementById('finalSubmitBtn');
    
    const isValid = periodo && horario;
    submitBtn.disabled = !isValid;
}

// Manejar envío Step 2
function handleStep2Submit(e) {
    e.preventDefault();
    
    // Guardar horarios
    founderData.periodo = document.querySelector('input[name="periodo"]:checked').value;
    founderData.horario = document.querySelector('input[name="horario"]:checked').value;
    
    // Generar mensaje WhatsApp
    const mensaje = generateFounderMessage(founderData);
    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    
    // Cerrar modal y abrir WhatsApp
    closeFounderModal();
    window.open(whatsappURL, '_blank');
}

// Generar mensaje personalizado para fundadoras
function generateFounderMessage(data) {
    const periodoTexto = data.periodo === 'mañana' ? 'mañanas' : 'tardes';
    const horarioTexto = formatHorario(data.horario);
    const edad = calculateAge(data.birthDate);
    
    return `¡Hola VitalBeat! Quiero ser FUNDADORA ORIGINAL

DATOS PERSONALES:
• Nombre: ${data.fullName}
• Edad: ${edad} años
• Email: ${data.email}

HORARIO PREFERIDO:
• Prefiero entrenar en las ${periodoTexto}
• Mi horario ideal es: ${horarioTexto}

INTERÉS:
• Quiero el precio fundadora de $999 por 2 años
• Entiendo que solo quedan 8 espacios disponibles
• Estoy lista para ser co-creadora de VitalBeat

¿Podemos confirmar mi lugar como fundadora original? ¡Estoy emocionada!`;
}

// Utilidades
function formatHorario(horario) {
    const formats = {
        '8am': '8:00 AM', '9am': '9:00 AM',
        '6pm': '6:00 PM', '7pm': '7:00 PM', '8pm': '8:00 PM'
    };
    return formats[horario] || horario;
}

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// Cerrar modal con Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('founderModal');
        if (modal && !modal.classList.contains('hidden')) {
            closeFounderModal();
        }
    }
});

// Cerrar modal clickeando afuera
document.addEventListener('click', function(e) {
    if (e.target.id === 'founderModal') {
        closeFounderModal();
    }
});