 type Pizza= {
    id:number
    name: string 
    price: number
 }


 type Order={
    id:number, 
    pizza:Pizza , 
    status:'Completed'|'Not completed'|'ordered'

 }
 
 const menu:Pizza[]= [
    {id:1,name: "Margarita", price: 8}, 
    {id:2,name: "Pepperpni", price:10}, 
    {id:3,name: "Hawaiian", price: 10}, 
    {id:4,name: "Veggie", price: 9}, 
 ]


let cashInRegister= 100
let nextOrderId= 1 
const OrderQueue:Order[]= [] 
const OrderHistory:Order[]=[]


function addNewPizza( pizzaobj:Pizza ){
    menu.push(pizzaobj)
}

function placeOrder(pizzaName:string){
    const selectedPizza= menu.find(pizzaobj=> pizzaobj.name=== pizzaName)
    if (!selectedPizza){
        console.error(`$(pizzaName) does not exist in the menu`)
        return
    }
    cashInRegister+=selectedPizza.price
    const newOrder:Order={id:nextOrderId++, pizza:selectedPizza, status: "ordered"}
    OrderQueue.push(newOrder)
    return newOrder
}




function completeOrder(orderId: number){
    const order= OrderQueue.find(order =>order.id===orderId)
    if(!order){
        console.error(`The Pizza name $(orderId.name) is not valid`)
        
        return
    }
    order.status = "Completed"
    OrderHistory.push(order)
    return order
}

addNewPizza({id:5,name:"Chiken Bacon Ranch", price: 12})
addNewPizza({id:6,name:"BBQ Chiken", price : 12})
addNewPizza({id:7,name:"Spicy Sausage", price : 11})

placeOrder("Chiken Bacon Ranch")
completeOrder(1)

console.log("Menu: ", menu)
console.log("Cash in Register : ", cashInRegister)
console.log("Order Queue:  ", OrderQueue)
console.log("Order History: ",OrderHistory)
