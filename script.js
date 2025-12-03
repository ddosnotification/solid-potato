// Smooth Scroll for Navigation Links
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

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    
    // Animate menu button
    mobileMenuBtn.classList.toggle('active');
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
const animateOnScroll = document.querySelectorAll('.about-card, .product-card, .location-item, .step, .contact-content > *');
animateOnScroll.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Product Card Hover Effect
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem 3rem;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(102, 126, 234, 0.5);
        z-index: 10000;
        text-align: center;
        animation: popIn 0.3s ease-out;
    `;
    successMessage.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✉️</div>
        <h3 style="margin-bottom: 0.5rem;">Správa odoslaná!</h3>
        <p>Ďakujeme za tvoju správu. Ozveme sa ti čoskoro.</p>
    `;
    
    document.body.appendChild(successMessage);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        successMessage.style.animation = 'popOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 300);
    }, 3000);
    
    // Reset form
    contactForm.reset();
});

// Vending Machine Screen Animation
const machineScreen = document.querySelector('.machine-screen');
if (machineScreen) {
    const messages = [
        'podperos',
        'Pod perami 😏',
        'Tvoja dávka štýlu ✨',
        'Nový snus? 🎯',
        'Vyber si! 💊'
    ];
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        const screenText = document.querySelector('.screen-text');
        if (screenText) {
            screenText.style.animation = 'none';
            setTimeout(() => {
                screenText.textContent = messages[currentIndex];
                screenText.style.animation = 'fadeInUp 0.5s ease-out';
            }, 50);
        }
    }, 4000);
}

// Floating Pouches Animation Enhancement
const pouches = document.querySelectorAll('.pouch');
pouches.forEach((pouch, index) => {
    pouch.addEventListener('mouseenter', () => {
        pouch.style.animation = 'none';
        pouch.style.transform = 'scale(1.5) rotate(360deg)';
        pouch.style.transition = 'all 0.5s ease-out';
    });
    
    pouch.addEventListener('mouseleave', () => {
        pouch.style.transform = '';
        setTimeout(() => {
            pouch.style.animation = '';
        }, 500);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    const floatingPouches = document.querySelector('.floating-pouches');
    
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (floatingPouches) {
        floatingPouches.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Location items pulse on hover
const locationItems = document.querySelectorAll('.location-item');
locationItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.location-icon');
        icon.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            icon.style.animation = '';
        }, 500);
    });
});

// Add cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Create cursor trail
const trail = document.createElement('div');
trail.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease-out;
`;
document.body.appendChild(trail);

function animateTrail() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;
    
    trail.style.left = trailX - 10 + 'px';
    trail.style.top = trailY - 10 + 'px';
    
    requestAnimationFrame(animateTrail);
}
animateTrail();

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalHTML = heroTitle.innerHTML;
    heroTitle.style.opacity = '1';
}

// Strength bars animation on scroll
const productCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.bar.active');
            bars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.animation = 'slideIn 0.5s ease-out forwards';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.product-card').forEach(card => {
    productCardsObserver.observe(card);
});

// Add slideIn animation for bars
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: scaleX(0);
            transform-origin: left;
        }
        to {
            transform: scaleX(1);
        }
    }
    
    @keyframes popIn {
        from {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
        }
        to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
    
    @keyframes popOut {
        from {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        to {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add Easter egg - click logo 5 times
let logoClickCount = 0;
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    logoClickCount++;
    if (logoClickCount === 5) {
        // Create confetti effect
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                width: 10px;
                height: 10px;
                background: ${['#667eea', '#f5576c', '#00f2fe'][Math.floor(Math.random() * 3)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
            `;
            document.body.appendChild(confetti);
            
            const angle = (Math.PI * 2 * i) / 50;
            const velocity = 5 + Math.random() * 5;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let x = 0, y = 0, gravity = 0.5, vyi = vy;
            
            const animate = () => {
                x += vx;
                y += vyi;
                vyi += gravity;
                
                confetti.style.transform = `translate(${x}px, ${y}px)`;
                confetti.style.opacity = Math.max(0, 1 - y / 500);
                
                if (y < 500) {
                    requestAnimationFrame(animate);
                } else {
                    document.body.removeChild(confetti);
                }
            };
            animate();
        }
        logoClickCount = 0;
    }
});

// Make mobile menu responsive
window.addEventListener('resize', () => {
    if (window.innerWidth > 968) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
        mobileMenuBtn.classList.remove('active');
    }
});

console.log('🎯 podperos - Pod perami, v pohode! ✨');
