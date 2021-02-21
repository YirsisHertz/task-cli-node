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
        name: `${i + 1}. ${option} `,
      }
    : {
        value: 0,
        name: `${0}. ${option} `,
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
  console.log("        Selecciona una Opción".red);
  console.log("========================================".yellow);

  const opt = await inquirer.prompt(questions);

  return opt;
};

module.exports = {
  inquirerMenu,
};
