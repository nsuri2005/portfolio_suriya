# Quick Start Guide

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm build
```

---

## Key Files & Customization

### Update Personal Information

**Hero Section** - `src/components/Hero.js`
- Change "John Doe" to your name
- Update subtitle and description
- Change button text if needed

**About Section** - `src/components/About.js`
- Update bio and interests

**Projects Section** - `src/components/Projects.js`
- Add your actual project details
- Update GitHub links

**Contact Section** - `src/components/Contact.js`
- Replace email (john@example.com)
- Update GitHub URL
- Update LinkedIn URL

**Navbar Links** - `src/components/Navbar.js`
- Navigation is automatic based on section IDs

### Change Profile Image

In `Hero.js`, replace the placeholder URL:
```javascript
src="https://via.placeholder.com/300?text=Profile"
```
With your actual image URL.

### Customize Colors

Edit `src/index.css` CSS variables:
```css
:root {
  --primary-color: #6366f1;      /* Blue/Purple Primary */
  --secondary-color: #8b5cf6;    /* Purple Secondary */
  --text-color: #1f2937;         /* Dark Gray Text */
  /* ... more variables */
}
```

---

## Features Overview

✅ **Sticky Navigation** - Always accessible
✅ **Smooth Scrolling** - Jump to sections
✅ **Responsive Design** - Works on all devices
✅ **Progress Bars** - Visual skill representation
✅ **Contact Form** - (Currently logs to console - integrate backend)
✅ **Hover Animations** - Smooth interactions
✅ **Mobile Menu** - Hamburger menu on small screens

---

## File Structure Explained

```
src/
├── components/          # Reusable React components
│   ├── Navbar         # Navigation bar with links
│   ├── Hero           # Main hero/landing section
│   ├── About          # About me section
│   ├── Skills         # Skills with progress bars
│   ├── Projects       # Project showcase cards
│   └── Contact        # Contact form & links
├── App.js             # Main app component
├── App.css            # App-level styles
├── index.js           # React entry point
└── index.css          # Global styles & variables
```

---

## Tips

1. **Replace all placeholder data** with your actual information
2. **Test on mobile** - Use DevTools (F12) to check responsive design
3. **Add real images** - Use Imgur, Cloudinary, or host locally
4. **Connect form** - Use EmailJS or Formspree for contact form
5. **Deploy** - Use Netlify, Vercel, or GitHub Pages

---

## Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

All components adapt automatically!

---

Deploy your portfolio and showcase your work! 🚀
