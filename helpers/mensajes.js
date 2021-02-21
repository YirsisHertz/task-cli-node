const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(
      `Presione ${"<ENTER>".blue.bold} para continuar...`,
      (opt) => {
        readline.close();
        resolve();
      }
    );
  });
};

module.exports = { pausa };
