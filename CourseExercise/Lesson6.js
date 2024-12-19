// Define a JavaScript object
const STUDENT = {
    id: 12345,
    firstName: "Christiane",
    lastName: "Castillo",
    age: calculateAge(20, 5),
    hobbies: ["reading", "coding", "traveling"],
    greet: function () {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  };
  
  // Function to calculate age
  function calculateAge(a, b) {
    return a + b;
  }
  
  // Accessing object properties in two ways
  console.log("Accessing firstName using STUDENT['firstName']:", STUDENT["firstName"]); // Output: Christiane
  console.log("Accessing firstName using STUDENT.firstName:", STUDENT.firstName); // Output: Christiane