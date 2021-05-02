const Sanitizer = require('../index.js');
const SanitizerMock = require('../__mocks__/Sanitizer.mock');

test('should return string given string argument', () => {
  Object.defineProperty(window, 'Sanitizer', {
    writable: true,
    value: SanitizerMock,
  });

  expect(Sanitizer('this is a string')).toBe('this is a string');
});

// how to mock a DOM API in jest?
