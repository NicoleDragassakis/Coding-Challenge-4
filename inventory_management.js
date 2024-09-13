//Inital Setup

//Task 1 inventory array of product objects

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
function displayProductDetails(product){
    let { name, price, quantity, lowStockLevel} = product;
   
    const stockLevel = quantity <= lowStockLevel ? "Low Stock" : "In Stock"; //calculate stock status
    //log details ..return isnt working??
    console.log("Product Details:");
    console.log("Name:", (name));
    console.log("Pirce:",(price));
    console.log("Quantity:", (quantity));
    console.log("Stock Status", (stockLevel));
    return { stockLevel };

}
let objectFake = { name: "monitor", price: 150.00, quantity: 4, lowStockLevel: 2}; //example object to test function
console.log(displayProductDetails(objectFake));

//logging array inventory to test compataiblity with function
// console.log (displayProductDetails(inventory)); //output not correct