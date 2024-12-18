// Exercise 1: Semicolon Practices 
function greetUser() {
    console.log("Hello, World"); // Always end with semicolon
}
greetUser();


// Exercise 2: Scope
let students = 31;
function countAbsentStudents() {
    let absent = 3; // Fix: 'absent' declared properly within function scope
    students -= absent;
    console.log("Students left in class:", students);
}
countAbsentStudents();


// Exercise 3: Events
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// Exercise 4: State Management 