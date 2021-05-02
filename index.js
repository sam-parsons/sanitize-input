module.exports = function (arg1, options) {
  // check if Sanitizer API exists in window
  // if arg1 is string, then return sanitized string
  if (typeof arg1 === 'string') {
    const san = new window.Sanitizer();
    return san.sanitizeToString(arg1);
  }
  // if arg1 is function, return event handler function with e.target.sanitizedValue
};

// function overload
