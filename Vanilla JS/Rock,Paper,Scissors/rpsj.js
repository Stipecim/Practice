
function rps(p_choice) 
{	// takes two arguments button id and paragraph id 
	
	
	let _gStat = document.getElementById("_gStat");
	let _op = document.getElementById("_op");
	let arr = ["rock", "paper", "scissors"]; // initialises array with values rock paper scsissors
	let op_choice = arr[Math.floor(Math.random() * 3)]; // initialises variable "oponnent choice" and picks random value from 0 to 3
	
	_gStat.innerHTML = "";
	
	console.log(typeof op_choice + "  " + op_choice);
	console.log(p_choice);
	
	(p_choice == op_choice) ? (_gStat.innerHTML = "It's Tie", _op.innerHTML = op_choice, isTie = true) : (_op.innerHTML = op_choice, isTie = false); // checks if players are tie
	
	console.log(isTie);
	
	if(!isTie) {
		
		switch(p_choice) {
			
			case "rock": 
				if(op_choice == "scissors") {
					_gStat.innerHTML = "you win";
					break;
				}else if (op_choice == "paper") {
					_gStat.innerHTML = "you lose";
					break;
				}
			case "paper": 
				if(op_choice == "rock") {
					_gStat.innerHTML = "you win";
					break;
				}else if (op_choice == "scissors") {
					_gStat.innerHTML = "you lose";
					break;
				}  
			case "scissors": 
				if(op_choice == "paper") {
					_gStat.innerHTML = "you win";
					break;
				}else if (op_choice == "rock") {
					_gStat.innerHTML = "you lose";
					break;
				} 
			default:
				break;
			
		}
	}
	
	
	
	
}