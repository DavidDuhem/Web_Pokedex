export async function errorHandler(
  fn,
  errorMessage = "Unexpected Error",
  fallback = () => null
) {
  try {
    return await fn();
  } catch (err) {
    console.log(errorMessage + " : " + err.message);
    return fallback(err);
  }
}
