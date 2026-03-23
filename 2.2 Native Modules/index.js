const fs = require("fs");
const { open } = require('node:fs/promises');

fs.writeFile("message.txt", "Hello Sudarshan", err => {
    if (err) throw err;
    console.log(
        "File was saved."
    )

});

fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
