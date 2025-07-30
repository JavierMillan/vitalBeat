// RETOX - VitalBeat JavaScript
// Mobile-first interactions and animations

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuBtn?.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                }
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced navbar background on scroll
    let lastScrollY = window.scrollY;
    
    const handleNavbarScroll = () => {
        const navbar = document.querySelector('nav');
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 50) {
                navbar.style.background = 'rgba(17, 24, 39, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.borderColor = 'rgba(0, 200, 150, 0.4)';
            } else {
                navbar.style.background = 'rgba(17, 24, 39, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.borderColor = 'rgba(255, 120, 73, 0.3)';
            }
            
            // Hide navbar on scroll down (mobile)
            if (window.innerWidth <= 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            }
        }
        
        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleNavbarScroll);

    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const fasesSection = document.querySelector('#fases');
            if (fasesSection) {
                fasesSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
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

    // Performance optimization - Preload critical images
    const criticalImages = [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506629905737-701c4d1ef2c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Enhanced phase card interactions
    const enhancePhaseCards = () => {
        document.querySelectorAll('.phase-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (!card.classList.contains('coming-soon')) {
                    card.style.transform = 'translateY(-8px) scale(1.02)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    };

    // Enhanced scroll animations with parallax
    const handleParallaxScroll = () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.animate-gentle-float');
        
        parallaxElements.forEach(element => {
            const speed = 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    };

    window.addEventListener('scroll', handleParallaxScroll);

    // Dynamic button interactions
    const enhanceButtons = () => {
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                if (!button.disabled && !button.classList.contains('cursor-not-allowed')) {
                    button.style.transform = 'scale(1.05)';
                }
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1)';
            });
        });
    };

    // Phase progression tracker system
    const phases = ['RETOX', 'REVIVE', 'NUTRIX', 'AWAKEN'];
    let currentPhase = 0; // RETOX is currently active

    const updatePhaseStatus = () => {
        phases.forEach((phase, index) => {
            const phaseElement = document.querySelector(`[data-phase="${phase}"]`);
            if (phaseElement) {
                if (index === currentPhase) {
                    phaseElement.classList.add('active-phase');
                } else if (index < currentPhase) {
                    phaseElement.classList.add('completed-phase');
                } else {
                    phaseElement.classList.add('upcoming-phase');
                }
            }
        });
    };

    // Smooth reveal animations for cards
    const initCardAnimations = () => {
        const cards = document.querySelectorAll('.phase-card, .bg-gradient-to-br');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    };

    // WhatsApp button enhancement
    const enhanceWhatsAppButton = () => {
        const whatsappBtn = document.querySelector('a[href*="wa.me"]');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                // Analytics tracking could go here
                console.log('RETOX WhatsApp clicked');
            });
        }
    };

    // Lazy loading for non-critical images
    const initLazyLoading = () => {
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
    };

    // Easter egg: Konami code for special RETOX animation
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    
    const handleKonamiCode = (e) => {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            // Special RETOX animation
            document.body.style.animation = 'pulseGlow 2s ease-in-out';
            console.log('🔥 RETOX Easter Egg Activated!');
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
            konamiCode = [];
        }
    };

    document.addEventListener('keydown', handleKonamiCode);

    // Phase switching function (for future use)
    const switchToPhase = (phaseIndex) => {
        if (phaseIndex >= 0 && phaseIndex < phases.length) {
            currentPhase = phaseIndex;
            updatePhaseStatus();
            console.log(`Switched to phase: ${phases[phaseIndex]}`);
        }
    };

    // Window resize handler
    const handleResize = () => {
        // Reset navbar transform on resize
        const navbar = document.querySelector('nav');
        if (navbar && window.innerWidth > 768) {
            navbar.style.transform = 'translateY(0)';
        }
    };

    window.addEventListener('resize', handleResize);

    // Initialize all enhancements
    const initializeEnhancements = () => {
        enhancePhaseCards();
        enhanceButtons();
        updatePhaseStatus();
        initCardAnimations();
        enhanceWhatsAppButton();
        initLazyLoading();
    };

    // Initialize everything after DOM is loaded
    initializeEnhancements();

    // Loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        console.log('🚀 RETOX page fully loaded and ready!');
    });

    // Expose some functions globally for potential future use
    window.VitalBeatRETOX = {
        switchToPhase,
        phases,
        currentPhase
    };

    // Performance monitoring (optional)
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log(`⚡ RETOX Page Load Time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
            }, 0);
        });
    }

});