require("colors");

const { guardarArchivo, leerArchivo } = require("./helpers/guardarArchivos");
const {
  inquirerMenu,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListaCheckList,
} = require("./helpers/inquirer");
const { pausa } = require("./helpers/mensajes");

const Tareas = require("./models/Tareas");

console.clear();

const main = async () => {
  const tareas = new Tareas();
  const tareasDb = leerArchivo();

  if (tareasDb) {
    tareas.cargarTareasFromArray(tareasDb);
  }

  do {
    opt = await inquirerMenu();

    switch (opt.option) {
      case 1:
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
      case 2:
        tareas.listadoCompleto();
        break;
      case 3:
        tareas.listarPendientesCompletadas();
        break;
      case 4:
        tareas.listarPendientesCompletadas(false);
        break;
      case 5:
        const ids = await mostrarListaCheckList(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case 6:
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== 0) {
          const ok = await confirmar("Seguro Que Deseas Borrar?");
          ok && tareas.borrarTarea(id);
        }

        break;
    }

    guardarArchivo(tareas.listadoArr);

    opt.option !== 0 && (await pausa());
  } while (opt.option !== 0);
};

main();
