const urlParams = new URLSearchParams(window.location.search);
const userInput = urlParams.get('name');

// Injecting user input directly into the DOM
document.getElementById('welcomeMessage').innerHTML = `Welcome, ${userInput}!`;
