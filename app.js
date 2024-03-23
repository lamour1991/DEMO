// I EDITED THIS FILE "Welcome to America" to any IP address

// Function to check if the IP address belongs to America
function isAmericanIP(ip) {
    // Assuming IP addresses starting with "192.168." belong to America
    if (ip.startsWith("192.168.")) {
        return true;
    } else {
        return false;
    }
}

// Function to display welcome message based on IP address
function displayWelcomeMessage(ip) {
    if (isAmericanIP(ip)) {
        console.log("Welcome to America");
    } else {
        console.log("You are not in America");
    }
}

// Example usage:
var ipAddress = "192.168.1.1"; // Replace this with any IP address you want to check
:WW
