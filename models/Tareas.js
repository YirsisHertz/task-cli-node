const Tarea = require("./Tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

  cargarTareasFromArray(tareas = []) {
    tareas.map((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    const arr = this.listadoArr;

    arr.map((tarea, i) => {
      console.log(
        `${(i + 1).toString().yellow}.- ${tarea.description} :: ${
          tarea.complete ? "Completado".green : "Pendiente".red
        }`
      );
    });
  }

  listarPendientesCompletadas(completados = true) {
    let contador = 1;
    this.listadoArr.forEach((tarea) => {
      const { description, complete } = tarea;
      if (completados) {
        if (complete) {
          console.log(
            `${contador}.- ${description} :: ${
              tarea.complete ? "Completado".green : "Pendiente".red
            }`
          );
          contador++;
        }
      } else {
        if (!complete) {
          console.log(
            `${contador}.- ${description} :: ${
              tarea.complete ? "Completado".green : "Pendiente".red
            }`
          );
          contador++;
        }
      }
    });
  }

  borrarTarea(id = "") {
    this._listado[id] && delete this._listado[id];
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.complete) {
        tarea.complete = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].complete = null;
      }
    });
  }
}

module.exports = Tareas;
