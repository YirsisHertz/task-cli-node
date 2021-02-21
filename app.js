require("colors");

const { inquirerMenu } = require("./helpers/inquirer");
const Tarea = require("./models/Tarea");

console.clear();

const main = async () => {
  do {
    // opt = await inquirerMenu();
    const tarea = new Tarea("Tarea de prueba");
    console.log(tarea);
  } while (opt.option !== 0);
};

main();
