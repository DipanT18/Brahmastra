# Brahmastra - AI-Powered Learning Platform

## 🕉️ Overview

Brahmastra is an innovative AI-powered educational technology platform that combines cutting-edge artificial intelligence with the timeless wisdom of ancient Indian philosophy, particularly the teachings from the Bhagavad Gita.

## 🌟 Features

### Home Page (`home.html`)
- **Hero Section**: Features the iconic Krishna-Arjuna scene from Bhagavad Gita as background
- **Navigation Bar**: Clean, responsive navigation with sign-in button
- **Inspirational Quotes**: Sanskrit verses with English translations and modern relevance
- **Features Showcase**: Six key features of the platform
- **FAQ Section**: Interactive accordion-style frequently asked questions
- **Footer**: Complete contact information and social media links

### Authentication System
- **Login Page** (`index.html`): Clean, accessible login form
- **Signup Page** (`signup.html`): Comprehensive registration form
- **Form Validation**: Complete client-side validation with unit and integration tests

## 🎨 Design Philosophy

### Visual Theme
- **Colors**: Saffron (#FF9933), Orange (#FF6B35), and Green (#138808) representing the Indian flag
- **Typography**: Modern sans-serif fonts with Devanagari support for Sanskrit text
- **Layout**: Mobile-first responsive design with clean, modern aesthetics

### Cultural Integration
- Sanskrit quotes with English translations
- Mahabharata-inspired imagery and metaphors
- Traditional Indian color palette
- Philosophical wisdom integrated with modern learning concepts

## 🛠️ Technical Stack

### Frontend
- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive functionality and form validation
- **SVG**: Scalable vector graphics for icons and illustrations

### Testing
- **Unit Tests**: Comprehensive validation function testing
- **Integration Tests**: Complete user workflow testing
- **Test Coverage**: Email validation, password strength, form submission

## 📁 Project Structure

```
Brahmastra/
├── home.html              # Main landing page
├── index.html             # Login page
├── signup.html            # Registration page
├── css/
│   ├── styles.css         # Authentication system styles
│   ├── theme.css          # Color theme and variables
│   └── home.css           # Home page specific styles
├── js/
│   ├── validation.js      # Form validation functions
│   └── home.js            # Home page interactions
├── assets/
│   └── images/            # Icons and graphics
├── tests/
│   ├── validation.test.js # Unit tests
│   ├── integration.test.js# Integration tests
│   ├── run-tests.js       # Test runner
│   └── README.md          # Testing documentation
└── .kiro/
    └── specs/             # Development specifications
```

## 🚀 Getting Started

1. **Open the Home Page**:
   ```bash
   # Open in your default browser
   start home.html  # Windows
   open home.html   # macOS
   ```

2. **Run Tests**:
   ```bash
   node tests/run-tests.js
   ```

3. **Navigate the Platform**:
   - Start at `home.html` for the main landing page
   - Click "Sign In" to go to the login page
   - Click "Start Your Journey" to go to the signup page

## 🎯 Key Pages

### 1. Home Page Features
- **Responsive Navigation**: Works on all device sizes
- **Hero Section**: Inspiring Krishna-Arjuna background with call-to-action
- **Wisdom Quotes**: Three carefully selected Sanskrit verses with relevance
- **Feature Cards**: Six main platform capabilities
- **Interactive FAQ**: Expandable question-answer sections
- **Complete Footer**: Contact info, social links, and site navigation

### 2. Authentication System
- **Accessible Forms**: WCAG compliant with proper ARIA labels
- **Real-time Validation**: Immediate feedback on form inputs
- **Comprehensive Testing**: 34 total tests covering all scenarios
- **Mobile Optimized**: Touch-friendly interface for all devices

## 🧪 Testing

The platform includes comprehensive testing:

- **22 Unit Tests**: Individual validation functions
- **12 Integration Tests**: Complete user workflows
- **Error Handling**: Edge cases and validation scenarios
- **Cross-browser**: Compatible with modern browsers

Run all tests:
```bash
node tests/run-tests.js
```

## 🎨 Customization

### Colors
The platform uses CSS custom properties for easy theming:
- Primary: `#FF9933` (Saffron)
- Secondary: `#FF6B35` (Orange)
- Accent: `#138808` (Green)

### Content
- Replace placeholder images with actual Krishna-Arjuna artwork
- Update Sanskrit quotes as needed
- Modify feature descriptions for your specific platform
- Customize contact information in the footer

## 📱 Responsive Design

The platform is fully responsive with breakpoints for:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences

## 🔮 Future Enhancements

- Backend integration for user authentication
- AI-powered learning recommendations
- Course content management system
- Progress tracking and analytics
- Community features and forums
- Mobile app development

## 📄 License

This project is created for educational purposes and incorporates traditional Indian cultural elements with respect and reverence.

---

*"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥"*

*"Whenever there is a decline in righteousness and an increase in unrighteousness, I manifest myself to restore the balance."* - Bhagavad Gita 4.7