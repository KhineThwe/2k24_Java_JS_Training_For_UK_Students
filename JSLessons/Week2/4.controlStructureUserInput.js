const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question("Enter your age: ", (input) => {
        const age = parseInt(input); // Parse the input as an integer

        if (age >= 17) { // Check if age is 17 or above
            console.log("Over 18:");
            console.log("Over 18:1");
            console.log("Over 18:2");
            console.log("Over 18:3");
            console.log("Over 18:4");
            console.log("Over 18:5");
            console.log("Over 18:6");
        } else {
            console.log("Under 17:");
            console.log("Under 17:");
            console.log("Under 17:");
            console.log("Under 17:");
            console.log("Under 17:");
        }
        rl.close(); // Close the readline interface
    });
}

// Call the main function
main();
