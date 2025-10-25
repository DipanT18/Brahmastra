/**
 * Test runner for Brahmastra authentication system
 * Runs both unit tests and integration tests
 */

console.log('🧪 Running Brahmastra Authentication Tests\n');

console.log('📋 Running Unit Tests...');
console.log('=' .repeat(50));

try {
    require('./validation.test.js');
} catch (error) {
    console.error('❌ Unit tests failed:', error.message);
    process.exit(1);
}

console.log('\n📋 Running Integration Tests...');
console.log('=' .repeat(50));

try {
    require('./integration.test.js');
} catch (error) {
    console.error('❌ Integration tests failed:', error.message);
    process.exit(1);
}

console.log('\n🎉 All tests completed successfully!');
console.log('\n📊 Test Summary:');
console.log('✅ Unit Tests: Email validation, Password validation, Username validation, Form validation');
console.log('✅ Integration Tests: Complete user workflows, Error handling scenarios');
console.log('\n✨ Form validation system is ready for production use!');