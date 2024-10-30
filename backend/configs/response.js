/*
@@ Usage for response object
  resObject(
    <data or data object>, 
    <true or false for success status>,
    <message>
  );
*/

const resObject = (data, success, message) => ({
  success: success,
  message: message || '',
  response: success ? data : {
    error: {
      message: message,
      ...data
    }
  },
  dev: 'CodeBuddy Solutions',
  devFb: '',
});

module.exports = resObject