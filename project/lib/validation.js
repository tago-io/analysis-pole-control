module.exports = function validation(validation_var, device) {
  return function _(message, type) {
    if (!message || !type) throw 'Missing message or type';
    device.insert({
      variable: validation_var,
      value: message,
      metadata: {
        type,
      },
    });

    return message;
  };
}