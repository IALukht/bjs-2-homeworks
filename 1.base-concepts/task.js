"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b ** 2 - 4 * a * c;
    if (discr === 0) {
      let x = -b / (2 * a);
      arr.push(x);
    } 
    if (discr > 0){
      let x1 = (-b + Math.sqrt(d) )/(2*a);
      let x2 = (-b - Math.sqrt(d) )/(2*a);
      arr.push(x1, x2);
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}