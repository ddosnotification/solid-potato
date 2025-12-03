# 🚀 PODPEROS - Quick Start Guide

## 📖 How to View the Website

### Method 1: Direct File Opening (Simplest)
1. **Navigate** to the `/workspace` folder
2. **Double-click** on `index.html`
3. The website will open in your default browser

✅ **Best for**: Quick preview, testing

---

### Method 2: Using Python (Recommended)
```bash
# Navigate to the folder
cd /workspace

# Start the server
python3 -m http.server 8080

# Open in browser
# Visit: http://localhost:8080
```

✅ **Best for**: Full feature testing, realistic environment

---

### Method 3: Using Node.js
```bash
# Navigate to the folder
cd /workspace

# Install http-server (first time only)
npm install -g http-server

# Start the server
http-server -p 8080

# Visit: http://localhost:8080
```

✅ **Best for**: Node.js developers

---

### Method 4: Using PHP
```bash
# Navigate to the folder
cd /workspace

# Start the server
php -S localhost:8080

# Visit: http://localhost:8080
```

✅ **Best for**: PHP developers

---

## 📱 What to Test

### Desktop (1200px+)
- [ ] Custom cursor glow effect
- [ ] Smooth scrolling navigation
- [ ] Hover effects on cards
- [ ] Parallax background effect
- [ ] Vending machine animation
- [ ] Contact form submission

### Tablet (768px - 992px)
- [ ] Hero section stacks correctly
- [ ] Navigation becomes hamburger menu
- [ ] Cards resize appropriately
- [ ] Form remains usable

### Mobile (< 768px)
- [ ] Mobile menu opens/closes
- [ ] Text is readable
- [ ] Buttons are tap-friendly
- [ ] All sections stack properly
- [ ] Form fields are easy to use

---

## 🎨 Sections to Review

1. **Hero Section**
   - Large "PODPEROS" title with gradient
   - Two call-to-action buttons
   - Animated vending machine
   - Scroll indicator

2. **About Section**
   - 4 benefit cards
   - Icon animations on hover

3. **Products Section**
   - 3 product categories
   - Hot/New/Soon badges
   - Feature lists

4. **Locations Section**
   - City listings
   - Map placeholder
   - Partnership CTA

5. **Contact Section**
   - Contact information
   - Working contact form
   - Social media links

6. **Footer**
   - Age warning
   - Copyright

---

## ⚙️ Browser Compatibility

### ✅ Fully Supported
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Mobile browsers

### ⚠️ Partial Support
- Internet Explorer 11 (gradients may not work)

---

## 🔧 Quick Customization

### Change Colors
Edit `style.css` line 8-18:
```css
:root {
    --primary-color: #ff00ff;    /* Change this */
    --secondary-color: #00ffff;  /* And this */
    /* ... */
}
```

### Change Contact Info
Edit `index.html` lines 180-185:
```html
<a href="mailto:info@podperos.sk">info@podperos.sk</a>
<a href="tel:+421900000000">+421 900 000 000</a>
```

### Add Real Map
Replace map placeholder in `index.html` (line 157) with:
```html
<iframe src="https://www.google.com/maps/embed?pb=..." 
        width="100%" height="400" style="border:0;" 
        loading="lazy"></iframe>
```

---

## 🐛 Troubleshooting

### Styles not loading?
- Check that `style.css` is in the same folder as `index.html`
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

### JavaScript not working?
- Check browser console for errors (F12)
- Ensure `script.js` is in the same folder
- Try a different browser

### Contact form not submitting?
- This is normal! Form is set to show notification only
- To connect to backend, edit `script.js` line 128

---

## 📊 File Overview

```
/workspace/
├── index.html      (262 lines) - Website structure
├── style.css       (979 lines) - All styling & animations
├── script.js       (375 lines) - Interactive features
├── README.md       - Full documentation
├── FEATURES.md     - Design & branding guide
└── QUICKSTART.md   - This file
```

---

## 🎯 Next Steps

### For Development
1. Test all features in different browsers
2. Connect contact form to backend API
3. Add real Google Maps integration
4. Set up analytics (Google Analytics)
5. Configure domain and hosting

### For Production
1. Minify CSS and JavaScript
2. Optimize images (if added)
3. Set up SSL certificate
4. Configure CDN (optional)
5. Add sitemap.xml and robots.txt

### For Marketing
1. Create social media accounts
2. Design marketing materials
3. Plan vending machine locations
4. Prepare launch campaign
5. Set up customer support channels

---

## 💡 Pro Tips

1. **Test on Real Devices**: Emulators are good, but real phones are better
2. **Check Load Times**: Use Chrome DevTools Performance tab
3. **Accessibility**: Test with screen readers
4. **SEO**: Add meta tags and descriptions
5. **Analytics**: Install tracking before launch

---

## 📞 Need Help?

If you encounter issues or need customization:
- Review the `README.md` for detailed documentation
- Check `FEATURES.md` for design specifications
- Inspect browser console (F12) for JavaScript errors

---

## 🎉 You're Ready!

The website is complete and ready to use. Just open `index.html` in a browser and enjoy!

**PODPEROS - Pod perami, nad očakávaním! 🚀**
