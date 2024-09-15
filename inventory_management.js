//Inital Setup

//Task 1 inventory array of product objects

console.log("TASK ONE"); //for better readability on the console.

const inventory =[ 
{name: "monitor", price: 150.00, quantity: 4, lowStockLevel: 2},
{name: "radio", price: 50.00, quantity: 10, lowStockLevel: 1},
{name: "television", price: 300.00, quantity: 8, lowStockLevel: 2},
{name: "motherboard", price: 200.00, quantity: 5, lowStockLevel: 1},
{name: "camera", price: 65.00, quantity: 1, lowStockLevel: 1},
];
console.log (inventory); //consoling to test array

//Task 2 function display product details

//directions Write a function named displayProductDetails that accepts a product object and logs the product’s name, price, quantity in stock, and stock status 

console.log("TASK TWO"); //for better readability on the console.

function displayProductDetails(product){
    const { name, price, quantity, lowStockLevel} = product;
   
    const stockLevel = quantity <= lowStockLevel ? "Low Stock" : "In Stock"; //calculate stock status
    //log details ..return isnt working??
    console.log("Product Details:");
    console.log("Name:", (name));
    console.log("Pirce:",(price));
    console.log("Quantity:", (quantity));
    console.log("Stock Status", (stockLevel));
    return { name, price, quantity, stockLevel };

}
let objectFake = { name: "monitor", price: 150.00, quantity: 4, lowStockLevel: 2}; //example object to test function
console.log(displayProductDetails(objectFake));

//logging array inventory to test compataiblity with function
// console.log (displayProductDetails(inventory)); //output not correct

//task 3 create function to update product stock after sales

//requirements write function that accepts product object and number "unitsSold" - "unitsSoldcurrentquantity" function should log product stock status.

console.log("TASK THREE"); //for better readability on the console.

function updateStock (product, unitsSold,){
    let newQuantity =(product.quantity -= unitsSold);
    const stockLevel = newQuantity <= 0 ? "No Stock" : newQuantity <= product.lowStockLevel ? "Low Stock": 
    console.log("Updated Stock", stockLevel);
return displayProductDetails(product); }

console.log("Inventory Update" ,updateStock(objectFake, 2)); //Sold Two products and updated Stock Status outputs updated stock status

//console.log("Stock Status Update Question" ,updateStock(objectFake, 5)); //test

//task 4 create a function to check low stock products

console.log("TASK FOUR"); //for better readability on the console.

function checkLowStock (inventory){
    const lowStockProducts = inventory.filter(product => product.quantity <= product.lowStockLevel); //filters out the products which do not meet requirement
    lowStockProducts.forEach(product => {
       console.log("Low Stock Items:", `${product.name}: Quantity: ${product.quantity}`); //output "camera: 1"
    });
}
checkLowStock(inventory); //calls function outputs Low Stock Items: camera: Quantity: 1

//Task 5 Calculate Total Inventory Value

//requirements: function calculateinventoryValue iterates over inventory and returns the total value value is calc by price times quantity use reduce()

console.log("TASK FIVE"); //for better readability on the console.

function calculateInventoryValue(inventory){
    return inventory.reduce((accumulator, product) => { //accumulator changes starting from 0 each time .reduce itterates over the array
        return accumulator + (product.price * product.quantity);
    }, 0);
}
console.log("Total Inventory Value" ,calculateInventoryValue(inventory)); //outputs Total Inventory Value 4565

//Task 6 function to process a sale

//requirements function named processSale that accepts product.name and uunitssold to find the product by name, if found call updatestock to reduce quantity if not found log error message.

console.log("TASK SIX"); //for better readability on the console.


function processSale (inventory, productName, unitsSold){
   const product = inventory.find(product => product.name===productName);
   if (product){
    const updateQuantity = updateStock(inventory, productName, unitsSold);
    return updateQuantity;
   } else{
    console.log("Error: Product Does Not Exist.");
    return inventory;
   }
    }
console.log(processSale(inventory, "monitor", 1)); //test function
console.log(processSale(inventory,"keyboard", 1)); //test if error displays

