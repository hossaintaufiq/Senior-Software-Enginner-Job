type UserRole= 'admin'|'guest'|'member'

type User={
    id:number 
    username:string 
    role:UserRole
}

// Generics
type UpdatedUser= Partial<User>
let nextUserId= 1 

const users:User[]=[
        {id:nextUserId++,username:"jhon-doe", role:'member'},
        {id:nextUserId++,username:"jhon-doe", role:'admin'},
        {id:nextUserId++,username:"guest-user", role:'guest'}
]

// function fetchUserDetails(username:string):User{ // declearing the return type by :User. this function will return a User 
//     const user= users.find(user=> user.username=== username)
//     if(!user){
//         throw new Error(`User with username $(username) not found`)
//     }
//      return user
// }

function updateUser(id:number, updates:UpdatedUser){
    const foundUser = users.find(user=>user.id===id)
    if(!foundUser){
        console.error("user not found")
        return
    }

    Object.assign(foundUser,updates)

}


function addNewUser(newUser:Omit<User, "id"> ):User{
    const user :User= {
        id: nextUserId++, 
        ...newUser //all the remaining components 
    }
    users.push(user)
    return user

    

}

// updateUser(1,{username:"new_john_doe"}); 
addNewUser({username:"joe_schmoe", role:'member'})
console.log(users)

// let value: any = 1 
// value.toLowerCase()
// value= "Hi"
// value.map()
// console.log(value)
// should not use any 
