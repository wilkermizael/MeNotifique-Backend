export function duplicatedUserError(): Error {
  const error = new Error("Já existe um usuário com esse nome!");
  error.name = "DuplicatedUserError";
  return error;
}
