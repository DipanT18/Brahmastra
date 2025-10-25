/**
 * Form validation functions for Brahmastra authentication system
 */

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid, false otherwise
 */
function validateEmail(email) {
    if (!email || typeof email !== 'string') {
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with isValid boolean and errors array
 */
function validatePassword(password) {
    const result = {
        isValid: true,
        errors: []
    };
    
    if (!password || typeof password !== 'string') {
        result.isValid = false;
        result.errors.push('Password is required');
        return result;
    }
    
    if (password.length < 8) {
        result.isValid = false;
        result.errors.push('Password must be at least 8 characters long');
    }
    
    return result;
}

/**
 * Validates username format
 * @param {string} username - Username to validate
 * @returns {object} - Validation result with isValid boolean and errors array
 */
function validateUsername(username) {
    const result = {
        isValid: true,
        errors: []
    };
    
    if (!username || typeof username !== 'string') {
        result.isValid = false;
        result.errors.push('Username is required');
        return result;
    }
    
    const trimmedUsername = username.trim();
    
    if (trimmedUsername.length < 3) {
        result.isValid = false;
        result.errors.push('Username must be at least 3 characters long');
    }
    
    if (trimmedUsername.length > 20) {
        result.isValid = false;
        result.errors.push('Username must be no more than 20 characters long');
    }
    
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(trimmedUsername)) {
        result.isValid = false;
        result.errors.push('Username can only contain letters, numbers, and underscores');
    }
    
    return result;
}

/**
 * Validates password confirmation
 * @param {string} password - Original password
 * @param {string} confirmPassword - Password confirmation
 * @returns {boolean} - True if passwords match, false otherwise
 */
function validatePasswordConfirmation(password, confirmPassword) {
    if (!password || !confirmPassword) {
        return false;
    }
    return password === confirmPassword;
}

/**
 * Validates login form data
 * @param {object} formData - Form data object with email and password
 * @returns {object} - Validation result with isValid boolean and errors object
 */
function validateLoginForm(formData) {
    const result = {
        isValid: true,
        errors: {}
    };
    
    if (!formData || typeof formData !== 'object') {
        result.isValid = false;
        result.errors.general = ['Invalid form data'];
        return result;
    }
    
    // Validate email
    if (!validateEmail(formData.email)) {
        result.isValid = false;
        result.errors.email = ['Please enter a valid email address'];
    }
    
    // Validate password
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
        result.isValid = false;
        result.errors.password = passwordValidation.errors;
    }
    
    return result;
}

/**
 * Validates signup form data
 * @param {object} formData - Form data object with username, email, password, confirmPassword, acceptTerms
 * @returns {object} - Validation result with isValid boolean and errors object
 */
function validateSignupForm(formData) {
    const result = {
        isValid: true,
        errors: {}
    };
    
    if (!formData || typeof formData !== 'object') {
        result.isValid = false;
        result.errors.general = ['Invalid form data'];
        return result;
    }
    
    // Validate username
    const usernameValidation = validateUsername(formData.username);
    if (!usernameValidation.isValid) {
        result.isValid = false;
        result.errors.username = usernameValidation.errors;
    }
    
    // Validate email
    if (!validateEmail(formData.email)) {
        result.isValid = false;
        result.errors.email = ['Please enter a valid email address'];
    }
    
    // Validate password
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
        result.isValid = false;
        result.errors.password = passwordValidation.errors;
    }
    
    // Validate password confirmation
    if (!validatePasswordConfirmation(formData.password, formData.confirmPassword)) {
        result.isValid = false;
        result.errors.confirmPassword = ['Passwords do not match'];
    }
    
    // Validate terms acceptance
    if (!formData.acceptTerms) {
        result.isValid = false;
        result.errors.acceptTerms = ['You must accept the terms and conditions'];
    }
    
    return result;
}

// Export functions for testing (if in Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validatePassword,
        validateUsername,
        validatePasswordConfirmation,
        validateLoginForm,
        validateSignupForm
    };
}