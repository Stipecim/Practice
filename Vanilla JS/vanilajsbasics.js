
//------------------------------------Changes Paragraphs---------------------------------------

let a = -5 + 8 * 6
let b = 55 + 9 % 9
let c = 20 + -3*5 / 8 
let d = 5 + 15 / 3 * 2 - 8 % 3

document.getElementById("a").innerHTML = "(-5 + 8) * 6 = " + String(a); // changes paragraph and converts num to a string
document.getElementById("b").innerHTML = "55 + 9 % 9 = " + String(b);
document.getElementById("c").innerHTML = "20 + -3*5 / 8 = " + String(c);
document.getElementById("d").innerHTML = "5 + 15 / 3 * 2 - 8 % 3 = " + String(d);
//---------------------------------------------------------------------------------------------

// 							Asks user for input to do Division


let fNum = prompt("|| Division || imput your first number: "); // takes in input and stores it as value 
let sNum = prompt("|| Division || imput your first number: "); 	

let dResult = fNum / sNum; // stores value of divided numbers

(Number(dResult)) ? document.getElementById("division").innerHTML = String(fNum) + " / " + String(sNum) 
: document.getElementById("division").innerHTML = " ?? "; // checks if dResult is type Number returns user message and changes paragraph
(Number(dResult)) ? document.getElementById("dResult").innerHTML = String(fNum) + " / " + String(sNum) + " = " + String(dResult)
: console.log("failed to do operation"); // checks if dResult is type Number returns console log and changes paragraph 
//-----------------------------------------------------------------------------------------------------------------------------------------

