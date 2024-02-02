let counter;
let timer;
let countermins = [];
const numtime = document.getElementsByClassName("number");

function increment(index) {
	if (parseInt(numtime[index].innerHTML) < 9) {
		numtime[index].innerHTML = parseInt(numtime[index].innerHTML) + 1;
	}
}
function decrement(index) {
	if (parseInt(numtime[index].innerHTML) > 0) {
		numtime[index].innerHTML = parseInt(numtime[index].innerHTML) - 1;
	}
}
function start() {
	const tenmins = 60 * 10 * parseInt(numtime[0].innerHTML);
	const onemins = 60 * parseInt(numtime[1].innerHTML);
	const tensecs = 10 * parseInt(numtime[2].innerHTML);
	const onesecs = parseInt(numtime[3].innerHTML);
	counter = tenmins + tensecs + onemins + onesecs;
	timer = setInterval(timeCall, 1000);
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
	alert("timer done!");
}
