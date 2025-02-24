// Trdelník Calculator Script

// For Node.js: install prompt-sync with `npm install prompt-sync`
const prompt = require('prompt-sync')();

// Funny messages to spice up the results
const messages = [
  "You’re now officially a trdelník connoisseur—Prague approves!",
  "That’s enough cinnamon to smell like a Prague street vendor ’til next year!",
  "Careful, the pigeons on Charles Bridge might steal your stash!",
  "You’ve eaten so many, locals think you’re opening a trdelník stand!",
  "Jan Hus would be proud of your dedication to Czech treats!"
];

// Function to calculate trdelníks
function calculateTrdelniks(days, sweetLevel) {
  // Base rate: 0.5 to 1.5 trdelníks per day, scaled by sweet preference (1-10)
  const baseRate = (Math.random() * 1) + 0.5; // Random factor between 0.5 and 1.5
  const trdelnikCount = Math.round(days * baseRate * (sweetLevel / 5));
  
  // Pick a random funny message
  const message = messages[Math.floor(Math.random() * messages.length)];
  
  return { trdelnikCount, message };
}

// Get user input
const daysInPrague = parseInt(prompt("How many days did you spend in Prague? "));
const sweetPreference = parseInt(prompt("How much do you like sweets (1-10)? "));

// Validate input
if (isNaN(daysInPrague) || isNaN(sweetPreference) || daysInPrague < 0 || sweetPreference < 1 || sweetPreference > 10) {
  console.log("Please enter valid numbers! Days >= 0, Sweetness 1-10.");
} else {
  // Calculate and display result
  const result = calculateTrdelniks(daysInPrague, sweetPreference);
  console.log(`\nYou’d eat ${result.trdelnikCount} trdelníks in Prague!`);
  console.log(result.message);
}

// Example run:
// How many days did you spend in Prague? 5
// How much do you like sweets (1-10)? 8
// You’d eat 8 trdelníks in Prague!
// Careful, the pigeons on Charles Bridge might steal your stash!
