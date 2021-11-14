class ValidationError extends Error {}

class NotFoundError extends Error {}

function handleError(err, req, res, next) {
  if (err instanceof NotFoundError) {
    res.status(404).render("errors", {
      message: "Nie można znaleźć elementu o podanym id.",
    });
    return;
  }
  console.error(err);
  res.status(err instanceof ValidationError ? 400 : 500);

  res.render("errors", {
    message:
      err instanceof ValidationError
        ? err.message
        : "Przepraszamy, spróbuj ponownie za jakiś czas...",
  });
}

module.exports = {
  handleError,
  ValidationError,
  NotFoundError,
};
