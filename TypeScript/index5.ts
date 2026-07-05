// type UserRole= 'admin'|'guest'|'member'

// type User={
//     username:string 
//     role:UserRole
// }

// const users:User[]=[
//         {username:"jhon-doe", role:'member'},
//         {username:"jhon-doe", role:'admin'},
//         {username:"guest-user", role:'guest'}
// ]

// function fetchUserDetails(username:string):User{ // declearing the return type by :User. this function will return a User 
//     const user= users.find(user=> user.username=== username)
//     if(!user){
//         throw new Error(`User with username $(username) not found`)
//     }
//      return user
// }


let value: any = 1 
value.toLowerCase()
value= "Hi"
value.map()
console.log(value)
// should not use any 
