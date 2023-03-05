//let num1 = 8
//let num2 = 2
//let num1 = document.getElementById("num1-el").value;
//let num2 = document.getElementById("num2-el").value;
let sum = document.getElementById("sum-el").value;

function add() {
    let num1 = parseInt(document.getElementById("num1-el").value);
    let num2 = parseInt(document.getElementById("num2-el").value);
	let result = num1 + num2;	
	sum.textContent =  "Sum: " + result;
  
}

function subtract() {
    let num1 = document.getElementById("num1-el").value;
    let num2 = document.getElementById("num2-el").value;
	let result = num1 - num2;
	sum.textContent =  "Sum: " + result;

}

function multiply() {
	let num1 = document.getElementById("num1-el").value;
    let num2 = document.getElementById("num2-el").value;
    let result = num1 * num2;
	sum.textContent =  "Sum: " + result;
}

function divide() {
	let num1 = document.getElementById("num1-el").value;
    let num2 = document.getElementById("num2-el").value;
    let result = num1 / num2;
	sum.textContent =  "Sum: " + result;
}