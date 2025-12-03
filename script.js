// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animate on Scroll (AOS) Implementation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Form validation
    if (!name || !email || !message) {
        showNotification('Prosím vyplň všetky polia!', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Prosím zadaj platný email!', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Správa odoslaná! Ozveme sa ti čoskoro.', 'success');
    contactForm.reset();
});

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #06FFA5 0%, #3A86FF 100%)' : 'linear-gradient(135deg, #FF006E 0%, #8338EC 100%)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideInRight 0.3s ease;
        max-width: 90%;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Location Search Functionality
const locationSearchInput = document.getElementById('locationSearch');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    const searchTerm = locationSearchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        showNotification('Prosím zadaj mesto alebo adresu', 'error');
        return;
    }
    
    // Filter location cards
    const locationCards = document.querySelectorAll('.location-card');
    let foundMatch = false;
    
    locationCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'pulse 0.5s ease';
            card.style.border = '2px solid #FF006E';
            foundMatch = true;
            
            // Scroll to the card
            setTimeout(() => {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
            
            // Reset border after animation
            setTimeout(() => {
                card.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            }, 2000);
        } else {
            card.style.display = 'block';
            card.style.opacity = '0.3';
        }
    });
    
    if (!foundMatch) {
        showNotification(`Zatiaľ nemáme automat v lokalite "${searchTerm}". Čoskoro expandujeme!`, 'error');
        // Reset all cards
        setTimeout(() => {
            locationCards.forEach(card => {
                card.style.opacity = '1';
            });
        }, 3000);
    } else {
        showNotification(`Našli sme automat pre: ${searchTerm}`, 'success');
    }
});

// Allow Enter key in search
locationSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Clear search when input is cleared
locationSearchInput.addEventListener('input', (e) => {
    if (e.target.value === '') {
        const locationCards = document.querySelectorAll('.location-card');
        locationCards.forEach(card => {
            card.style.opacity = '1';
            card.style.display = 'block';
        });
    }
});

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic Product Slot Animation
const productSlots = document.querySelectorAll('.product-slot');

productSlots.forEach((slot, index) => {
    slot.addEventListener('mouseenter', () => {
        slot.style.transform = 'scale(1.1)';
        slot.style.boxShadow = '0 0 25px rgba(255, 0, 110, 0.8)';
    });
    
    slot.addEventListener('mouseleave', () => {
        slot.style.transform = 'scale(1)';
        slot.style.boxShadow = '0 0 5px rgba(255, 0, 110, 0.3)';
    });
});

// Interactive Vending Machine Screen
const machineScreen = document.querySelector('.machine-screen');
const screenText = document.querySelector('.screen-text');

if (machineScreen && screenText) {
    const messages = ['READY', 'FRESH', 'POD PEROS', '24/7', 'VYBERTE SI'];
    let currentIndex = 0;
    
    setInterval(() => {
        screenText.style.opacity = '0';
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % messages.length;
            screenText.textContent = messages[currentIndex];
            screenText.style.opacity = '1';
        }, 300);
    }, 3000);
}

// Add hover effect to product cards
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const badge = card.querySelector('.product-badge');
        if (badge) {
            badge.style.transform = 'scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const badge = card.querySelector('.product-badge');
        if (badge) {
            badge.style.transform = 'scale(1)';
        }
    });
});

// Easter Egg: Konami Code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    showNotification('🎉 ULTRA FRESH MODE ACTIVATED! 🎉', 'success');
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
    
    setTimeout(() => {
        document.body.style.animation = '';
        rainbowStyle.remove();
    }, 5000);
}

// Preload animation for smooth experience
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Log website loaded
console.log('%c POD PEROS ', 'background: linear-gradient(135deg, #FF006E 0%, #8338EC 100%); color: white; font-size: 20px; font-weight: bold; padding: 10px 20px;');
console.log('Website loaded successfully! Fresh nikotín pod peros 24/7 🔥');
