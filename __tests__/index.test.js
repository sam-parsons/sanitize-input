const SanitizerPackage = require('../index.js');
const CreateSanitizerMock = require('../__mocks__/Sanitizer.mock');

// window.Sanitizes mock fn will be available to all tests
CreateSanitizerMock();

test('should return string given string argument', () => {
  const sanitize = SanitizerPackage();
  expect(sanitize('this is a string')).toBe('this is a string');
});

test('should return function given function argument', () => {
  const sanitize = SanitizerPackage();
  expect(
    typeof sanitize(function (e) {
      return 'sanitized';
    })
  ).toBe('function');
});

// mocking a DOM API in jest
