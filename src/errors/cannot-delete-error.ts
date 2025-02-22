export function cannotDelete(message:string): Error {
    const error = new Error(message);
    error.name = "CannotDelete";
    return error;
  }