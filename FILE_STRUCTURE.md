# Brahmastra Website File Structure

## 📁 Main Pages

### `index.html` - **Home Page (Landing Page)**
- **Purpose**: Main landing page that loads by default
- **Content**: Hero section, features, wisdom quotes, CTA
- **Navigation**: Links to signin.html and signup.html
- **Design**: Full desktop-sized, modern Khan Academy style

### `signin.html` - **Sign In Page**
- **Purpose**: User login/authentication page
- **Content**: Login form with email/password
- **Navigation**: Links back to index.html (home) and signup.html
- **Design**: Clean, accessible form design

### `signup.html` - **Sign Up Page**
- **Purpose**: User registration page
- **Content**: Registration form with username, email, password
- **Navigation**: Links back to index.html (home) and signin.html
- **Design**: Comprehensive form with validation

## 🎯 Navigation Flow

```
index.html (Home Page)
    ↓
    ├── "Sign In" → signin.html
    └── "Start Your Journey" → signup.html

signin.html (Sign In)
    ↓
    ├── "← Back to Home" → index.html
    └── "Create one" → signup.html

signup.html (Sign Up)
    ↓
    ├── "← Back to Home" → index.html
    └── "Sign in" → signin.html
```

## 🌐 Web Server Behavior

When you deploy this to a web server or open it locally:

1. **Default Page**: `index.html` loads automatically as the main page
2. **URL Structure**:
   - `yoursite.com/` → Shows index.html (home page)
   - `yoursite.com/signin.html` → Shows sign in page
   - `yoursite.com/signup.html` → Shows sign up page

## 📂 Supporting Files

- `css/home.css` - Home page specific styles
- `css/styles.css` - Authentication pages styles
- `css/theme.css` - Global theme and colors
- `js/home.js` - Home page interactions
- `js/validation.js` - Form validation logic
- `assets/images/` - Image placeholders and icons
- `tests/` - Validation and integration tests

## ✅ Current Status

- ✅ **Home page** is now the default landing page (`index.html`)
- ✅ **Sign in page** renamed to `signin.html`
- ✅ **Navigation links** updated correctly between all pages
- ✅ **Back to Home** links added to auth pages
- ✅ **Full desktop design** implemented
- ✅ **No white spaces** or blank areas

## 🚀 How to Use

1. **Local Testing**: Open `index.html` in your browser
2. **Web Deployment**: Upload all files to your web server
3. **Domain Access**: Your domain will automatically show the home page

The website now follows standard web conventions where `index.html` serves as the main landing page!