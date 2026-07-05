// let myName :string = "Taufiq"
// console.log(myName) 

// let numberOfWheels :number  = 4 
// let isStudent : boolean= false 

// let ages: number[] = [100,101,22,300]

// // ages.push(true)
// ages.push(288)

// console.log(ages)


type Person={
    name: string , 
    age: number , 
    isStudent: boolean
}
let person: Person  = {
    name: "taufiq", 
    age: 42, 
    isStudent: true,
}

let person2:Person= {
    name: "joe", 
    age: 66 , 
    isStudent: false, 
}

let person3:Person= {
    name: "joe", 
    age: 66 , 
    isStudent: false, 
}

let people:Person[]=[person,person2,person3]
//let people:Array<Person>=[person,person2,person3]      // an alternative to do this same line of code 


console.log(people)