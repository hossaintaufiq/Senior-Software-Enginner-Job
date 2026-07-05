// let myName= "Bob"

// const myName2= "Bob"

// type User= {
//     username:string , 
//     role: 'Guest'| "member"|'Admin'
// }

// type UserRole= 'Guest'| "member"|'Admin'
// let userRole: UserRole = 'Admin'



// for importing functions to one page to another 
// import { getPizzaDetail } from "./index.ts";

// console.log(getPizzaDetail(2))

const gameScores = [14,21,33,42,59]

const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"]

const voters = [{ name: "Alice", age: 42}, {name:"bob", age:7}]


// can take anykind of array -> numbers , string , object . that where Generics comes 
function getLastItem<T>(array:T[]):T|undefined{
    return array[array.length-1]
}

console.log(getLastItem(favoriteThings))
console.log(getLastItem(gameScores))
console.log(getLastItem(voters))