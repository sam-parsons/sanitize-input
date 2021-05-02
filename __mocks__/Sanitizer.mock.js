module.exports = jest.fn().mockImplementation(() => ({
  sanitize: function (input) {
    return input;
  },
  sanitizeToString: function (input) {
    return input;
  },
}));
