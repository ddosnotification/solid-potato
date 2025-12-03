# PODPEROS 💋

Modern Slovak website for a snus (nicotine pouches) vending machine company.

## 🎯 About

**PODPEROS** (meaning "under lips" in Slovak) is a trendy, modern company providing convenient access to premium nicotine pouches through strategically placed vending machines across Slovakia.

## ✨ Features

### Branding
- **Modern & Funny**: Bold, vibrant color scheme with playful animations
- **Slovak Language**: Fully localized content in Slovak
- **"Under Lips" Theme**: Creative use of lip icons and visual metaphors
- **Youthful Aesthetic**: Electric blue (#00e5ff), hot pink (#ff1744), and neon green (#76ff03)

### Website Sections
1. **Hero Section**: Eye-catching animated hero with lip icon and product visualization
2. **About Section**: Key features and benefits (24/7 access, premium products, quick service)
3. **Products Section**: Showcase of available snus flavors with strength indicators
4. **Vending Machine Section**: Interactive vending machine visual with location listings
5. **FAQ Section**: Collapsible accordion with common questions
6. **Contact Section**: Contact form and social media links
7. **Footer**: Quick links and legal information

### Technical Features
- **Responsive Design**: Mobile-first, works on all devices
- **Smooth Animations**: CSS animations and scroll effects
- **Interactive Elements**: FAQ accordion, form validation, hover effects
- **Modern UI/UX**: Clean navigation, parallax effects, custom cursor
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Semantic HTML, keyboard navigation support

## 🚀 Installation

Simply open `index.html` in a web browser. No build process required!

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: Using Node.js
npx serve
```

## 📁 Project Structure

```
podperos/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with animations
├── script.js           # Interactive JavaScript features
└── README.md          # This file
```

## 🎨 Color Palette

- **Primary**: `#00e5ff` (Electric Cyan) - Main brand color
- **Secondary**: `#ff1744` (Hot Pink) - Accent for CTAs
- **Accent**: `#76ff03` (Neon Green) - Highlights
- **Dark**: `#0a0e27` (Deep Navy) - Background
- **Dark Light**: `#1a1f3a` (Navy Blue) - Secondary background

## 🔥 Branding Elements

1. **Logo**: "PODPEROS 💋" with gradient text effect
2. **Lip Icon**: Custom SVG illustration showing product placement
3. **Emojis**: Strategic use of 💋, 🎯, ✨, ⚡, 🔥 for visual appeal
4. **Typography**: Inter font family (modern, clean)
5. **Gradients**: Vibrant gradients throughout for modern feel

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 640px - 968px
- **Mobile**: < 640px

## 🎭 Interactive Features

### JavaScript Enhancements
- Smooth scroll navigation
- Sticky navbar with scroll effects
- Mobile hamburger menu
- FAQ accordion
- Form submission handling
- Intersection Observer animations
- Parallax hero effect
- Product card interactions
- Custom cursor (desktop)
- Scroll progress indicator
- Easter eggs (Konami code)

### CSS Animations
- Fade in/out effects
- Slide animations
- Float/pulse effects
- Gradient shifts
- Glow effects on vending machine
- Hover transforms

## 🛠️ Customization

### Update Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #00e5ff;
    --secondary: #ff1744;
    /* ... */
}
```

### Add Products
Duplicate product card structure in `index.html`:
```html
<div class="product-card">
    <!-- Product content -->
</div>
```

### Add Locations
Add location items in vending section:
```html
<div class="location-item">
    <div class="location-icon">📍</div>
    <div class="location-details">
        <h4>City Name</h4>
        <p>Address</p>
    </div>
</div>
```

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 TODO / Future Enhancements

- [ ] Add real product images
- [ ] Integrate Google Maps for vending machine locations
- [ ] Add e-commerce functionality for online orders
- [ ] Implement backend for contact form
- [ ] Add age verification modal
- [ ] Create blog section for content marketing
- [ ] Add Instagram feed integration
- [ ] Implement multi-language support (SK/EN)
- [ ] Add PWA features (service worker, offline mode)
- [ ] Analytics integration

## ⚠️ Legal Notice

This website is for a product intended **ONLY for adults 18+**. All nicotine products are subject to local regulations and age restrictions.

## 📧 Contact

- **Email**: info@podperos.sk
- **Phone**: +421 900 123 456
- **Instagram**: @podperos_sk

## 🎉 Credits

Designed and developed for PODPEROS - Your snus under the lip, always at hand.

---

Made with 💋 in Slovakia
