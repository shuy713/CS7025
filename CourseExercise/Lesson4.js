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
const link = document.createElement("a");
link.href = "#";
link.textContent = "Hover and Click Me!";
link.style.color = "black";
document.body.appendChild(link);

link.addEventListener("mouseover", () => {
    link.style.color = "blue";
});
link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    link.style.color = "red";
});
link.addEventListener("mouseleave", () => {
    link.style.color = "black";
});


// Exercise 5: DOM Manipulation 

document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = "DOM Loaded Successfully!";
    document.body.appendChild(paragraph);
});
