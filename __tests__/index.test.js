const Sanitizer = require('../index.js');

test('should return string given string argument', () => {
  expect(Sanitizer('this is a string')).toBe('this is a string');
});
// how to mock a DOM API in jest?
