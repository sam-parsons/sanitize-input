module.exports = function (arg1, options) {
  // check if Sanitizer API exists in window
  if (!('Sanitizer' in window)) {
    return new ReferenceError('Sanitizer API does not exist in this browser');
  }
  // if arg1 is string, then return sanitized string
  if (typeof arg1 === 'string') {
    const san = new window.Sanitizer();
    return san.sanitizeToString(arg1);
  }
  // if arg1 is function, return event handler function with e.target.sanitizedValue
  else if (typeof arg1 === 'function') {
    const callback = arg1;
    const san = new window.Sanitizer();
    return function (e) {
      e.target.sanitizedValue = san.sanitizeToString(e.target.value);
      callback(e);
    };
  }
  return new Error('Unrecognized input data type, use a string or function.');
};

// function overload
