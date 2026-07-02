// TypeScript basics overview
// TypeScript is a statically typed superset of JavaScript.
// It adds optional type annotations, interfaces, classes, and compile-time checks.

// Variable types
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

// Arrays and tuples
let names: string[] = ["Alice", "Bob", "Charlie"];
let userInfo: [string, number] = ["Alice", 30];

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Function with typed parameters and return type
function greet(name: string): string {
  return `Welcome, ${name}!`;
}

// Interface for object shape
interface User {
  id: number;
  username: string;
  email?: string; // optional property
}

const user: User = {
  id: 1,
  username: "devUser",
};

console.log(message);
console.log(greet(user.username));
console.log(Direction.Left);
