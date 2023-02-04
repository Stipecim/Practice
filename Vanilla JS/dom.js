
function getVolume(){ 
	
	let isString = false; // sets value to false 
	let id = document.getElementById('radius'); // gets id from element
	let radius = id.value; // stores value to radius 
	let volume = 0.0; // initialise float 
	
	(/[a-zA-Z]/g.test(radius)) ?  isString = true: radius = Number(radius); // no need to check for string in Form(Input) since you can force only a "number imput " but this is only for practice :D
	
	
	if(isString) { // check if value 
		return console.log("cannot calculate with string"); // outputs if string 
	}else {
		let pi = 3.14159; // pi
		let r = radius; // temp value to calculate 
		volume = 4/3 * pi * (r **3); // result stored in volume 
		
		document.getElementById("volume").value = volume; // sets form's id value to result stored in volume 
	}
	
	
}