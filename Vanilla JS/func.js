// 									Activity 1
/*
Write 2 JavaScript functions to: 

show the array content. 
find the max value in the array.
Sample Array : [10, 2, 3, 4, 7]

Expected Output :

The content of the array is: [10, 2, 3, 4, 7]

The max value in the array is: 10
*/


function printArr() {
	let arr = [10, 2, 3, 4, 7];
	let max = null; // initialise min max integer 
	
	let s = "The content of the array is: [" // initialise string 
	
	
	
	for(let i = 0; i < arr.length; i++ ) { // for loop that iterates trough array 
	 
		(i != (arr.length - 1)) ? s += arr[i] + ", " : s += arr[i] + "]"; // Ternary operator that returns a set value " s " 	
		
	} 
	

	console.log(s);
	

}

printArr();


function arrMax() {
	let arr = [10, 2, 3, 4, 7];
	let max = null; // initialise min max integer 
	
	
	
	
	
	for(let i = 0; i < arr.length; i++ ) { // for loop that iterates trough array 
		
		if(max < arr[i]) max = arr[i]; // check if max is higher and min lower than arrays current index 
	} 
	
	console.log("Maximum value for the above array = " + max); // writes to console

}

arrMax();

//												Activity 2

/*
Write a JavaScript function to calculate the factorial of a number (a non-negative integer n ). The function accepts the number as an argument.

Note:
The factorial of a number is the product of all the integers from 1 to that number and it is represented by n!

For example, the factorial of 6! is 1*2*3*4*5*6 = 720. 

The factorial is not defined for negative numbers, and the factorial of zero is one, 0! = 1.
*/


function factorial(number)  { // func that takes one argument
	tmp = 1; // initialise tmp as 1;
	for (let i = 1; i <= number ; i++) { 
		tmp *= i; //   stores multiplication of tmpand i to tmp
	}
	return tmp; // returns tmp 
}


console.log("factorial of 6 is: " + factorial(6)); // writes to console 


// 												Activity 3

/*
Write a JavaScript function that takes a number as a parameter and check the number is prime or not. 

Note: 

Prime numbers are the numbers that are only divisible by themselves and 1, in other words, if we try to divide them by another number, the result is not a whole number. 

So, if we divide the number by anything other than 1 or itself, we will get a remainder that is not zero. 

Negative numbers can not be prime.
*/

function isPrime(number) {
	
	if(number == 0 || number == 1) return false; // checks if numbers are either 1 or 0 
	for (let i = 2; i < number;  i++) {
		
		if((number / i) % 1 === 0) { // divides number with i module of divison checks if number is decimal 
			return false;
		}
	}
	
	return true;
}

let num = 11; // input 

(isPrime(num)) ? console.log(num + " is Prime ") : console.log(num + " not a Prime ")  // ternary operator calls isPrime function











