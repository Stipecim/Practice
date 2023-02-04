
// 											Activity 1
/*

Sample Array:

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Expected Output:

The sum is 55.

*/

function sumArr() { 
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	let result = null; // initialise resault variable with value 0 
	
	for(let i = 0; i < arr.length; i++ ) { // i is lesser than arrays length 
		
		result += arr[i]; //  stores sum of result and arrays index to result
		
	} 
	
	console.log("arr sum is " + result); // outputs message to console " result "
}

sumArr();

//											Activity 2
/*

Test Data:

Sample Array:

[20, 30, 25, 35, -16, 60, -100]

Expected Output:

Average value of the array elements is : 7.7.

*/

function average() {
	let arr = [20, 30, 25, 35, -16, 60, -100];
	let arrSUM = 0; 
	
	for(let i = 0; i < arr.length; i++ ) { 
		
		arrSUM += arr[i]; // stores sum of arrSUM and arrays index to arrSUM
		
	} 
	
	arrSUM /= arr.length; // stores division of arrSUM and arrays length to arrSUM
	
	console.log("Average value of the array elements is :" + arrSUM);
	
	
}

average();

//											Activity 3

/*

Test Data:

Sample Array:

[25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Expected Output:

Original Array: [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Maximum value for the above array = 77

Minimum value for the above array = 14

*/

function arrMinMax() {
	let arr = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];
	let max = null; 
	let min = null; // initialise min max integer 
	
	let s = "Orginal Array: [" // initialise string 
	
	
	
	for(let i = 0; i < arr.length; i++ ) { // for loop that iterates trough array 
	
		//											 : else 
		(i != (arr.length - 1)) ? s += arr[i] + ", " : s += arr[i] + "]"; // Ternary operator that returns a set value " s " 
		
		if(i == 0) {max = arr[i]; min = arr[i];}  // sets max and min value from arrays index [ 0 ] 
		
		if(max < arr[i]) max = arr[i]; 
		if(min > arr[i]) min = arr[i]; // check if max is higher and min lower than arrays current index 
	} 
	

	console.log(s);
	console.log("Maximum value for the above array = " + max);
	console.log("Minimum value for the above array = " + min); // writes to console

}

arrMinMax();