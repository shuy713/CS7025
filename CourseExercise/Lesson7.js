// Object-Oriented Programming Practice

// Abstraction
// Create a blueprint (class) for a Person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    speak() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create an instance of the Person class
  let alice = new Person("Alice", 25);
  alice.speak(); // Output: Hello, my name is Alice and I am 25 years old.
  
  // Inheritance
  // Create a base class Animal
  class Animal {
    constructor(name) {
      this.name = name;
    }
    move() {
      console.log(`${this.name} is moving!`);
    }
  }
  
  // Extend Animal class with Fish
  class Fish extends Animal {
    move() {
      console.log(`${this.name} is swimming!`);
    }
  }
  
  // Extend Animal class with Bird
  class Bird extends Animal {
    move() {
      console.log(`${this.name} is flying!`);
    }
  }
  
  // Test inheritance
  let goldfish = new Fish("Goldfish");
  goldfish.move(); // Output: Goldfish is swimming!
  
  let parrot = new Bird("Parrot");
  parrot.move(); // Output: Parrot is flying!
  
  // Encapsulation
  class BankAccount {
    #balance; // Private member
    constructor(owner, initialBalance) {
      this.owner = owner;
      this.#balance = initialBalance;
    }
    deposit(amount) {
      this.#balance += amount;
      console.log(`${this.owner} deposited $${amount}. New balance: $${this.#balance}`);
    }
    getBalance() {
      return `The balance for ${this.owner} is $${this.#balance}`;
    }
  }
  
  // Test encapsulation
  let johnAccount = new BankAccount("John", 500);
  johnAccount.deposit(200); // Output: John deposited $200. New balance: $700
  console.log(johnAccount.getBalance()); // Output: The balance for John is $700
  // console.log(johnAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class
  
  // Polymorphism
  class Shape {
    area() {
      console.log("Calculating area...");
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
    area() {
      console.log(`The area of the rectangle is ${this.width * this.height}.`);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    area() {
      console.log(`The area of the circle is ${Math.PI * this.radius ** 2}.`);
    }
  }
  
  // Test polymorphism
  let rect = new Rectangle(5, 10);
  rect.area(); // Output: The area of the rectangle is 50.
  
  let circ = new Circle(7);
  circ.area(); // Output: The area of the circle is 153.93804002589985.
  