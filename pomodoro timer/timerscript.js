let counter = 1500;
let timer;
let lap = 1;
let onBreak = false;
const numtime = document.getElementsByClassName("number");
const startbutton = document.getElementsByTagName("button")[0];
const header = document.getElementsByTagName("h1")[0];
const twentyfive = 1500;
const fivemin = 300;

const timeInterval = 1000;

function start() {
	if (startbutton.innerHTML == "Start" || startbutton.innerHTML == "Resume") {
		timer = setInterval(timeCall, timeInterval);
		startbutton.innerHTML = "Pause";
	} else {
		clearInterval(timer);
		startbutton.innerHTML = "Resume";
	}
}
function timeCall() {
	counter--;
	let mins = Math.floor(counter / 60).toString();
	let secs = (counter % 60).toString();
	if (mins.length == 1) {
		mins = "0" + mins;
	}
	if (secs.length == 1) {
		secs = "0" + secs;
	}
	console.log(mins);
	for (let i = 0; i < 2; i++) {
		numtime[i].innerHTML = mins[i];
		numtime[i + 2].innerHTML = secs[i];
	}
	if (counter == 0) {
		endTimer();
	}
}
function endTimer() {
	clearInterval(timer);
	if (lap == 4 && !onBreak) {
		alert("Time for an extended break!");
		onBreak = true;
		startbutton.innerHTML = "Start break";
		counter = twentyfive;
		header.innerHTML = "Break " + lap;
		lap = 0;
	} else if (!onBreak) {
		alert("Time for a break!");
		onBreak = true;
		startbutton.innerHTML = "Start break";
		counter = fivemin;
		header.innerHTML = "Break " + lap;
	} else {
		alert("Time for work!");
		onBreak = false;
		lap++;
		startbutton.innerHTML = "Start working";
		counter = twentyfive;
		header.innerHTML = "Lap " + lap;
	}
}
