module.exports = function () {
  // check if Sanitizer API exists in window
  if (!('Sanitizer' in window)) {
    return new ReferenceError('Sanitizer API does not exist in this browser');
  }

  /**
   * Object.assign default options with options argument
   * // Options argument to new window.Sanitizer() is not standardized
   */

  // creates one reusable instance
  const sanitizer = new window.Sanitizer();

  return function (arg, options) {
    // if arg is string, then return sanitized string
    if (typeof arg === 'string') {
      return sanitizer.sanitizeToString(arg);
    }
    // if arg is function, return event handler function with e.target.sanitizedValue
    else if (typeof arg === 'function') {
      const callback = arg;
      const sanitizer = new window.Sanitizer();
      return function (e) {
        e.target.sanitizedValue = san.sanitizeToString(e.target.value);
        callback(e);
      };
    }

    // catch invalid arg type
    return new Error('Unrecognized input data type, use a string or function.');
  };
  // function overload
};
