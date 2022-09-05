const prompts = require("prompts");
const files = require("./files");

/*
const questions = [
  {
    type: "text",
    name: "username",
    message: "Ingresa tu usuario",
  },
  {
    type: "text",
    name: "concepto",
    message: "ingresa el concepto del gasto"
  },
  {
    type: "number",
    name: "importe",
    message: "importe",
  },
];

(async () => {
  const response = await prompts(questions);

  // => response => { username, concepto, importe }
})();
*/
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
      { title: "Listar usuarios", description: "List all users", value: "list" },
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
      { type: "number", name: "importe", message: "Importe del gasto" }
    ]);
    // console.log(userData)
    const users = await files.readFilePromise();
    users.push(userData);
    await files.writeFilePromise(users);
    return;
  }
  if (commandSelected.value == "list") {
    const users = await files.readFilePromise();
    console.log(users);
    return;
  }
};
run();
