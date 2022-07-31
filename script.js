var balance = 500  // starting money
var streak = 0     // streak (flips won in a row)
var highestb = 500 // record balance
var highests = 0   // record streak


// function for clicking heads. literally the same as tails but a tiny difference
function cf(bet) {

	var coin = Math.floor(Math.random() * 2)    // picks either 0 or 1, representing heads or tails
	var result = document.getElementById("res") // creates a reference to the p with id res for easy access

	if (isNaN(parseInt(document.getElementById('am').value)) && balance != 0) {
		document.getElementById('am').value = balance
	}

	// determines if you have enough money to bet
	if (parseInt(document.getElementById('am').value) <= balance && 0 < parseInt(document.getElementById('am').value) && balance != 0) {
		
		// tails
		if (coin == 0) {
			// win
			if (bet == "tails") {

				// increase balance and streak
				balance += parseInt(document.getElementById('am').value)
				streak += 1

				// anim prep
				document.getElementById("res").innerHTML="Tails"
				result.style.color = "lime"

			// lose
			} else {

				// decrease balance and reset streak
				balance -= parseInt(document.getElementById('am').value)
				streak = 0

				//anim prep
				document.getElementById('res').innerHTML="Tails"
				result.style.color = "red"

			}

		// heads
		} else { 
			// win
			if (bet == "heads") {

				// increase balance and streak
				balance += parseInt(document.getElementById('am').value)
				streak += 1

				// anim prep
				document.getElementById("res").innerHTML="Heads"
				result.style.color = "lime"

			// lose
			} else {

				// decrease balance and reset streak
				balance -= parseInt(document.getElementById('am').value)
				streak = 0

				// anim prep
				document.getElementById('res').innerHTML="Heads"
				result.style.color = "red"

			}
			
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

// restart function
function ref() {
	balance = 500 // resets balance
	streak = 0    // resets current streak

	// updates stats
	document.getElementById('money').innerHTML = "Balance: " + balance
	document.getElementById('streak').innerHTML = "Current Streak: " + streak
}