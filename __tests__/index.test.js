const SanitizerPackage = require('../index.js');
const CreateSanitizerMock = require('../__mocks__/Sanitizer.mock');

// window.Sanitizes mock fn will be available to all tests
CreateSanitizerMock();

test('should return string given string argument', () => {
  expect(SanitizerPackage('this is a string')).toBe('this is a string');
});

test('should return function given function argument', () => {
  expect(
    typeof SanitizerPackage(function (e) {
      return 'sanitized';
    })
  ).toBe('function');
});

// mocking a DOM API in jest
