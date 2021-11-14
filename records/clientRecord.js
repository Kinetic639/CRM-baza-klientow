const { ValidationError } = require("../utils/errors");

class ClientRecord {
  constructor(obj) {
    const { name, id, email, notes, nextContactAt } = obj;

    if (!id || typeof name !== "string") {
      throw new ValidationError("ID musi być nie pustym textem!");
    }

    if (!email || typeof email !== "string" || email.indexOf("@") === -1) {
      throw new ValidationError("Podany email jest nieprawidłowy.");
    }

    if (typeof nextContactAt !== "string") {
      throw new ValidationError("Data musi być tekstem");
    }

    if (typeof notes !== "string") {
      throw new ValidationError("Notatki muszą być tekstem");
    }

    if (!name || name.length < 3) {
      throw new ValidationError(
        "Imię musi być tekstem o długości min. 3 znaków"
      );
    }
    this.name = name;
    this.email = email;
    this.nextContactAt = nextContactAt;
    this.id = id;
    this.notes = notes;
  }
}

module.exports = {
  ClientRecord,
};
