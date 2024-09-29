// Reads and saves JSON data
const json = require("./job-postings.json");

// Creates arrays to store listings and categories
const listings = [];
const categories = [];

var hasLogIn = false;
var loginError = false;

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
function load() {
    // Has a collection of already used nums
    // Ensures no listing is used again
    const used_nums = [];
    for (let i = 0; i < 3; i++) {
        // Generates random number and checks if it's already used
        const num = Math.floor(Math.random() * (listings.length));

        if (used_nums.includes(num)) {
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

function login(form)
{
    event.preventDefault();
    if(form.user.value !== "" && form.password.value !== "")
    {
        window.location.replace("index.html");
    } else {
        window.location.replace("loginfail.html");
    }
}


    fetch('job-postings.json')
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
        // The JSON data is now stored in the `data` variable
        console.log(data); // For debugging
    
        // Pass `data` to parser here
        })
        .catch(error => console.error('Error fetching the JSON file:', error));


function redirectToJobs() {
    window.location.href = "job.html"; // Replace with the relative path to your HTML file
}
function redirectToMain() {
    window.location.href = "index.html"; // Replace with the relative path to your HTML file
}

function throwToError()
{
    window.location.href="loginfail.html";
}