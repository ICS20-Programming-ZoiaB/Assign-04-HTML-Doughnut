// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

//Function to disable toppings until doughnut is selected
onchange="toggleToppings()"
function toggleToppings() {
  let sizeAble = document.getElementById("doughnutSize").value;

  if (sizeAble !== "0") {
    document.getElementById("sprinkles").disabled = false;
    document.getElementById("chocolate-shavings").disabled = false;
    document.getElementById("skor-bits").disabled = false;
    document.getElementById("caramel-syrup").disabled = false;
  } 
  else {
    document.getElementById("sprinkles").disabled = true;
    document.getElementById("chocolate-shavings").disabled = true;
    document.getElementById("skor-bits").disabled = true;
    document.getElementById("caramel-syrup").disabled = true;
  }
}

//Function to disable flavours until drink is selected
onchange="toggleDrinks()"
function toggleDrinks() {
  let drinksAble = document.getElementById("drinks-number").value;

  if (drinksAble !== "") {
    document.getElementById("drinks-number").disabled = false;
  } 
  else {
    document.getElementById("drinks-number").disabled = true;
  }
}


//defining funtion that takes user input and calculates cost
function OrderSent() {

 //setting a constant for tax
 const HST = 0.13;
  
 //initializing variables
 let baseDoughnutCost = 0;
 let doughnutSize = 0;

//declaring variables for base doughnut and drink
 let size = document.getElementById("doughnutSize").value;
 let numDrinks = parseInt(document.getElementById("drinks-number").value);

 //if the doughnut size is small
 if (size == "small") {
   baseDoughnutCost = 2.00;
 }

 //if the doughnut size is medium
 else if (size == "medium") {
   baseDoughnutCost = 3.00;
 }

 //if the doughnut size is not selected
  if (size == "0") {
   baseDoughnutCost = 0.00;
 }

 //if the doughnut size is large
 else {
   baseDoughnutCost = 4.00;
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