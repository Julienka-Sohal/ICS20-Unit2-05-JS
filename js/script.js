// Copyright (c) 2022 Julienka All rights reserved
//
// Created by: Julienka Sohal
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function gets users Street name and house number and shows it back to user.
 */

function enterClicked() {
  
  //input
  const hourWorked = document.getElementById("hour-worked").value
  const perHour = document.getElementById("per-hour").value
  const incomeTax = 0.18
  const takeHomeSalary = ( perHour * hourWorked ) - ( perHour * hourWorked * incomeTax )
  const govSalary = perHour * hourWorked * incomeTax
  
  // output
  document.getElementById("money").innerHTML =
    "your pay is $" + takeHomeSalary.toFixed(2)
  document.getElementById("gov-money").innerHTML =
    "The government will take $" + govSalary.toFixed(2)
}