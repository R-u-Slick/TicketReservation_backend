const formatResponse = (data = null, err = null, msg = null) => ({
  data,
  err,
  msg,
});

module.exports = formatResponse;
