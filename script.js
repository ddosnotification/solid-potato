// ========================================
// PODPEROS - Interactive JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Navigation
    // ========================================
    
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // FAQ Accordion
    // ========================================
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // ========================================
    // Contact Form
    // ========================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Show success message
            showNotification('Ďakujeme! Tvoja správa bola odoslaná. Ozveme sa čoskoro! 💋', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ========================================
    // Intersection Observer for Animations
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-card, .product-card, .location-item, .faq-item, .contact-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ========================================
    // Parallax Effect for Hero
    // ========================================
    
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.3;
            heroVisual.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // ========================================
    // Product Card Hover Effects
    // ========================================
    
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const strengthFill = this.querySelector('.strength-fill');
            if (strengthFill) {
                const currentWidth = strengthFill.style.width;
                strengthFill.style.width = '100%';
                
                setTimeout(() => {
                    strengthFill.style.width = currentWidth;
                }, 300);
            }
        });
    });
    
    // ========================================
    // Dynamic Vending Machine Products Animation
    // ========================================
    
    const machineProducts = document.querySelectorAll('.machine-product');
    machineProducts.forEach((product, index) => {
        product.style.setProperty('--i', index);
    });
    
    // ========================================
    // Scroll Progress Indicator
    // ========================================
    
    function createScrollIndicator() {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-progress';
        scrollIndicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #00e5ff 0%, #ff1744 100%);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(scrollIndicator);
        
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            scrollIndicator.style.width = scrolled + '%';
        });
    }
    
    createScrollIndicator();
    
    // ========================================
    // Cursor Effect (Optional - for desktop)
    // ========================================
    
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            width: 20px;
            height: 20px;
            border: 2px solid #00e5ff;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        
        // Cursor enlarge on hover
        const hoverElements = document.querySelectorAll('a, button, .product-card, .about-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }
    
    // ========================================
    // Notification System
    // ========================================
    
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: ${type === 'success' ? '#76ff03' : '#00e5ff'};
            color: #0a0e27;
            padding: 20px 30px;
            border-radius: 15px;
            font-weight: 700;
            font-size: 16px;
            box-shadow: 0 10px 30px rgba(0, 229, 255, 0.3);
            z-index: 10000;
            animation: slideInRight 0.5s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
    
    // ========================================
    // Easter Egg - Konami Code
    // ========================================
    
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
        
        if (konamiCode.join('').includes(konamiPattern.join(''))) {
            activateEasterEgg();
        }
    });
    
    function activateEasterEgg() {
        showNotification('🎉 EXTRA SNUS POWER ACTIVATED! 💋', 'success');
        
        // Add party mode
        document.body.style.animation = 'rainbow 5s linear infinite';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
            style.remove();
        }, 5000);
    }
    
    // ========================================
    // Auto-refresh product animations
    // ========================================
    
    setInterval(() => {
        const randomProducts = Array.from(machineProducts).sort(() => Math.random() - 0.5).slice(0, 3);
        randomProducts.forEach(product => {
            product.style.animation = 'none';
            setTimeout(() => {
                product.style.animation = '';
            }, 10);
        });
    }, 5000);
    
    // ========================================
    // Lazy Loading Images (if you add real images later)
    // ========================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ========================================
    // Performance: Reduce animations on low-end devices
    // ========================================
    
    if (navigator.hardwareConcurrency <= 2) {
        document.documentElement.style.setProperty('--transition', 'none');
        document.documentElement.style.setProperty('--transition-slow', 'none');
    }
    
    // ========================================
    // Console Easter Egg
    // ========================================
    
    console.log('%c💋 PODPEROS', 'font-size: 40px; font-weight: bold; background: linear-gradient(90deg, #00e5ff, #ff1744); -webkit-background-clip: text; color: transparent;');
    console.log('%cTvoj snus pod pery! 🔥', 'font-size: 16px; color: #00e5ff;');
    console.log('%cHľadáš prácu? Píš na info@podperos.sk', 'font-size: 14px; color: #76ff03;');
    
});

// ========================================
// Page Load Animation
// ========================================

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero elements on load
    const heroText = document.querySelector('.hero-text');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroText) heroText.style.animation = 'fadeInUp 1s ease-out';
    if (heroVisual) heroVisual.style.animation = 'fadeInUp 1s ease-out 0.3s backwards';
});

// ========================================
// Service Worker Registration (for PWA - optional)
// ========================================

if ('serviceWorker' in navigator) {
    // Uncomment when you create a service worker
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('Service Worker registration failed'));
}
