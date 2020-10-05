export class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AppError';
  }
}
export class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
  }
}
export class AuthorisationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthorisationError';
  }
}
export class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ServerError';
  }
}
