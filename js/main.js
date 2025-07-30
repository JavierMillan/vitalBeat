// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Counter animation with intersection observer
let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 30; // Slower animation

        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current);

            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 100);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');

            // Trigger counter animation when hero is visible
            if (entry.target.id === 'inicio') {
                setTimeout(animateCounters, 1000);
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Scroll indicator functionality
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('#experiencia').scrollIntoView({
        behavior: 'smooth'
    });
});

// Enhanced navbar background on scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
        navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderColor = 'rgba(255, 120, 73, 0.3)';
    } else {
        navbar.style.background = 'rgba(17, 24, 39, 0.8)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderColor = 'rgba(255, 120, 73, 0.2)';
    }

    // Hide navbar on scroll down (mobile)
    if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    }

    lastScrollY = currentScrollY;
});

// Touch-friendly hover effects for mobile
if (window.innerWidth <= 768) {
    document.querySelectorAll('.group').forEach(element => {
        element.addEventListener('touchstart', () => {
            element.classList.add('hover');
        });

        element.addEventListener('touchend', () => {
            setTimeout(() => {
                element.classList.remove('hover');
            }, 150);
        });
    });
}

// Preload critical images
const criticalImages = [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
];

criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Performance optimization: Lazy load non-critical images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading states
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});