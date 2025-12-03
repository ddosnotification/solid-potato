# PODPEROS - Quick Start Guide 🚀

## 📋 Table of Contents
1. [Installation](#installation)
2. [File Structure](#file-structure)
3. [Customization](#customization)
4. [Deployment](#deployment)
5. [Troubleshooting](#troubleshooting)

---

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.) - optional for customization
- No build tools or dependencies required!

### Getting Started

1. **Download or Clone the Project**
   ```bash
   # If using git
   git clone <repository-url>
   cd workspace
   
   # Or simply download the files
   ```

2. **Open the Website**
   - Double-click `index.html` to open in your default browser
   - Or right-click → Open With → Choose your browser
   - Or use a local server for best results:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if installed)
   npx serve
   ```

3. **That's It!**
   - No npm install
   - No build process
   - No dependencies
   - Just pure HTML, CSS, and JavaScript

---

## 📁 File Structure

```
/workspace/
│
├── index.html              # Main HTML file (300 lines)
│   └── All content and structure
│
├── styles.css              # All CSS styles (1040 lines)
│   ├── CSS Variables (colors, spacing, etc.)
│   ├── Layout styles
│   ├── Component styles
│   ├── Animations
│   └── Media queries
│
├── script.js               # JavaScript functionality (406 lines)
│   ├── Navigation toggle
│   ├── Scroll animations
│   ├── Form handling
│   ├── Location search
│   └── Interactive effects
│
├── README.md               # Project overview
├── BRANDING_GUIDE.md       # Brand identity & design system
└── QUICK_START.md          # This file
```

---

## 🎨 Customization

### Quick Edits

#### 1. Change Colors
Edit CSS variables in `styles.css` (lines 16-26):

```css
:root {
    --primary: #FF006E;      /* Change main pink color */
    --secondary: #8338EC;    /* Change purple color */
    --accent: #3A86FF;       /* Change blue color */
    --success: #06FFA5;      /* Change green color */
    --dark: #0A0E27;         /* Change background */
}
```

#### 2. Update Company Info
Edit contact details in `index.html` (search for "Contact Section"):

```html
<!-- Around line 224 -->
<p><a href="mailto:info@podperos.sk">info@podperos.sk</a></p>
<p><a href="tel:+421900123456">+421 900 123 456</a></p>
```

#### 3. Add/Remove Locations
Edit the locations section in `index.html` (around line 178):

```html
<div class="location-card" data-aos="fade-right">
    <div class="location-icon">📍</div>
    <h3>Your City Name</h3>
    <p>Description</p>
    <ul class="location-list">
        <li>Address 1</li>
        <li>Address 2</li>
    </ul>
</div>
```

#### 4. Modify Products
Update the products section in `index.html` (around line 127):

```html
<div class="product-card" data-aos="zoom-in">
    <!-- Customize product information here -->
</div>
```

#### 5. Change Text Content
All Slovak text is in `index.html`. Simply find and replace:
- Hero title (line ~30)
- Section headings
- Descriptions
- Button labels

---

## 🎯 Common Customizations

### Add a New Section

1. **Add HTML** (in `index.html` before footer):
```html
<section id="your-section" class="your-section">
    <div class="container">
        <div class="section-header">
            <h2>Your <span class="highlight">Title</span></h2>
            <p class="section-subtitle">Your subtitle</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

2. **Add Navigation Link** (in navbar):
```html
<li><a href="#your-section">Your Link</a></li>
```

3. **Add Styles** (in `styles.css`):
```css
.your-section {
    background: var(--dark);
    padding: var(--spacing-xl) 0;
}
```

### Change Animations

**Modify animation speed** in `styles.css`:
```css
/* Find animations and adjust duration */
animation: float 6s ease-in-out infinite; /* Change 6s to your preference */
transition: all 0.3s ease; /* Change 0.3s for slower/faster transitions */
```

**Disable animations** (for accessibility or preference):
```css
/* Add to styles.css */
* {
    animation: none !important;
    transition: none !important;
}
```

### Adjust Responsive Breakpoints

In `styles.css`, find media queries (lines 900+):
```css
@media (max-width: 968px) { /* Tablet styles */ }
@media (max-width: 768px) { /* Mobile styles */ }
@media (max-width: 480px) { /* Small mobile styles */ }
```

---

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```
3. Go to repository Settings → Pages
4. Select branch: main
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Done! Instant deployment

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Import your git repository
3. Deploy automatically

### Option 4: Traditional Hosting

1. Get web hosting (any provider)
2. Upload files via FTP:
   - Upload `index.html`, `styles.css`, `script.js`
   - Ensure `index.html` is in root directory
3. Access via your domain

### Pre-Deployment Checklist

- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Update contact information
- [ ] Verify all links work
- [ ] Check form functionality
- [ ] Update location information
- [ ] Add real product images (if available)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Add favicon
- [ ] Verify age restriction notices are visible
- [ ] Test loading speed

---

## 🔧 Advanced Customization

### Add Real Location Map

Replace the map placeholder with Google Maps:

```html
<!-- In index.html, replace map-placeholder div -->
<div id="map" style="width: 100%; height: 400px; border-radius: 16px;"></div>

<script>
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.1486, lng: 17.1077 }, // Bratislava
        zoom: 13
    });
    
    // Add markers for each location
    new google.maps.Marker({
        position: { lat: 48.1486, lng: 17.1077 },
        map: map,
        title: 'PODPEROS - Location 1'
    });
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
```

### Add Contact Form Backend

**Using Formspree (easiest):**

1. Sign up at [formspree.io](https://formspree.io)
2. Update form in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Using Netlify Forms:**

1. Deploy on Netlify
2. Add to form tag:
```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
```

### Add Analytics

**Google Analytics:**

Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Favicon

Create a `favicon.ico` file and add to `<head>`:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
```

---

## 🐛 Troubleshooting

### Issue: Animations Not Working

**Solution:**
- Check browser supports CSS animations
- Disable browser motion reduction settings
- Ensure JavaScript is enabled

### Issue: Mobile Menu Not Opening

**Solution:**
1. Check browser console for errors (F12)
2. Verify `script.js` is loading correctly
3. Check if hamburger class is applied

### Issue: Form Not Submitting

**Solution:**
- Currently form only shows notification (no backend)
- Add form backend (see Advanced Customization)
- Check browser console for validation errors

### Issue: Styles Not Applying

**Solution:**
1. Verify `styles.css` path is correct
2. Check browser cache (Ctrl+Shift+R to hard refresh)
3. Ensure CSS file is in same directory as HTML

### Issue: Colors Look Different

**Solution:**
- Check monitor color calibration
- Verify CSS variables are correct
- Some browsers render gradients differently

---

## 📱 Mobile Testing

### Test on Real Devices
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)

### Use Browser Dev Tools
```
Chrome: F12 → Toggle Device Toolbar (Ctrl+Shift+M)
Firefox: F12 → Responsive Design Mode (Ctrl+Shift+M)
Safari: Develop → Enter Responsive Design Mode
```

### Test Different Screen Sizes
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1366px, 1920px

---

## ✅ Quality Checklist

### Before Launch

**Content:**
- [ ] All text is in Slovak
- [ ] Contact information is correct
- [ ] Location addresses are accurate
- [ ] Age restrictions (18+) are visible
- [ ] Social media links are updated

**Functionality:**
- [ ] Navigation works on mobile
- [ ] All internal links work
- [ ] Smooth scrolling functions
- [ ] Form validation works
- [ ] Location search works
- [ ] Animations are smooth

**Design:**
- [ ] Responsive on all devices
- [ ] Images load correctly
- [ ] Colors are consistent
- [ ] Typography is readable
- [ ] Hover effects work

**Performance:**
- [ ] Page loads in <3 seconds
- [ ] No console errors
- [ ] Animations are smooth (60fps)
- [ ] Works offline (basic functionality)

**SEO:**
- [ ] Meta description is set
- [ ] Title tag is descriptive
- [ ] Semantic HTML is used
- [ ] Alt text for images (when added)

---

## 🆘 Getting Help

### Resources
- [MDN Web Docs](https://developer.mozilla.org) - HTML/CSS/JS reference
- [CSS Tricks](https://css-tricks.com) - CSS solutions
- [Can I Use](https://caniuse.com) - Browser compatibility

### Common Questions

**Q: Can I use this for commercial purposes?**  
A: Yes, this is built specifically for PODPEROS company.

**Q: Do I need to credit anyone?**  
A: No attribution required.

**Q: Can I modify the design?**  
A: Absolutely! Customize as needed.

**Q: How do I add more languages?**  
A: Create duplicate HTML files (e.g., `index-en.html`) or implement a translation system.

**Q: Is this production-ready?**  
A: Yes, but consider adding:
- Real backend for forms
- Analytics tracking
- SEO optimization
- Performance monitoring

---

## 🎉 Next Steps

1. **Customize Content**: Add your real locations and contact info
2. **Add Images**: Replace placeholder icons with real product photos
3. **Set Up Analytics**: Track visitor behavior
4. **Deploy**: Get it online!
5. **Market**: Share on social media
6. **Iterate**: Gather feedback and improve

---

## 📞 Support

For technical questions or customization help:
- Review `BRANDING_GUIDE.md` for design decisions
- Check `README.md` for feature documentation
- Inspect the code comments for inline documentation

---

**🚀 Ready to launch PODPEROS!**

*Fresh nikotín pod peros, kedykoľvek potrebuješ.*

© 2025 PODPEROS
