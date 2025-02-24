# Trdeln-k
The Trdelník Calculator is a fun JavaScript script that estimates how many trdelníks (delicious Czech pastries sold all over Prague) you’d eat based on your time in the city and your love for sweets. With a dash of humor, it calculates your "trdelník consumption" and delivers quirky messages about your Prague experience.
**Features**
Takes user inputs: days spent in Prague and sweetness preference.
Calculates a humorous trdelník count with a randomized twist.
Outputs funny messages inspired by Prague’s tourist culture.
Simple and lighthearted—no serious math required!
**Usage**
Run the script in a Node.js environment (requires the prompt-sync package for input).
Answer two questions: how many days you stayed in Prague and how much you like sweets.
Enjoy the silly results printed to the console.
**How It Works**
Inputs: The script prompts for two numbers:
Number of days spent in Prague.
Sweetness preference (1-10).
Calculation: It uses a random base rate (0.5 to 1.5 trdelníks per day) adjusted by your sweet preference to estimate your trdelník count.
Humor: A random funny message from the messages array adds a Prague-themed twist.
Output: Displays your trdelník total and a quirky comment.
**Requirements**
Node.js: For running the script with user input via the console.
prompt-sync: Install with npm install prompt-sync for Node.js input handling. (Alternatively, adapt it for browser use with prompt().)
**Customization**
Add more funny messages to the messages array.
Tweak the baseRate range for higher or lower trdelník counts.
Modify the formula in calculateTrdelniks for different logic.
