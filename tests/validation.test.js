/**
 * Unit tests for validation functions
 * Requirements: 1.3, 1.5, 2.4
 */

// Import validation functions (assuming Node.js environment for testing)
const {
    validateEmail,
    validatePassword,
    validateUsername,
    validatePasswordConfirmation,
    validateLoginForm,
    validateSignupForm
} = require('../js/validation.js');

// Simple test framework
function test(description, testFn) {
    try {
        testFn();
        console.log(`✓ ${description}`);
    } catch (error) {
        console.error(`✗ ${description}`);
        console.error(`  ${error.message}`);
    }
}

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
}

function assertDeepEqual(actual, expected, message) {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    if (actualStr !== expectedStr) {
        throw new Error(message || `Expected ${expectedStr}, but got ${actualStr}`);
    }
}

// Email validation tests
console.log('\n=== Email Validation Tests ===');

test('validateEmail: should return true for valid email', () => {
    assertEqual(validateEmail('user@example.com'), true);
    assertEqual(validateEmail('test.email+tag@domain.co.uk'), true);
    assertEqual(validateEmail('user123@test-domain.org'), true);
});

test('validateEmail: should return false for invalid email', () => {
    assertEqual(validateEmail('invalid-email'), false);
    assertEqual(validateEmail('user@'), false);
    assertEqual(validateEmail('@domain.com'), false);
    assertEqual(validateEmail('user@domain'), false);
    assertEqual(validateEmail(''), false);
    assertEqual(validateEmail(null), false);
    assertEqual(validateEmail(undefined), false);
});

// Password validation tests
console.log('\n=== Password Validation Tests ===');

test('validatePassword: should return valid for strong password', () => {
    const result = validatePassword('strongpassword123');
    assertEqual(result.isValid, true);
    assertEqual(result.errors.length, 0);
});

test('validatePassword: should return invalid for short password', () => {
    const result = validatePassword('short');
    assertEqual(result.isValid, false);
    assertEqual(result.errors.includes('Password must be at least 8 characters long'), true);
});

test('validatePassword: should return invalid for empty password', () => {
    const result = validatePassword('');
    assertEqual(result.isValid, false);
    assertEqual(result.errors.includes('Password is required'), true);
});

test('validatePassword: should return invalid for null/undefined password', () => {
    const resultNull = validatePassword(null);
    const resultUndefined = validatePassword(undefined);
    assertEqual(resultNull.isValid, false);
    assertEqual(resultUndefined.isValid, false);
});

// Username validation tests
console.log('\n=== Username Validation Tests ===');

test('validateUsername: should return valid for good username', () => {
    const result = validateUsername('validuser123');
    assertEqual(result.isValid, true);
    assertEqual(result.errors.length, 0);
});

test('validateUsername: should return valid for username with underscores', () => {
    const result = validateUsername('valid_user_123');
    assertEqual(result.isValid, true);
    assertEqual(result.errors.length, 0);
});

test('validateUsername: should return invalid for short username', () => {
    const result = validateUsername('ab');
    assertEqual(result.isValid, false);
    assertEqual(result.errors.includes('Username must be at least 3 characters long'), true);
});

test('validateUsername: should return invalid for long username', () => {
    const result = validateUsername('a'.repeat(21));
    assertEqual(result.isValid, false);
    assertEqual(result.errors.includes('Username must be no more than 20 characters long'), true);
});

test('validateUsername: should return invalid for username with special characters', () => {
    const result = validateUsername('user@name');
    assertEqual(result.isValid, false);
    assertEqual(result.errors.includes('Username can only contain letters, numbers, and underscores'), true);
});

test('validateUsername: should return invalid for empty username', () => {
    const result = validateUsername('');
    assertEqual(result.isValid, false);
    assertEqual(result.errors.includes('Username is required'), true);
});

// Password confirmation tests
console.log('\n=== Password Confirmation Tests ===');

test('validatePasswordConfirmation: should return true for matching passwords', () => {
    assertEqual(validatePasswordConfirmation('password123', 'password123'), true);
});

test('validatePasswordConfirmation: should return false for non-matching passwords', () => {
    assertEqual(validatePasswordConfirmation('password123', 'different123'), false);
});

test('validatePasswordConfirmation: should return false for empty passwords', () => {
    assertEqual(validatePasswordConfirmation('', ''), false);
    assertEqual(validatePasswordConfirmation('password', ''), false);
    assertEqual(validatePasswordConfirmation('', 'password'), false);
});

// Login form validation tests
console.log('\n=== Login Form Validation Tests ===');

test('validateLoginForm: should return valid for correct login data', () => {
    const formData = {
        email: 'user@example.com',
        password: 'validpassword123'
    };
    const result = validateLoginForm(formData);
    assertEqual(result.isValid, true);
    assertDeepEqual(result.errors, {});
});

test('validateLoginForm: should return invalid for incorrect email', () => {
    const formData = {
        email: 'invalid-email',
        password: 'validpassword123'
    };
    const result = validateLoginForm(formData);
    assertEqual(result.isValid, false);
    assertEqual(Array.isArray(result.errors.email), true);
    assertEqual(result.errors.email.includes('Please enter a valid email address'), true);
});

test('validateLoginForm: should return invalid for short password', () => {
    const formData = {
        email: 'user@example.com',
        password: 'short'
    };
    const result = validateLoginForm(formData);
    assertEqual(result.isValid, false);
    assertEqual(Array.isArray(result.errors.password), true);
});

test('validateLoginForm: should return invalid for null form data', () => {
    const result = validateLoginForm(null);
    assertEqual(result.isValid, false);
    assertEqual(Array.isArray(result.errors.general), true);
});

// Signup form validation tests
console.log('\n=== Signup Form Validation Tests ===');

test('validateSignupForm: should return valid for correct signup data', () => {
    const formData = {
        username: 'validuser123',
        email: 'user@example.com',
        password: 'validpassword123',
        confirmPassword: 'validpassword123',
        acceptTerms: true
    };
    const result = validateSignupForm(formData);
    assertEqual(result.isValid, true);
    assertDeepEqual(result.errors, {});
});

test('validateSignupForm: should return invalid for mismatched passwords', () => {
    const formData = {
        username: 'validuser123',
        email: 'user@example.com',
        password: 'validpassword123',
        confirmPassword: 'differentpassword',
        acceptTerms: true
    };
    const result = validateSignupForm(formData);
    assertEqual(result.isValid, false);
    assertEqual(Array.isArray(result.errors.confirmPassword), true);
    assertEqual(result.errors.confirmPassword.includes('Passwords do not match'), true);
});

test('validateSignupForm: should return invalid for not accepting terms', () => {
    const formData = {
        username: 'validuser123',
        email: 'user@example.com',
        password: 'validpassword123',
        confirmPassword: 'validpassword123',
        acceptTerms: false
    };
    const result = validateSignupForm(formData);
    assertEqual(result.isValid, false);
    assertEqual(Array.isArray(result.errors.acceptTerms), true);
    assertEqual(result.errors.acceptTerms.includes('You must accept the terms and conditions'), true);
});

test('validateSignupForm: should return multiple errors for multiple invalid fields', () => {
    const formData = {
        username: 'ab', // too short
        email: 'invalid-email', // invalid format
        password: 'short', // too short
        confirmPassword: 'different', // doesn't match
        acceptTerms: false // not accepted
    };
    const result = validateSignupForm(formData);
    assertEqual(result.isValid, false);
    assertEqual(Array.isArray(result.errors.username), true);
    assertEqual(Array.isArray(result.errors.email), true);
    assertEqual(Array.isArray(result.errors.password), true);
    assertEqual(Array.isArray(result.errors.confirmPassword), true);
    assertEqual(Array.isArray(result.errors.acceptTerms), true);
});

console.log('\n=== All Unit Tests Complete ===');