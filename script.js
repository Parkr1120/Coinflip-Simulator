var balance = 500
var streak = 0
var highestb = 500
var highests = 0
function cfh() {
	var coin = Math.floor(Math.random() * 2);
	if (parseInt(document.getElementById('am').value) <= balance && 0 < parseInt(document.getElementById('am').value) && balance != 0) {
		if (coin == 0) {
			balance -= parseInt(document.getElementById('am').value)
			
			streak = 0

			document.getElementById("res").innerHTML="Tails"

		} else {
			balance += parseInt(document.getElementById('am').value)
			streak += 1

			document.getElementById("res").innerHTML="Heads"
		}
	
	}
	if (isNaN(parseInt(document.getElementById('am').value)) && balance != 0) {
		if (coin == 0) {
			balance = 0
			
			streak = 0

			document.getElementById("res").innerHTML="Tails"
		} else {
			balance *= 2
			streak += 1

			document.getElementById("res").innerHTML="Heads"
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

	result = document.getElementById("res")

	result.classList.remove('flash')
	void result.offsetWidth
	result.classList.add('flash')

}

function cft() {
	var coin = Math.floor(Math.random() * 2);
	if (parseInt(document.getElementById('am').value) <= balance && 0 < parseInt(document.getElementById('am').value) && balance != 0) {
		if (coin == 0) {
			balance -= parseInt(document.getElementById('am').value)
			
			streak = 0

			document.getElementById("res").innerHTML="Heads"

		} else {
			balance += parseInt(document.getElementById('am').value)
			streak += 1

			document.getElementById("res").innerHTML="Tails"
		}
	
	}
	if (isNaN(parseInt(document.getElementById('am').value)) && balance != 0) {
		if (coin == 0) {
			balance = 0
			
			streak = 0

			document.getElementById("res").innerHTML="Heads"
		} else {
			balance *= 2
			streak += 1

			document.getElementById("res").innerHTML="Tails"
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

	result = document.getElementById("res")

	result.classList.remove('flash')
	void result.offsetWidth
	result.classList.add('flash')
}

function ref() {
	balance = 500
	streak = 0
	document.getElementById('money').innerHTML = "Balance: " + balance
	document.getElementById('streak').innerHTML = "Current Streak: " + streak
}