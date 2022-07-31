var balance = 500  // starting money
var streak = 0     // streak (flips won in a row)
var highestb = 500 // record balance
var highests = 0   // record streak
var fliptotal = 0  // how many total flips
var headstotal = 0 // how many total heads flips
var tailstotal = 0 // how many total tails flips

// function for clicking heads. literally the same as tails but a tiny difference
function cf(bet) {

	var coin = Math.floor(Math.random() * 2)    // picks either 0 or 1, representing heads or tails
	var result = document.getElementById("res") // creates a reference to the p with id res for easy access
	var allin = false

	if (isNaN(parseInt(document.getElementById('am').value)) && balance != 0) {
		document.getElementById('am').value = balance
		var allin = true
	}

	// determines if you have enough money to bet
	if (parseInt(document.getElementById('am').value) <= balance && 0 < parseInt(document.getElementById('am').value) && balance != 0) {
		
		// tails
		if (coin == 0) {
			// win
			if (bet == "tails") {

				// increase balance and streak
				balance += Math.floor(parseInt(document.getElementById('am').value)*(gainpercent/100))
				streak += 1
				tailstotal += 1

				// anim prep
				document.getElementById("res").innerHTML="Tails"
				result.style.color = "lime"

			// lose
			} else {

				// decrease balance and reset streak
				balance -= Math.floor(parseInt(document.getElementById('am').value)*(losspercent/100))
				streak = 0
				tailstotal += 1

				//anim prep
				document.getElementById('res').innerHTML="Tails"
				result.style.color = "red"

			}

		// heads
		} else { 
			// win
			if (bet == "heads") {

				// increase balance and streak
				balance += Math.floor(parseInt(document.getElementById('am').value)*(gainpercent/100))
				streak += 1
				headstotal += 1

				// anim prep
				document.getElementById("res").innerHTML="Heads"
				result.style.color = "lime"

			// lose
			} else {

				// decrease balance and reset streak
				balance -= Math.floor(parseInt(document.getElementById('am').value)*(losspercent/100))
				streak = 0
				headstotal += 1

				// anim prep
				document.getElementById('res').innerHTML="Heads"
				result.style.color = "red"

			}
			
		}

		fliptotal += 1
	
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
	document.getElementById('headperc').innerHTML = Math.floor(headstotal/fliptotal*100) + "%"
	document.getElementById('tailperc').innerHTML = Math.floor(tailstotal/fliptotal*100) + "%"


	//play animation
	result.classList.remove('flash')
	void result.offsetWidth
	result.classList.add('flash')

	// gets rid of the text in text box if you went all in
	if (allin) {
		document.getElementById('am').value = ""
	}
}

// restart function
function ref() {
	balance = 500 // resets balance
	streak = 0    // resets current streak

	// updates stats
	document.getElementById('money').innerHTML = "Balance: " + balance
	document.getElementById('streak').innerHTML = "Current Streak: " + streak
}

