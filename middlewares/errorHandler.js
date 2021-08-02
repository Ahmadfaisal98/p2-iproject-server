function errorHandler(err, req, res, next) {
  let code = err.statusCode || 500;
  let message = "something went wrong";

  if (code === 400) {
    message = err.message;
  } else if (code === 401) {
    message = err.message;
  } else if (code === 403) {
    message = "Forbidden to access";
  } else if (code === 404) {
    message = "Not Found";
  } else if (code === 500) {
    message = "Internal Server Error";
  }

  res.status(code).json({ message });
}

module.exports = errorHandler;
