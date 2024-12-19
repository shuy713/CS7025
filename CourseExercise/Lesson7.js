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
  
  let shuyinqi = new Person("ShuYinqi", 25);
  shuyinqi.speak(); // Output: Hello, my name is ShuYinqi and I am 25 years old.
  
  
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
  
  class Fish extends Animal {
    move() {
      console.log(`${this.name} is swimming!`);
    }
  }
  
  class Bird extends Animal {
    move() {
      console.log(`${this.name} is flying!`);
    }
  }
  
  let goldfish = new Fish("11");
  goldfish.move(); // Output: 11 is swimming!
  
  let parrot = new Bird("22");
  parrot.move(); // Output: 22 is flying!
  

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
  
  let inchAccount = new BankAccount("Inch", 1000);
  inchAccount.deposit(200); // Output: Inch deposited $200. New balance: $1200
  console.log(inchAccount.getBalance()); // Output: The balance for Inch is $1200
  

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
  