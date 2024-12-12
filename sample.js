// Example of a vulnerable JavaScript code handling user profile data

// Simulating a request to get user data based on user ID
function getUserData(userId) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://example.com/api/user/${userId}`, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const userData = JSON.parse(xhr.responseText);
            console.log(userData);
        } else {
            console.log('Error fetching user data');
        }
    };
    xhr.send();
}

// Simulate getting data for the logged-in user
const loggedInUserId = 123; // The logged-in user ID (This value should be retrieved securely from the session)
getUserData(loggedInUserId);

// If an attacker guesses another user's ID, they can retrieve data from that user
const maliciousUserId = 124; // Attacker manipulates this ID (e.g., via URL or directly in JavaScript code)
getUserData(maliciousUserId); // Accesses another user's data without authorization
