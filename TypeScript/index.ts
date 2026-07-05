 type Pizza= {
    name: string 
    price: number
 }
 
 
 const menu= [
    {name: "Margarita", price: 8}, 
    {name: "Pepperpni", price:10}, 
    {name: "Hawaiian", price: 10}, 
    {name: "Veggie", price: 9}, 
 ]


let cashInRegister= 100
let nextOrderId= 1 
const OrderQueue= []


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
    const newOrder={id:nextOrderId++, pizza:selectedPizza, status: "ordered"}
    OrderQueue.push(newOrder)
    return newOrder
}




function completeOrder(orderId: number){
    const order= OrderQueue.find(order =>order.id===orderId)
    order.status= "Completed"
    return order
}

addNewPizza({name:"Chiken Bacon Ranch", price: 12})
addNewPizza({name:"BBQ Chiken", price : 12})
addNewPizza({name:"Spicy Sausage", price : 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu: ", menu)
console.log("Cash in Register : ", cashInRegister)
console.log("Order Queue:  ", OrderQueue)
