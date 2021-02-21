const inquirer = require("inquirer");
require("colors");

let options = [
  "Crear Tarea",
  "Listar tareas",
  "Listar tareas completadas",
  "Listar tareas pendientes",
  "Completar tarea(s)",
  "Borrar tarea(s)",
  "Salir",
];

options = options.map((option, i) =>
  option != "Salir"
    ? {
        value: i + 1,
        name: `${(i + 1).toString().yellow}. ${option} `,
      }
    : {
        value: 0,
        name: `${(0).toString().yellow}. ${option} `,
      }
);

const questions = [
  {
    type: "list",
    name: "option",
    message: "¿Qué desea hacer?",
    choices: options,
  },
];

const inquirerMenu = async () => {
  console.clear();

  console.log("========================================".yellow);
  console.log("        Selecciona una Opción           ".red.bold);
  console.log("========================================".yellow);

  const opt = await inquirer.prompt(questions);

  return opt;
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate: (value) =>
        value.length === 0 ? "Porfavor ingresa un valor" : true,
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => ({
    value: tarea.id,
    name: `${i + 1}. ${tarea.description}`,
  }));

  choices.push({
    value: 0,
    name: "0. Cancelar".yellow,
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);

  return id;
};

const mostrarListaCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => ({
    value: tarea.id,
    name: `${i + 1}. ${tarea.description}`,
    checked: tarea.complete,
  }));

  const questions = [
    {
      type: "checkbox",
      name: "ids",
      message: "Selecciones",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(questions);

  return ids;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

module.exports = {
  inquirerMenu,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListaCheckList,
};
