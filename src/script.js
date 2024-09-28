const files = ["test", "test2", "test3"]
const json = require("./test.json")

function search(input)
{
    for(let i = 0; i < files.length; i++)
    {
        const file = files[i];
        if(json[file]["color"] === input || json[file]["name"] === input)
        {
            console.log(json[file]);
        }
    }
}

search("blue");
search("John")