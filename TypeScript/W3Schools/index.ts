let isActive: boolean = true
let hasPermission = false 
// symbbol 
const uniquekey: symbol = Symbol('description')

const obj = {
    [uniquekey]:'This is a unique key'
}
console.log(obj[uniquekey])