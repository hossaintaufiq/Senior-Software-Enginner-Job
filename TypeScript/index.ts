type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "Completed" | "Not completed" | "ordered";
};

let cashInRegister = 100;
let nextOrderId = 1;
const OrderQueue: Order[] = [];
const OrderHistory: Order[] = [];
let nextPizzaId= 1

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margarita", price: 8 },
  { id: nextPizzaId++, name: "Pepperpni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];



function addNewPizza(pizzaobj: Omit<Pizza,"id">):Pizza {
    const newPizza:Pizza = {
        id:nextPizzaId++,
        ...pizzaobj
    }
  
  menu.push(newPizza)
  return newPizza
}

addNewPizza({name:"Chiken Bacon Ranch", price: 12})
addNewPizza({name:"BBQ Chiken", price : 12})
addNewPizza({name:"Spicy Sausage", price : 11})
addNewPizza({name:"Spicy Sausage with beef", price : 11})
addNewPizza({name:"Spicy Sausage with mutton", price : 11})





function placeOrder(pizzaName: string):Order|undefined {
  const selectedPizza = menu.find((pizzaobj) => pizzaobj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`$(pizzaName) does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  OrderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number):Order|undefined {
  const order = OrderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`The Pizza name $(orderId.name) is not valid`);

    return;
  }
  order.status = "Completed";
  OrderHistory.push(order);
  return order;
}

export function getPizzaDetail(identifier: string | number): Pizza {
  if (typeof identifier === "string") {
    let selectedPizza = menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase(),
    );
    if (!selectedPizza) {
      throw new Error(`$(selectedPizza) is not found`);
    }
    return selectedPizza;
  } else if (typeof identifier === "number") {
    let selectedPizza = menu.find((pizza) => pizza.id === identifier);
    if (!selectedPizza) {
      throw new Error(`$(selectedPizza) is not found`);
    }
    return selectedPizza;
  } else {
    throw new TypeError("Perameter indentifier must be number or string");
  }
}



placeOrder("Chiken Bacon Ranch")
completeOrder(1)

console.log("Menu: ", menu)
// console.log("Cash in Register : ", cashInRegister)
// console.log("Order Queue:  ", OrderQueue)
// console.log("Order History: ",OrderHistory)
