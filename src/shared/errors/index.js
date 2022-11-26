class AppError {
  constructor(message, statusCode = 422) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
