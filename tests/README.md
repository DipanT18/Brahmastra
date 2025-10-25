# Brahmastra Authentication Tests

This directory contains comprehensive tests for the Brahmastra authentication system's form validation functionality.

## Test Structure

### Unit Tests (`validation.test.js`)
Tests individual validation functions in isolation:
- **Email validation**: Format checking, edge cases
- **Password validation**: Length requirements, strength checking  
- **Username validation**: Character restrictions, length limits
- **Password confirmation**: Matching validation
- **Form validation**: Complete form data validation for login and signup

### Integration Tests (`integration.test.js`)
Tests complete user workflows and interactions:
- **Complete signup flow**: End-to-end user registration process
- **Complete login flow**: End-to-end user authentication process
- **Error handling scenarios**: Form reset, navigation, partial completion
- **Cross-form workflows**: Navigation between login and signup forms

## Running Tests

### Run All Tests
```bash
node tests/run-tests.js
```

### Run Individual Test Suites
```bash
# Unit tests only
node tests/validation.test.js

# Integration tests only  
node tests/integration.test.js
```

## Test Coverage

The tests cover the following requirements:
- **Requirement 1.3**: Email format validation
- **Requirement 1.5**: Password confirmation validation
- **Requirement 2.4**: Form validation and error handling
- **Requirement 1.2**: Complete signup workflow
- **Requirement 2.2**: Complete login workflow

## Test Framework

Uses a simple custom test framework with:
- `test()` function for test cases
- `assertEqual()` for basic assertions
- `assertDeepEqual()` for object comparison
- Console output with ✓/✗ indicators

## Validation Functions Tested

All validation functions from `js/validation.js`:
- `validateEmail(email)`
- `validatePassword(password)`
- `validateUsername(username)`
- `validatePasswordConfirmation(password, confirmPassword)`
- `validateLoginForm(formData)`
- `validateSignupForm(formData)`

## Test Results

When all tests pass, you should see:
- 22 unit tests passing
- 12 integration tests passing
- Complete coverage of core validation functionality
- Comprehensive error handling verification