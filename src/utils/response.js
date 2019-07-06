function response(data, message, success = false) {
  return {
    data: data || [],
    message: message || '',
    success,
  };
}

module.exports = {
  response,
};
