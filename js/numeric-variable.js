//Create three variables to store infomation needed
let price, quantity, total;

// fetch DOM element that has the ID attribute "cost"
const costElem = document.getElementById("cost");//

//Assign values to the price and quantity variables
price = 99;
quantity = 4;

//Calculate the price
total = price * quantity;

//Update the DOM element that has the ID attribute "cost" and insert the total price 
costElem.textContent = '$'+total;

