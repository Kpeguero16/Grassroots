const files = ["test", "test2", "test3"]
const json = require("./test.json")

function search(input)
{
    for(let i = 0; i < files.length; i++)
    {
        // Searches for the term with the matching input
        const file = files[i];
        if(json[file]["color"] === input || json[file]["name"] === input)
        {
            // Output area
            console.log(json[file]);
        }
    }
}

search("green");
search("John")