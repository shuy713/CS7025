// Exercise 1: Semicolon Practices 
function greetUser() {
    console.log("Hello, World"); 
}
greetUser();


// Exercise 2: Scope
let students = 31;
function countAbsentStudents() {
    let absent = 4;
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

button.style.padding = "10px";
button.style.fontSize = "16px";

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
    e.preventDefault(); 
    link.style.color = "red";
});
link.addEventListener("mouseleave", () => {
    link.style.color = "black";
});


// Exercise 5: DOM Creation 
document.addEventListener("DOMContentLoaded", () => {
    const div = document.createElement("div");
    div.textContent = "This is a dynamically created div!";
    div.style.color = "blue"; 
    document.body.appendChild(div); 
});
