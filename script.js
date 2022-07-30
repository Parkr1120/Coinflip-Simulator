var balance = 500
var streak = 0
var highestb = 500
var highests = 0
function cf() {
	var coin = Math.floor(Math.random() * 2);
	if (parseInt(document.getElementById('am').value) <= balance && 0 < parseInt(document.getElementById('am').value) && balance != 0) {
		if (coin == 0) {
			balance -= parseInt(document.getElementById('am').value)
			
			streak = 0

		} else {
			balance += parseInt(document.getElementById('am').value)
			streak += 1
		}
	
	}
	if (isNaN(parseInt(document.getElementById('am').value)) && balance != 0) {
		if (coin == 0) {
			balance = 0
			
			streak = 0
		} else {
			balance *= 2
			streak += 1
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
}

function ref() {
	balance = 500
	streak = 0
	document.getElementById('money').innerHTML = "Balance: " + balance
	document.getElementById('streak').innerHTML = "Current Streak: " + streak
}