const { v4: uuid } = require("uuid");

class Tarea {
  id = "";
  description = "";
  complete = null;

  constructor(description) {
    this.id = uuid();
    this.description = description;
    this.complete = null;
  }
}

module.exports = Tarea;
