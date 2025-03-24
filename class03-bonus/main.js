import EventEmitter from 'events'; // Import EventEmitter from 'events' module
import chalk from 'chalk'; // Import 'chalk' for changing text color in the terminal

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create a variable for the number, starting at 0
let counter = 0;

// Listener for the 'increase' event (when the number increases)
eventEmitter.on('increase', () => {
    counter++;  // Increase the number
    console.log(`Number increased: ${counter}`);
    
    // Check for the positive event
    if (counter > 0) {
        eventEmitter.emit('positive', counter); // Emit the 'positive' event if the number is positive
    }
});

// Listener for the 'decrease' event (when the number decreases)
eventEmitter.on('decrease', () => {
    counter--;  // Decrease the number
    console.log(`Number decreased: ${counter}`);
    
    // Check for the zero event
    if (counter === 0) {
        eventEmitter.emit('zero', counter); // Emit the 'zero' event if the number reaches 0
    } else if (counter < 0) {
        eventEmitter.emit('negative', counter); // Emit the 'negative' event if the number is negative
    }
});

// Listener for the 'positive' event (when the number becomes positive)
eventEmitter.on('positive', (value) => {
    console.log(chalk.bgGreen(`Number is positive: ${value}`)); // Print in green
});

// Listener for the 'negative' event (when the number becomes negative)
eventEmitter.on('negative', (value) => {
    console.log(chalk.bgRed(`Number is negative: ${value}`)); // Print in red
});

// Listener for the 'zero' event (when the number becomes zero)
eventEmitter.on('zero', () => {
    console.log(chalk.bgYellow('Number is zero')); // Print in yellow
});

// Testing the events
console.log('Testing events:');

// Emit the 'increase' event
eventEmitter.emit('increase');
eventEmitter.emit('increase'); // Increase the number
eventEmitter.emit('decrease'); // Decrease the number
eventEmitter.emit('decrease'); // Decrease the number (number reaches 0)
eventEmitter.emit('decrease'); // Decrease the number (number becomes negative)
