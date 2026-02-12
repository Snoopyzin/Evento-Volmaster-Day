// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Smooth Scrolling
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

// Active Navigation on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Countdown Timer with Flip Animation
function updateCountdown() {
    // Set the event date - September 12, 2026
    const eventDate = new Date('2026-09-12T09:00:00').getTime();
    
    // Get elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    // Check if elements exist
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        console.error('❌ Countdown elements not found!');
        return;
    }
    
    // Function to update display
    const updateDisplay = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update display
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
        
        // If countdown is over
        if (distance < 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return false;
        }
        return true;
    };
    
    // Update immediately
    if (updateDisplay()) {
        // Update every second
        setInterval(updateDisplay, 1000);
    }
}

// Start countdown on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎉 Volmaster Day - Site carregado com sucesso!');
    updateCountdown();
    console.log('⏱️ Countdown iniciado!');
});

// Schedule Tabs - Removed (Event is now single day)
/* 
const scheduleTabs = document.querySelectorAll('.schedule-tab');
const scheduleContent = document.getElementById('scheduleContent');

const scheduleData = {
    1: {
        date: '12 Setembro 2026',
        events: [
            {
                time: '09:00 - 10:00',
                title: 'Credenciamento & Coffee de Boas-Vindas',
                description: 'Conheça outros participantes e pegue seu material do evento'
            },
            {
                time: '10:00 - 11:30',
                title: 'Keynote de Abertura: O Futuro da Tecnologia',
                description: 'Palestra inspiradora com líderes da indústria sobre tendências emergentes'
            },
            {
                time: '11:30 - 13:00',
                title: 'Workshop: Estratégias de Inovação',
                description: 'Sessão interativa sobre implementação de soluções inovadoras'
            },
            {
                time: '13:00 - 14:00',
                title: 'Almoço de Networking',
                description: 'Conecte-se com colegas durante um delic ioso almoço'
            }
        ]
    },
    2: {
        date: '13 Setembro 2026',
        events: [
            {
                time: '09:00 - 10:30',
                title: 'Painel: Transformação Digital',
                description: 'Insights de especialistas sobre navegação no panorama digital'
            },
            {
                time: '10:30 - 12:00',
                title: 'Sessões Paralelas',
                description: 'Escolha entre múltiplas sessões focadas em tópicos específicos'
            },
            {
                time: '12:00 - 13:00',
                title: 'Intervalo para Almoço',
                description: 'Aproveite um delicioso almoço e faça networking'
            },
            {
                time: '13:00 - 15:00',
                title: 'Workshop: Liderança nos Tempos Modernos',
                description: 'Desenvolva habilidades essenciais de liderança para os desafios atuais'
            }
        ]
    },
    3: {
        date: '14 Setembro 2026',
        events: [
            {
                time: '09:00 - 10:30',
                title: 'Keynote: Sustentabilidade e Negócios',
                description: 'Como práticas sustentáveis impulsionam o sucesso empresarial'
            },
            {
                time: '10:30 - 12:00',
                title: 'Apresentação de Casos de Sucesso',
                description: 'Histórias reais de sucesso e lições aprendidas'
            },
            {
                time: '12:00 - 13:00',
                title: 'Almoço de Encerramento',
                description: 'Última oportunidade de networking com todos os participantes'
            },
            {
                time: '13:00 - 14:00',
                title: 'Cerimônia de Encerramento & Premiação',
                description: 'Celebre as conquistas e encerre o evento'
            }
        ]
    }
};

function renderSchedule(day) {
    const data = scheduleData[day];
    document.querySelector('.schedule-date').textContent = data.date;
    
    scheduleContent.innerHTML = data.events.map(event => `
        <div class="schedule-item">
            <div class="schedule-time">${event.time}</div>
            <div class="schedule-details">
                <h4>${event.title}</h4>
                <p>${event.description}</p>
            </div>
        </div>
    `).join('');
}

scheduleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        scheduleTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get the day and render schedule
        const day = tab.getAttribute('data-day');
        renderSchedule(day);
    });
});
*/

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .stat-item, .schedule-item, .about-images img');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Stats Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (target >= 1000 ? '+' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (target >= 1000 ? '+' : '+');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const value = parseInt(statNumber.textContent);
            animateCounter(statNumber, value);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Chat Button Interaction
const chatBtn = document.querySelector('.chat-btn');
if (chatBtn) {
    chatBtn.addEventListener('click', () => {
        alert('Recurso de chat em breve! Por enquanto, entre em contato em eventos@volmastertech.com');
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--secondary-color)';
        navbar.style.backdropFilter = 'none';
    }
});

// Particle Effect no Background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.prepend(particlesContainer);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const startX = Math.random() * 100;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${Math.random() > 0.5 ? '#FFD700' : '#8A2BE2'};
            border-radius: 50%;
            left: ${startX}%;
            bottom: -10px;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: float ${duration}s ${delay}s infinite ease-in-out;
            box-shadow: 0 0 10px currentColor;
        `;
        
        particlesContainer.appendChild(particle);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

createParticles();

// Pulse Effect nos Cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .stat-item');
    
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ${index * 0.1}s ease-out forwards`;
        card.style.opacity = '0';
    });

    const fadeInUpStyle = document.createElement('style');
    fadeInUpStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(fadeInUpStyle);
});

// Glow Effect no Hover dos Links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 20px #FFD700, 0 0 30px #FFD700';
        this.style.transition = 'all 0.3s';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
    });
});

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

// Intersection Observer for scroll animations

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Animate children with stagger effect
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('.speakers, .schedule').forEach(section => {
    section.classList.add('animate-on-scroll');
    animateOnScroll.observe(section);
});

// ============================================
// PARALLAX EFFECTS
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax effect on hero overlay
    const heroOverlay = document.querySelector('.hero-overlay');
    if (heroOverlay) {
        heroOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const opacity = Math.min(scrolled / 100, 1);
        navbar.style.backgroundColor = `rgba(15, 15, 30, ${0.95 + opacity * 0.05})`;
    }
});

// ============================================
// SPEAKER CARDS - REMOVED TILT EFFECT
// ============================================

// Tilt effect removed for performance optimization

// ============================================
// SCHEDULE ITEMS PROGRESSIVE REVEAL
// ============================================

const scheduleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.schedule-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 150);
            });
            scheduleObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const scheduleSection = document.querySelector('.schedule');
if (scheduleSection) {
    scheduleObserver.observe(scheduleSection);
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

document.querySelectorAll('.btn-primary, .btn-hero, .chat-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn-primary, .btn-hero, .chat-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// DYNAMIC TEXT ANIMATION
// ============================================

// Typewriter effect for hero title (optional, commented out by default)
/*
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}
*/

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.classList.add('scroll-to-top');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    border: none;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px) scale(1.1)';
    scrollTopBtn.style.boxShadow = '0 6px 25px rgba(255, 215, 0, 0.7)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0) scale(1)';
    scrollTopBtn.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.5)';
});

// ============================================
// LOADING SCREEN ANIMATION
// ============================================

window.addEventListener('load', () => {
    // Remove loading class from body if exists
    document.body.classList.add('loaded');
    
    // Animate elements on initial load
    setTimeout(() => {
        document.querySelectorAll('.hero-content > *').forEach((el, index) => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 300);
});

console.log('🎉 Volmaster Day - Animations loaded successfully!');

// Parallax Effect no Scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero, .about, .services, .stats');
            
            parallaxElements.forEach(el => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
            
            ticking = false;
        });
        ticking = true;
    }
});

console.log('🚀 Volmaster Day - Site carregado com sucesso! ⚡');
