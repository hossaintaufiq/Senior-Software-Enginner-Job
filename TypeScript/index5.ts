type UserRole= 'admin'|'guest'|'member'

type User={
    id:number 
    username:string 
    role:UserRole
}

const users:User[]=[
        {id:1,username:"jhon-doe", role:'member'},
        {id:2,username:"jhon-doe", role:'admin'},
        {id:3,username:"guest-user", role:'guest'}
]

// function fetchUserDetails(username:string):User{ // declearing the return type by :User. this function will return a User 
//     const user= users.find(user=> user.username=== username)
//     if(!user){
//         throw new Error(`User with username $(username) not found`)
//     }
//      return user
// }

function updateUser(id:number, updates:any){
    const foundUser = users.find(user=>user.id===id)
    if(!foundUser){
        console.error("user not found")
        return
    }

    Object.assign(foundUser,updates)

}

updateUser(1,{username:"new_john_doe"}); 

console.log(users)

// let value: any = 1 
// value.toLowerCase()
// value= "Hi"
// value.map()
// console.log(value)
// should not use any 
