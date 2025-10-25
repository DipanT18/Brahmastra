/**
 * Integration tests for user workflows
 * Requirements: 1.2, 2.2
 * 
 * These tests simulate complete user workflows including:
 * - Complete signup flow
 * - Complete login flow  
 * - Error handling scenarios
 */

// Import validation functions
const {
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

// Mock form submission handler
function simulateFormSubmission(formData, validationFn) {
    const validation = validationFn(formData);
    
    if (validation.isValid) {
        return {
            success: true,
            message: 'Form submitted successfully',
            data: formData
        };
    } else {
        return {
            success: false,
            message: 'Form validation failed',
            errors: validation.errors
        };
    }
}

// Mock user interaction simulator
class UserWorkflowSimulator {
    constructor() {
        this.currentPage = null;
        this.formData = {};
        this.errors = {};
    }
    
    navigateToLogin() {
        this.currentPage = 'login';
        this.formData = {};
        this.errors = {};
        return this;
    }
    
    navigateToSignup() {
        this.currentPage = 'signup';
        this.formData = {};
        this.errors = {};
        return this;
    }
    
    fillField(fieldName, value) {
        this.formData[fieldName] = value;
        return this;
    }
    
    submitForm() {
        if (this.currentPage === 'login') {
            return simulateFormSubmission(this.formData, validateLoginForm);
        } else if (this.currentPage === 'signup') {
            return simulateFormSubmission(this.formData, validateSignupForm);
        }
        throw new Error('No valid page selected');
    }
    
    clearForm() {
        this.formData = {};
        this.errors = {};
        return this;
    }
}

// Integration Tests
console.log('\n=== Complete Signup Flow Tests ===');

test('Complete signup flow: successful registration with valid data', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Navigate to signup page
    simulator.navigateToSignup();
    
    // Fill out form with valid data
    simulator
        .fillField('username', 'newuser123')
        .fillField('email', 'newuser@example.com')
        .fillField('password', 'securepassword123')
        .fillField('confirmPassword', 'securepassword123')
        .fillField('acceptTerms', true);
    
    // Submit form
    const result = simulator.submitForm();
    
    // Verify successful submission
    assertEqual(result.success, true);
    assertEqual(result.message, 'Form submitted successfully');
    assertEqual(result.data.username, 'newuser123');
    assertEqual(result.data.email, 'newuser@example.com');
});

test('Complete signup flow: step-by-step field validation', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Navigate to signup page
    simulator.navigateToSignup();
    
    // Test progressive form filling
    // Step 1: Fill username
    simulator.fillField('username', 'testuser');
    
    // Step 2: Fill email
    simulator.fillField('email', 'test@example.com');
    
    // Step 3: Fill password
    simulator.fillField('password', 'password123');
    
    // Step 4: Fill confirm password
    simulator.fillField('confirmPassword', 'password123');
    
    // Step 5: Accept terms
    simulator.fillField('acceptTerms', true);
    
    // Submit complete form
    const result = simulator.submitForm();
    assertEqual(result.success, true);
});

test('Complete signup flow: validation errors prevent submission', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Navigate to signup page
    simulator.navigateToSignup();
    
    // Fill form with invalid data
    simulator
        .fillField('username', 'ab') // too short
        .fillField('email', 'invalid-email') // invalid format
        .fillField('password', 'short') // too short
        .fillField('confirmPassword', 'different') // doesn't match
        .fillField('acceptTerms', false); // not accepted
    
    // Submit form
    const result = simulator.submitForm();
    
    // Verify submission failed
    assertEqual(result.success, false);
    assertEqual(result.message, 'Form validation failed');
    
    // Verify all expected errors are present
    assertEqual(typeof result.errors.username, 'object');
    assertEqual(typeof result.errors.email, 'object');
    assertEqual(typeof result.errors.password, 'object');
    assertEqual(typeof result.errors.confirmPassword, 'object');
    assertEqual(typeof result.errors.acceptTerms, 'object');
});

console.log('\n=== Complete Login Flow Tests ===');

test('Complete login flow: successful login with valid credentials', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Navigate to login page
    simulator.navigateToLogin();
    
    // Fill login form with valid data
    simulator
        .fillField('email', 'user@example.com')
        .fillField('password', 'validpassword123')
        .fillField('rememberMe', true);
    
    // Submit form
    const result = simulator.submitForm();
    
    // Verify successful login
    assertEqual(result.success, true);
    assertEqual(result.message, 'Form submitted successfully');
    assertEqual(result.data.email, 'user@example.com');
});

test('Complete login flow: validation prevents login with invalid data', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Navigate to login page
    simulator.navigateToLogin();
    
    // Fill form with invalid data
    simulator
        .fillField('email', 'invalid-email')
        .fillField('password', 'short');
    
    // Submit form
    const result = simulator.submitForm();
    
    // Verify login failed
    assertEqual(result.success, false);
    assertEqual(result.message, 'Form validation failed');
    assertEqual(typeof result.errors.email, 'object');
    assertEqual(typeof result.errors.password, 'object');
});

test('Complete login flow: empty form submission', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Navigate to login page and submit empty form
    simulator.navigateToLogin();
    const result = simulator.submitForm();
    
    // Verify submission failed
    assertEqual(result.success, false);
    assertEqual(result.message, 'Form validation failed');
});

console.log('\n=== Error Handling Scenario Tests ===');

test('Error handling: form reset after validation errors', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Navigate to signup and fill invalid data
    simulator.navigateToSignup()
        .fillField('username', 'ab')
        .fillField('email', 'invalid');
    
    // Submit and get errors
    let result = simulator.submitForm();
    assertEqual(result.success, false);
    
    // Clear form and try again with valid data
    simulator.clearForm()
        .fillField('username', 'validuser123')
        .fillField('email', 'valid@example.com')
        .fillField('password', 'validpassword123')
        .fillField('confirmPassword', 'validpassword123')
        .fillField('acceptTerms', true);
    
    // Submit again
    result = simulator.submitForm();
    assertEqual(result.success, true);
});

test('Error handling: navigation between forms preserves no state', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Fill signup form
    simulator.navigateToSignup()
        .fillField('username', 'testuser')
        .fillField('email', 'test@example.com');
    
    // Navigate to login (should clear previous data)
    simulator.navigateToLogin();
    
    // Verify form is empty
    assertDeepEqual(simulator.formData, {});
    assertDeepEqual(simulator.errors, {});
});

test('Error handling: partial form completion scenarios', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Test signup with only some fields filled
    simulator.navigateToSignup()
        .fillField('username', 'testuser')
        .fillField('email', 'test@example.com');
    // Missing password, confirmPassword, acceptTerms
    
    const result = simulator.submitForm();
    assertEqual(result.success, false);
    
    // Verify specific missing field errors
    assertEqual(typeof result.errors.password, 'object');
    assertEqual(typeof result.errors.confirmPassword, 'object');
    assertEqual(typeof result.errors.acceptTerms, 'object');
});

test('Error handling: edge case inputs', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Test with edge case inputs
    simulator.navigateToSignup()
        .fillField('username', '   ') // whitespace only
        .fillField('email', '') // empty string
        .fillField('password', null) // null value
        .fillField('confirmPassword', undefined) // undefined value
        .fillField('acceptTerms', 0); // falsy but not boolean false
    
    const result = simulator.submitForm();
    assertEqual(result.success, false);
});

console.log('\n=== Cross-Form Workflow Tests ===');

test('Cross-form workflow: signup to login navigation simulation', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Complete successful signup
    simulator.navigateToSignup()
        .fillField('username', 'newuser123')
        .fillField('email', 'newuser@example.com')
        .fillField('password', 'securepassword123')
        .fillField('confirmPassword', 'securepassword123')
        .fillField('acceptTerms', true);
    
    const signupResult = simulator.submitForm();
    assertEqual(signupResult.success, true);
    
    // Navigate to login with same credentials
    simulator.navigateToLogin()
        .fillField('email', 'newuser@example.com')
        .fillField('password', 'securepassword123');
    
    const loginResult = simulator.submitForm();
    assertEqual(loginResult.success, true);
});

test('Cross-form workflow: login failure redirects to signup', () => {
    const simulator = new UserWorkflowSimulator();
    
    // Attempt login with non-existent user
    simulator.navigateToLogin()
        .fillField('email', 'nonexistent@example.com')
        .fillField('password', 'somepassword123');
    
    const loginResult = simulator.submitForm();
    assertEqual(loginResult.success, true); // Validation passes, but user doesn't exist
    
    // Simulate redirect to signup for new user
    simulator.navigateToSignup()
        .fillField('username', 'newuser456')
        .fillField('email', 'nonexistent@example.com')
        .fillField('password', 'somepassword123')
        .fillField('confirmPassword', 'somepassword123')
        .fillField('acceptTerms', true);
    
    const signupResult = simulator.submitForm();
    assertEqual(signupResult.success, true);
});

console.log('\n=== All Integration Tests Complete ===');