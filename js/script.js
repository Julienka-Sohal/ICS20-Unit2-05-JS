// Copyright (c) 2022 Julienka All rights reserved
//
// Created by: Julienka Sohal
// Created on: Oct 2022
// This file contains the JS functions for index.html

/**
 * This function gets users Street name and house number and shows it back to user.
 */

function enterClicked() {
  //input
  const radiusForCircle = document.getElementById("radius-for-circle").value

  // output
  document.getElementById("address").innerHTML =
    "The circumference of this circle is " + 2 * 3.14 * radiusForCircle + "."
}
