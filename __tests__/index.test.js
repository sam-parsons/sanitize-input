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

test('should add a sanitizedValue property to the cloned event object', () => {
  const sanitize = SanitizerPackage();
  const sanitizedFunc = sanitize(function (e) {
    return e;
  });
  const newEvent = new InputEvent('change');
  newEvent.target = { value: 'currentValue' };
  const clonedEvent = sanitizedFunc(newEvent);

  expect(clonedEvent.target).toHaveProperty('sanitizedValue');
});
