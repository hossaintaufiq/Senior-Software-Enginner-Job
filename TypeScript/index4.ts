// let myName= "Bob"

// const myName2= "Bob"

type User= {
    username:string , 
    role: 'Guest'| "member"|'Admin'
}

type UserRole= 'Guest'| "member"|'Admin'
let userRole: UserRole = 'Admin'