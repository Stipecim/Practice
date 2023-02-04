// 								Activity 1
/*
Expected Output:

"0 is even"
"1 is odd"
"2 is even"
*/


function checkifodd() {
	for(let i = 0; i <= 15; i++) {
		
		(i % 2 == 0) ?  console.log(String(i) + " is even") : console.log(String(i) + " is odd"); 
	}
}
checkifodd();

//									Activity 2

/*
Expected Output:

Input a number: 6

6 x 1 = 6 

6 x 2 = 12 

6 x 3 = 18 

6 x 4 = 24 

6 x 5 = 30 

6 x 6 = 36 

6 x 7 = 42 

6 x 8 = 48 

6 x 9 = 54 

6 x 10 = 60
*/

function multiply() {
	let num = 6;
	for (let i = 1; i <= 10; i++) {
		console.log(num  + " * " + i + " = " + (num * i));
	}
	
}

multiply();