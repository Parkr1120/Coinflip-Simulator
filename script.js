var balance = 500  // starting money
var streak = 0     // streak (flips won in a row)
var highestb = 500 // record balance
var highests = 0   // record streak

// function for clicking heads. literally the same as tails but a tiny difference
function cfh() {

	var coin = Math.floor(Math.random() * 2)    // picks either 0 or 1, representing heads or tails
	var result = document.getElementById("res") // creates a reference to the p with id res for easy access

	// determines if you have enough money to bet
	if (parseInt(document.getElementById('am').value) <= balance && 0 < parseInt(document.getElementById('am').value) && balance != 0) {
		
		// if you lose
		if (coin == 0) {
			// subtract from balance, reset streak
			balance -= parseInt(document.getElementById('am').value)
			streak = 0

			// prepare for the animation
			document.getElementById("res").innerHTML="Tails"
			result.style.color = "red"

		// if you win
		} else { 
			// add to balance, increase streak
			balance += parseInt(document.getElementById('am').value)
			streak += 1

			// prepare for animation
			document.getElementById("res").innerHTML="Heads"
			result.style.color = "lime"
		}
	
	}

	// pretty much same as above, but for if the text field is empty (all in bet)
	if (isNaN(parseInt(document.getElementById('am').value)) && balance != 0) {

		// if you lose
		if (coin == 0) {
			// set balance to 0 and reset streak
			balance = 0
			streak = 0

			// prepare for animation
			document.getElementById("res").innerHTML="Tails"
			result.style.color = "red"

		// if you win
		} else {
			// double money, increase streak
			balance *= 2
			streak += 1

			// animation prep
			document.getElementById("res").innerHTML="Heads"
			result.style.color = "lime"
		}

	}

	// checking if balance and streak records were broken
	if (streak >= highests) {
		highests = streak
	}
	if (balance >= highestb) {
		highestb = balance
	}

	// updates stats
	document.getElementById('money').innerHTML = "Balance: " + balance
	document.getElementById('streak').innerHTML = "Current Streak: " + streak
	document.getElementById('highestb').innerHTML = "Highest Balance: " + highestb
	document.getElementById('highests').innerHTML = "Highest Streak: " + highests

	//play animation
	result.classList.remove('flash')
	void result.offsetWidth
	result.classList.add('flash')
}

// tails function. not gonna comment because its the same as above
function cft() {

	var coin = Math.floor(Math.random() * 2)
	var result = document.getElementById("res")

	if (parseInt(document.getElementById('am').value) <= balance && 0 < parseInt(document.getElementById('am').value) && balance != 0) {
		if (coin == 0) {

			balance -= parseInt(document.getElementById('am').value)
			streak = 0

			document.getElementById("res").innerHTML="Heads"
			result.style.color = "red"

		} else {

			balance += parseInt(document.getElementById('am').value)
			streak += 1

			document.getElementById("res").innerHTML="Tails"
			result.style.color = "lime"
		}
	
	}
	if (isNaN(parseInt(document.getElementById('am').value)) && balance != 0) {
		if (coin == 0) {

			balance = 0
			streak = 0

			document.getElementById("res").innerHTML="Heads"
			result.style.color = "red"
		} else {

			balance *= 2
			streak += 1

			document.getElementById("res").innerHTML="Tails"
			result.style.color = "lime"
		}

	}

	if (streak >= highests) {
		highests = streak
	}
	if (balance >= highestb) {
		highestb = balance
	}

	document.getElementById('money').innerHTML = "Balance: " + balance
	document.getElementById('streak').innerHTML = "Current Streak: " + streak
	document.getElementById('highestb').innerHTML = "Highest Balance: " + highestb
	document.getElementById('highests').innerHTML = "Highest Streak: " + highests

	result.classList.remove('flash')
	void result.offsetWidth
	result.classList.add('flash')
}

// restart function
function ref() {
	balance = 500 // resets balance
	streak = 0    // resets current streak

	// updates stats
	document.getElementById('money').innerHTML = "Balance: " + balance
	document.getElementById('streak').innerHTML = "Current Streak: " + streak
}