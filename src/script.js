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

// Loads 3 random listings
function load()
{
    // Has a collection of already used nums
    // Ensures no listing is used again
    const used_nums = [];
    for(let i = 0; i < 3; i++)
    {
        // Generates random number and checks if it's already used
        const num = Math.floor(Math.random() * (files.length));

        if(used_nums.includes(num))
        {
            // Causes the for-loop to go back and breaks the flow
            i--;
            continue;
        }

        used_nums.push(num);
        // Gets file with the randomly generated number
        const file = files[num];

        console.log(json[file]);
    }
}
// Prints results
console.log("Search Test: ")
search("green");
search("John")

console.log("\nLoad Test: ")
load();