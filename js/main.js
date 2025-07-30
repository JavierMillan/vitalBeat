// Remove loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 500);
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Progress bar
const updateProgressBar = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
};

window.addEventListener('scroll', updateProgressBar);

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

// Smooth scroll for navigation links
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