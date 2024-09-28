const files = ["test", "test2", "test3"]
const json = require("./test.json")

for (let i = 0; i < files.length; i++)
{
    const file = files[i];
    console.log(json[file]["color"]);
    console.log(json[file]["name"]);
}