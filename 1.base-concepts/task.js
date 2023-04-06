"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = (a, b, c) => b ** 2 - 4 * a * c;
  let d = discr(a, b, c);
    if (d === 0) {
      let sq = -b / (2 * a);
      arr.push(sq);
    } 
    if (d > 0){
      let sq1 = (-b + Math.sqrt(d) )/(2*a);
      let sq2 = (-b - Math.sqrt(d) )/(2*a);
      arr.push(sq1, sq2);
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}