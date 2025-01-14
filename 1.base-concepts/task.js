"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
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
  let s = amount - contribution;
  let p = percent / 100 / 12;
  let n = countMonths;
  let monthlyPayment = s * (p + (p / (((1 + p)**n) - 1)));
  let totalPay = monthlyPayment * n;
  return +totalPay.toFixed(2);
}