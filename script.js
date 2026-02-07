// script.js - Interactive JavaScript Functionality

// Function to display current date and time in UTC
function displayCurrentDateTime() {
    const now = new Date();
    const utcDateTime = now.toUTCString();
    console.log(`Current Date and Time (UTC): ${utcDateTime}`);
}

displayCurrentDateTime();

// Add more interactive functions as needed