// Extracts the hash part of the URL (excluding the leading '#')
const hash = window.location.hash.substring(1);

// Decodes the URI component and parses it as a JSON object
const params = JSON.parse(decodeURIComponent(hash));

// Retrieves the mainToken property from the parsed JSON object
const mainToken = params.mainToken;

// Output the mainToken to the console (for testing purposes)
console.log('Main Token:', mainToken);
