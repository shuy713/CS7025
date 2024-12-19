// Client-Side Data Storage Practice
// Create a simple cookie with an expiry date
document.cookie = "username=ShuYinqi; expires=Fri, 31 Dec 2024; path=/";

console.log("Cookies:", document.cookie); // Output: username=ShuYinqi


// Session Storage
sessionStorage.setItem("sessionKey", "This is session data");

let sessionData = sessionStorage.getItem("sessionKey");
console.log("Session Storage Data:", sessionData); // Output: This is session data

sessionStorage.removeItem("sessionKey");


// Local Storage
localStorage.setItem("name", "ShuYinqi");

let name = localStorage.getItem("name");

console.log("Local Storage - Name:", name); // Output: ShuYinqi

let person = { name: "Inch", age: 25, hobbies: ["reading", "gaming"] };

localStorage.setItem("person", JSON.stringify(person));

let retrievedPerson = JSON.parse(localStorage.getItem("person"));
console.log("Local Storage - Person:", retrievedPerson);// Output: { name: "Inch", age: 25, hobbies: ["reading", "gaming"] }

localStorage.setItem("theme", "dark");
localStorage.setItem("language", "en");

// Retrieve a key by index
let firstKey = localStorage.key(0);
console.log("First key in localStorage:", firstKey); // Output: "name" (or other depending on browser order)

localStorage.removeItem("theme");

