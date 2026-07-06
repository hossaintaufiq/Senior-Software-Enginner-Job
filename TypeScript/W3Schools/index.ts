let isActive: boolean = true
let hasPermission = false 
// symbbol 
const uniquekey: symbol = Symbol('description')

const obj = {
    [uniquekey]:'This is a unique key'
}
console.log(obj[uniquekey])

// Explicit type annotation 

let greeting: string = "Hello , typescript!"
const Usercount: number = 42 

let scroes: number[]= [100,94,98]

console.log(scroes)

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

console.log(outTuple)