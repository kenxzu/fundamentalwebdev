let bill = prompt('What is the bill total ? ');
let ibill = Number(bill);

const TIP_PERCENTAGE = 0.10;

let tip = ibill * TIP_PERCENTAGE;

console.log("for bill of $" + bill + "the tip should be  $" + tip);