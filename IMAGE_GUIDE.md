# 🖼️ Image Replacement Guide for Brahmastra Website

## 📍 Images to Replace

### 1. **Hero Background Image**
**File:** `assets/images/krishna-arjuna-bg.jpg`
**Description:** The famous Krishna teaching Bhagavad Gita to Arjuna scene
**Recommended Size:** 1920x1080px or higher
**Format:** JPG, PNG, or WebP
**Usage:** Main hero section background

```html
<!-- Replace this line in home.html -->
<img src="assets/images/krishna-arjuna-bg.jpg" alt="Krishna teaching Bhagavad Gita to Arjuna" class="hero-bg-image">

<!-- With your image URL -->
<img src="YOUR_KRISHNA_ARJUNA_IMAGE_URL" alt="Krishna teaching Bhagavad Gita to Arjuna" class="hero-bg-image">
```

### 2. **Logo Images**
**Files:** 
- `assets/images/brahmastra-logo.svg` (Navigation)
- `assets/images/brahmastra-logo.svg` (Footer)

**Description:** Brahmastra platform logo
**Recommended Size:** SVG (scalable) or 200x200px PNG
**Format:** SVG preferred, PNG acceptable

```html
<!-- Replace these lines -->
<img src="assets/images/brahmastra-logo.svg" alt="Brahmastra Logo" class="nav-logo">
<img src="assets/images/brahmastra-logo.svg" alt="Brahmastra Logo" class="footer-logo">

<!-- With your logo URL -->
<img src="YOUR_LOGO_URL" alt="Brahmastra Logo" class="nav-logo">
<img src="YOUR_LOGO_URL" alt="Brahmastra Logo" class="footer-logo">
```

### 3. **Feature Icons (6 icons)**

#### 3.1 AI Brain Icon
```html
<!-- Replace -->
<img src="assets/images/ai-brain-icon.svg" alt="AI Brain" class="feature-img">
<!-- With -->
<img src="YOUR_AI_BRAIN_ICON_URL" alt="AI Brain" class="feature-img">
```

#### 3.2 Personalized Learning Icon
```html
<!-- Replace -->
<img src="assets/images/personalized-icon.svg" alt="Personalized Learning" class="feature-img">
<!-- With -->
<img src="YOUR_PERSONALIZED_ICON_URL" alt="Personalized Learning" class="feature-img">
```

#### 3.3 Wisdom Integration Icon
```html
<!-- Replace -->
<img src="assets/images/wisdom-icon.svg" alt="Ancient Wisdom" class="feature-img">
<!-- With -->
<img src="YOUR_WISDOM_ICON_URL" alt="Ancient Wisdom" class="feature-img">
```

#### 3.4 Analytics Icon
```html
<!-- Replace -->
<img src="assets/images/analytics-icon.svg" alt="Learning Analytics" class="feature-img">
<!-- With -->
<img src="YOUR_ANALYTICS_ICON_URL" alt="Learning Analytics" class="feature-img">
```

#### 3.5 Community Icon
```html
<!-- Replace -->
<img src="assets/images/community-icon.svg" alt="Learning Community" class="feature-img">
<!-- With -->
<img src="YOUR_COMMUNITY_ICON_URL" alt="Learning Community" class="feature-img">
```

#### 3.6 Meditation Icon
```html
<!-- Replace -->
<img src="assets/images/meditation-icon.svg" alt="Mindful Learning" class="feature-img">
<!-- With -->
<img src="YOUR_MEDITATION_ICON_URL" alt="Mindful Learning" class="feature-img">
```

### 4. **Social Media Icons (4 icons)**

#### 4.1 Facebook Icon
```html
<!-- Replace -->
<img src="assets/images/facebook-icon.svg" alt="Facebook">
<!-- With -->
<img src="YOUR_FACEBOOK_ICON_URL" alt="Facebook">
```

#### 4.2 Twitter Icon
```html
<!-- Replace -->
<img src="assets/images/twitter-icon.svg" alt="Twitter">
<!-- With -->
<img src="YOUR_TWITTER_ICON_URL" alt="Twitter">
```

#### 4.3 LinkedIn Icon
```html
<!-- Replace -->
<img src="assets/images/linkedin-icon.svg" alt="LinkedIn">
<!-- With -->
<img src="YOUR_LINKEDIN_ICON_URL" alt="LinkedIn">
```

#### 4.4 Instagram Icon
```html
<!-- Replace -->
<img src="assets/images/instagram-icon.svg" alt="Instagram">
<!-- With -->
<img src="YOUR_INSTAGRAM_ICON_URL" alt="Instagram">
```

### 5. **Contact Icons (3 icons)**

#### 5.1 Email Icon
```html
<!-- Replace -->
<img src="assets/images/email-icon.svg" alt="Email" class="contact-icon">
<!-- With -->
<img src="YOUR_EMAIL_ICON_URL" alt="Email" class="contact-icon">
```

#### 5.2 Phone Icon
```html
<!-- Replace -->
<img src="assets/images/phone-icon.svg" alt="Phone" class="contact-icon">
<!-- With -->
<img src="YOUR_PHONE_ICON_URL" alt="Phone" class="contact-icon">
```

#### 5.3 Location Icon
```html
<!-- Replace -->
<img src="assets/images/location-icon.svg" alt="Location" class="contact-icon">
<!-- With -->
<img src="YOUR_LOCATION_ICON_URL" alt="Location" class="contact-icon">
```

## 🎨 **Quick Replace Method**

### Option 1: Replace URLs in HTML
1. Open `home.html`
2. Find each `src="assets/images/..."` 
3. Replace with your image URLs
4. Save the file

### Option 2: Replace Files in Assets Folder
1. Keep the same filenames
2. Replace the files in `assets/images/` folder
3. Ensure same file extensions
4. No code changes needed

## 📐 **Recommended Image Specifications**

| Image Type | Size | Format | Notes |
|------------|------|--------|-------|
| Hero Background | 1920x1080px+ | JPG/PNG | High quality, landscape |
| Logo | 200x200px | SVG/PNG | Transparent background |
| Feature Icons | 100x100px | SVG/PNG | Simple, clean design |
| Social Icons | 24x24px | SVG/PNG | Standard social media icons |
| Contact Icons | 20x20px | SVG/PNG | Simple line icons |

## 🌟 **Image Sources Suggestions**

### For Krishna-Arjuna Image:
- High-resolution classical paintings
- Traditional Indian art depicting the Bhagavad Gita scene
- Ensure proper licensing for commercial use

### For Icons:
- **Feather Icons** (feathericons.com)
- **Heroicons** (heroicons.com)  
- **Lucide** (lucide.dev)
- **Font Awesome** (fontawesome.com)
- **Flaticon** (flaticon.com)

### For Logo:
- Create custom logo with Brahmastra branding
- Use Indian-inspired design elements
- Incorporate saffron/orange color scheme

## 🔄 **After Replacing Images**

1. **Test the website** to ensure all images load properly
2. **Check responsive design** on different screen sizes
3. **Verify alt text** is appropriate for accessibility
4. **Optimize image sizes** for web performance
5. **Consider using WebP format** for better compression

## 💡 **Pro Tips**

- Use **CDN URLs** for faster loading
- Compress images before uploading
- Use **lazy loading** for better performance
- Ensure images have proper **alt attributes** for accessibility
- Test on different devices and browsers

---

**Note:** The current placeholder images are simple SVGs. Replace them with high-quality, professional images that match your brand and vision for the Brahmastra platform.