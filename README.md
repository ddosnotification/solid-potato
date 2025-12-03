# 🚀 PODPEROS - Modern Vending Machine Website

![PODPEROS Logo](https://img.shields.io/badge/PODPEROS-Under%20Lips-purple?style=for-the-badge)

## 🎯 About

**PODPEROS** (meaning "under lips" in Slovak) is a modern, trendy website for a vending machine company specializing in nicotine pouches (snus) and special nicotine vape products. The website features a fun, contemporary design with bold branding and smooth user experience.

## ✨ Features

### 🎨 Design & Branding
- **Modern Gradient Design**: Eye-catching purple-to-pink gradients throughout
- **Playful "Under Lips" Theme**: Fun branding that resonates with the Slovak meaning
- **Animated Elements**: Smooth animations and transitions for engaging UX
- **Custom Vending Machine Illustration**: Interactive visual representation
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices

### 🛠️ Technical Features
- **Pure HTML/CSS/JavaScript**: No frameworks required
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile-Friendly Menu**: Hamburger menu for mobile devices
- **Contact Form**: Interactive form with validation
- **Scroll Animations**: Elements fade in as you scroll
- **Custom Cursor Effect**: Subtle glow effect (desktop only)
- **Performance Optimized**: Fast loading and smooth animations

### 📱 Sections
1. **Hero**: Eye-catching landing with call-to-action buttons
2. **About**: Why choose PODPEROS - 24/7 availability, top products
3. **Products**: Nicotine pouches and special vape products
4. **Locations**: Where to find vending machines across Slovakia
5. **Contact**: Email, phone, social media, and contact form

## 🚀 Quick Start

### Running Locally

1. **Clone or download** the repository

2. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. **Visit** `http://localhost:8000` in your browser

## 📂 File Structure

```
podperos-website/
│
├── index.html          # Main HTML structure
├── style.css           # All styles, animations, and responsive design
├── script.js           # Interactive features and functionality
└── README.md           # This file
```

## 🎨 Branding Elements

### Color Scheme
- **Primary**: Purple gradient (#667eea → #764ba2)
- **Accent**: Pink/Magenta (#ff00ff)
- **Secondary**: Cyan (#00ffff)
- **Background**: Dark (#0a0a0f, #1a1a2e)

### Typography
- Modern sans-serif fonts
- Bold headlines with gradient text effects
- Clear, readable body text

### Visual Elements
- 👄 Lips emoji as brand icon
- Vending machine illustration
- Gradient cards and buttons
- Smooth animations and hover effects

## 🌟 Key Features

### Modern UX
- **Smooth Navigation**: Click any nav link for smooth scrolling
- **Mobile Optimized**: Full responsive design for all screen sizes
- **Interactive Cards**: Hover effects on all card elements
- **Form Validation**: Real-time validation on contact form

### Performance
- **Fast Loading**: Optimized CSS and JavaScript
- **Lazy Animations**: Elements animate as they come into view
- **Reduced Motion Support**: Respects user preferences

## 📝 Customization

### Updating Content

**Change Company Info**:
- Edit contact details in the Contact section of `index.html`
- Update social media links

**Add/Remove Locations**:
- Add new location items in the Locations section
- Update the map placeholder when ready

**Modify Products**:
- Edit product cards in the Products section
- Add new products with similar card structure

### Styling Changes

**Colors**: Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #ff00ff;
    --secondary-color: #00ffff;
    --accent-color: #7c3aed;
    /* ... */
}
```

**Fonts**: Change font-family in the `body` selector

**Animations**: Adjust animation speeds in keyframes

## 🔧 Integration Tips

### Connect Contact Form
Replace the form submission handler in `script.js` with your backend API:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message })
})
```

### Add Google Maps
Replace the map placeholder with an embedded Google Map or Mapbox integration.

### Add Analytics
Add Google Analytics or other tracking code before closing `</body>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚠️ Legal Notice

Remember to include:
- Age verification (18+) if required
- Terms and conditions
- Privacy policy
- Cookie consent (GDPR compliance)
- Product warnings about nicotine

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in Settings
3. Choose `main` branch as source

### Netlify / Vercel
1. Connect your Git repository
2. Deploy with default settings
3. Add custom domain if needed

### Traditional Hosting
1. Upload all files via FTP
2. Ensure `index.html` is in root directory
3. Configure SSL certificate

## 🎯 Future Enhancements

- [ ] Add real interactive map with vending machine locations
- [ ] Integrate with backend API for contact form
- [ ] Add product catalog with filtering
- [ ] Implement age verification system
- [ ] Add multi-language support (SK/EN)
- [ ] Create admin panel for location management
- [ ] Add real-time product availability
- [ ] Implement loyalty program section
- [ ] Add blog/news section
- [ ] Create mobile app

## 📞 Support

For questions or issues:
- 📧 Email: info@podperos.sk
- 📱 Phone: +421 900 000 000
- 💬 Social Media: Instagram | Facebook | TikTok

## 📄 License

© 2025 PODPEROS. All rights reserved.

---

**Made with 💜 for PODPEROS - Pod perami, nad očakávaním! 🚀**
