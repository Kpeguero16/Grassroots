// Reads and saves JSON data
const json = require("./job-postings.json");

// Creates arrays to store listings and categories
const listings = [];
const categories = [];

// Populates arrays
for(let i = 0; i < 3; i++)
{
    category = json[i];
    categories.push(category["category"]);
    listings_available = category["jobs"];

    for(let j = 0; j < listings_available.length; j++)
    {
        listings.push(listings_available[j]);
    }
}

console.log(categories);

// Prints all listings that has input in it.
function search(input)
{
    for(let i = 0; i < listings.length; i++)
    {
        // Searches for the term with the matching input
        const listing = listings[i];
        if(listing["title"] === input || listing["poster"] === input || listing["description"].includes(input) ||
                listing["city"] === input || listing["pay"].includes(input))
        {
            // Output area
            console.log(listing);
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
        const num = Math.floor(Math.random() * (listings.length));

        if(used_nums.includes(num))
        {
            // Causes the for-loop to go back and breaks the flow
            i--;
            continue;
        }

        used_nums.push(num);
        // Gets file with the randomly generated number
        const listing = listings[num];

        // Output Area
        console.log(listing);
    }
}
// Prints results
console.log("Search Test: ")
search("Pet Care");
search("someone")

console.log("\nLoad Test: ")
load();