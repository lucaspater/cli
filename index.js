const prompts = require("prompts");
const files = require("./files");

const run = async () => {
  const commandSelected = await prompts({
    type: "select",
    name: "value",
    message: "Commands",
    choices: [
      {
        title: "Crear usuario",
        description: "Create new user profile",
        value: "create",
      },
      {
        title: "Listar usuarios",
        description: "List all users",
        value: "list",
      },
      { title: "Cerrar", description: "Close", value: "close" },
    ],
    initial: 0,
  });

  if (commandSelected.value == "create") {
    const userData = await prompts([
      {
        type: "text",
        name: "name",
        message: "Nombre de usuario: ",
      },
      { type: "text", name: "concepto", message: "Concepto del gasto" },
      { type: "number", name: "importe", message: "Importe del gasto" },
    ]);

    try {
      const users = await files.readFilePromise();
      users.push(userData);
      await files.writeFilePromise(users);
      return;
    } catch (error) {
      throw error;
    }
  }
  if (commandSelected.value == "list") {
    const users = await files.readFilePromise();
    console.log(users);
    return;
  }
  if (commandSelected.value == "close") {
    return;
  }
};
run();
