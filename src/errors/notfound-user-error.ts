export function notFoundUser(message:string): Error {
    const error = new Error(message);
    error.name = "NotFoundUser";
    return error;
  }
  