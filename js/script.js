// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

//defining funtion that takes user input and calculates cost
function OrderSent() {

 //setting a constant for tax
 const HST = 0.13;
  
 //initializing variables
 let baseDoughnutCost = 0;

 //declaring variables for base doughnut and drink
 let small = document.getElementById("small").value;
 let medium = document.getElementById("medium").value;
 let large = document.getElementById("large").value;
 let numDrinks = parseInt(document.getElementById("drinks-number").value);

 //determining the cost of the base doughnut using compound if/then statements

 //if the doughnut size is small
 if (doughnutSize == small) {
   baseDoughnutCost = 2.00;
 }

 //if the doughnut size is medium
 else if (doughnutSize == medium) {
   baseDoughnutCost = 3.00;
 }

 //if the doughnut size is large
 else if (doughnutSize == large) {
   baseDoughnutCost = 4.00;
 }

 else {
   baseDoughnutCost = 0.00;
 }

 //determining the number of checkboxes checked
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
let numToppings = checkboxes.length;

 //determining the cost of the toppings using a variable and a constant for the price
 const UNIT_PRICE_TOPPINGS = 0.50;
 let costToppings = numToppings * UNIT_PRICE_TOPPINGS;

 //constant and variables for drink
 const UNIT_PRICE_DRINKS = 3.00;
 let costDrinks = numDrinks * UNIT_PRICE_DRINKS;

 //calculating the subtotal, tax and total
 let subtotal = baseDoughnutCost + costToppings + costDrinks;
 let tax = subtotal * HST;
 let total = subtotal + tax;

 //displaying the totals to the screen
 document.getElementById("results").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of HST added is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}