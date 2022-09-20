"use strict";
function solveEquation(a, b, c) {
   const arr = [];
  const discriminant = b ** 2 - 4 * a * c;
  let x1;
  let x2;

  if (discriminant == 0) {
    x1 = -b / (2 * a)
    arr[0] = x1;
  }

  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    arr[0] = x1;
    arr[1] = x2;

  }
  // код для задачи №1 писать здесь
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
