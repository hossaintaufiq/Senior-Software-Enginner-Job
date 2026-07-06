let isActive: boolean = true
let hasPermission = false 
// symbbol 
const uniquekey: symbol = Symbol('description')

const obj = {
    [uniquekey]:'This is a unique key'
}
// console.log(obj[uniquekey])

// Explicit type annotation 

let greeting: string = "Hello , typescript!"
const Usercount: number = 42 

let scroes: number[]= [100,94,98]

// console.log(scroes)

// function with explicit types 
function greet(name:string): string {
    return `Hello $(name)`
}

greet('Alice')

// js vs ts 

// js code 
// function add (a,b){
//     return a+b; 
// }

// same code but in ts  

function add2 (a:number, b:number):number{
    return a+b
}

// tuple 

let outTuple : [number, boolean, string]
outTuple= [5, false,'Coding fan is here']

// console.log(outTuple)

// enums 

// enum CardinalDirections {
//     North, 
//     East , 
//     South , 
//     West
// }
// let currentDirection = CardinalDirections.North; 

// console.log(currentDirection)
// currentDirection= 'North'; 

// enum StatusCodes {
//     NotFound=404, 
//     Success= 200 , 
//     Accepted= 202, 
//     BadRequest= 400
// }

// console.log(StatusCodes.Accepted)

// Node.js v24 has experimental TypeScript support, but it only strips type annotations. It does not compile TypeScript features that require JavaScript generation, such as:

// ❌ enum
// ❌ namespace
// ❌ parameter properties
// ❌ decorators (without transpilation)

// interface

interface Rectangle{
    height: number, 
    width:number
}

const rectangle:Rectangle={
    height:20, 
    width:10 
}

// console.log(rectangle)


// visibility modifiers 

class Person{ 
    private name:string; 
    public constructor(name:string){
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
}
const person = new Person('Jane'); 
console.log(person.getName())