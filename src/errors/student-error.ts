export function cannotFindStudents(message:string): Error {
    const error = new Error(message);
    error.name = "CannotFindStudentsError";
    return error;
  }