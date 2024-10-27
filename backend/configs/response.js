const resObject = (data, success, message) => ({
  success: success,
  message: message || '',
  response: data,
  dev: 'CodeBuddy Solutions',
  devFb: '',
});

module.exports = resObject