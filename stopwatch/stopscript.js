let second = 1;
let time;
const timespeed = 1000;
const timer = document.getElementsByClassName("timer")[0];
const startbutton = document.getElementById("start-button");

function start() {
	if (startbutton.innerHTML == "Start" || startbutton.innerHTML == "Resume") {
		startbutton.innerHTML = "Pause";
		time = setInterval(timeCall, timespeed);
	} else {
		clearInterval(time);
		startbutton.innerHTML = "Resume";
	}
}

function reset() {
	second = 1;
	timer.innerHTML = "00:00";
	startbutton.innerHTML = "Start";
	clearInterval(time);
}

function timeCall() {
	let minutes = Math.floor(second / 60).toString();
	let seconds = (second % 60).toString();
	if (minutes.length == 1) {
		minutes = "0" + minutes;
	}
	if (seconds.length == 1) {
		seconds = "0" + seconds;
	}
	timer.innerHTML = minutes + ":" + seconds;
	second++;
}
