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
  message: message || "",
  response: success
    ? data
    : {
        error: {
          message: message,
          ...data
        }
      },
  errors: success ? null : { ...data },
  dev: "Juan Tamad",
  devFb: "@thejuantamad05"
});

module.exports = resObject;
