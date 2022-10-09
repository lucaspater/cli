const fs = require("fs");

const readFilePromise = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/users.json", "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

const writeFilePromise = (users) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./data/users.json", JSON.stringify(users), (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("Ok");
    });
  });
};

module.exports = { readFilePromise, writeFilePromise };
