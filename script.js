// ===========================
// PODPEROS - Interactive Features
// ===========================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // MOBILE MENU TOGGLE
    // ===========================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
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

    // ===========================
    // SMOOTH SCROLLING
    // ===========================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // NAVBAR SCROLL EFFECT
    // ===========================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class for styling
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // ===========================
    // SCROLL ANIMATIONS
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add stagger effect for cards
                if (entry.target.classList.contains('about-card') || 
                    entry.target.classList.contains('product-card')) {
                    const cards = entry.target.parentElement.children;
                    Array.from(cards).forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('fade-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.about-card, .product-card, .location-item, .contact-item');
    animatedElements.forEach(el => observer.observe(el));

    // ===========================
    // ACTIVE NAV LINK ON SCROLL
    // ===========================
    const sections = document.querySelectorAll('section');
    
    function updateActiveNavLink() {
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // ===========================
    // CONTACT FORM HANDLING
    // ===========================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Form validation
            if (!name || !email || !message) {
                showNotification('Prosím vyplňte všetky polia!', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Prosím zadajte platný email!', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual API call)
            showNotification('Správa odoslaná! Ozveme sa ti čoskoro. 🚀', 'success');
            
            // Reset form
            contactForm.reset();
            
            // In production, you would send this data to a backend:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                showNotification('Správa odoslaná! 🚀', 'success');
                contactForm.reset();
            })
            .catch(error => {
                showNotification('Niečo sa pokazilo. Skús to znova!', 'error');
            });
            */
        });
    }

    // ===========================
    // EMAIL VALIDATION
    // ===========================
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ===========================
    // NOTIFICATION SYSTEM
    // ===========================
    function showNotification(message, type = 'success') {
        // Remove any existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            font-weight: 600;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }

    // ===========================
    // VENDING MACHINE ANIMATION
    // ===========================
    const vendingMachine = document.querySelector('.vending-machine');
    
    if (vendingMachine) {
        // Add interactive hover effect
        vendingMachine.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(5deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        vendingMachine.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
        });
    }

    // ===========================
    // PARALLAX EFFECT
    // ===========================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-bg::before, .hero-bg::after');
        
        // Simple parallax effect for hero background
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // ===========================
    // DYNAMIC CURSOR GLOW (OPTIONAL)
    // ===========================
    let cursor = null;
    let cursorGlow = null;

    // Only on desktop
    if (window.innerWidth > 992) {
        cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            width: 20px;
            height: 20px;
            border: 2px solid rgba(127, 58, 237, 0.8);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            display: none;
        `;
        
        cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        cursorGlow.style.cssText = `
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(127, 58, 237, 0.15) 0%, transparent 70%);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.15s ease;
            display: none;
        `;
        
        document.body.appendChild(cursor);
        document.body.appendChild(cursorGlow);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.display = 'block';
            cursorGlow.style.display = 'block';
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursorGlow.style.left = e.clientX - 100 + 'px';
            cursorGlow.style.top = e.clientY - 100 + 'px';
        });
        
        // Enlarge cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, .hamburger');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                if (cursor) {
                    cursor.style.width = '40px';
                    cursor.style.height = '40px';
                    cursor.style.borderColor = 'rgba(255, 0, 255, 0.8)';
                }
            });
            
            el.addEventListener('mouseleave', function() {
                if (cursor) {
                    cursor.style.width = '20px';
                    cursor.style.height = '20px';
                    cursor.style.borderColor = 'rgba(127, 58, 237, 0.8)';
                }
            });
        });
    }

    // ===========================
    // PERFORMANCE: REDUCE ANIMATIONS ON LOW-END DEVICES
    // ===========================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.scrollBehavior = 'auto';
    }

    // ===========================
    // CONSOLE EASTER EGG
    // ===========================
    console.log('%c🚀 PODPEROS - Pod perami, nad očakávaním!', 'color: #7c3aed; font-size: 20px; font-weight: bold;');
    console.log('%cChceš byť súčasťou nášho tímu? Kontaktuj nás na info@podperos.sk', 'color: #00ffff; font-size: 14px;');

    // ===========================
    // LOADING ANIMATION COMPLETE
    // ===========================
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        console.log('✅ Website loaded successfully!');
    });

});

// ===========================
// PREVENT RIGHT CLICK ON IMAGES (OPTIONAL)
// ===========================
/*
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
*/

// ===========================
// SERVICE WORKER FOR PWA (OPTIONAL)
// ===========================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
*/
