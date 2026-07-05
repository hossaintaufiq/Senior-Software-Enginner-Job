
// object type definition 
type Address= {
    street: number, 
    city: string , 
    country: string
}
type Person={
    name: string , 
    age: number , 
    isStudent: boolean
    // address: {
    //     street:string, 
    //     city: string , 
    //     country: string
    // }
    address:Address, 
}



let person: Person  = {
    name: "taufiq", 
    age: 42, 
    isStudent: true,
    address: {
        street:324,
         city:"Dhaka",
         country:"BD"
        }
}

let person2:Person= {
    name: "joe", 
    age: 66 , 
    isStudent: false, 
    address: {
        street: 343, 
        city: "Chittagong", 
        country: "Bangladesh"
    }
}