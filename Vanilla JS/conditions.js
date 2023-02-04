
//									First Activity
/* Test Data:

Input first number: 2
Input second number: 3
Input third number: 4

Expected Output :

All numbers are different.
*/

function telldDifference() {
	let fNum = 2, sNum = 3, tNum = 3; // initialises number values ( you can change values to test code )

	if (fNum == sNum && fNum == tNum) { // compares first two and frst and last 
		console.log("All numbers are equal"); // prints to a console 
	
	}else if ((fNum != sNum && fNum != tNum) && (sNum != tNum)) { // same like first condition except it compares sNum and tNum
		console.log("all numbers are different");
	
	}else console.log("Neither all are different or equal"); // if none of the above statments are true 
}

telldDifference();

//--------------------------------------------------------------------------------------------------------------------------------


// 												Second Activity
/*
Test Data:

Input first number: 1524
Input second number: 2345
Input third number: 3321

Expected Output :

Increasing order.
*/

function order() {
	let fNum = 1524, sNum = 2345, tNum = 3321;
	
	
	if (fNum < sNum && sNum < tNum) { // compares first two inputs and second and last increasing order
		console.log("Increasing order"); // prints to a console 
	
	}else if ((fNum > sNum && sNum > tNum)) { // same like first condition only decreasing order
		console.log("decreasing order");
	
	}else console.log("Neither increasing or decreasing order"); // if none of the above statments are true 
	
}

order();

// --------------------------------------------------------------------------------------------------------------------------------