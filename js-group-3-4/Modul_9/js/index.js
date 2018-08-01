'use strict';
const clockFace = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
let outText = document.querySelector('.js-laps');

class Timer {
	constructor({onTick}){
		this.startTime = 0;
		this.deltaTime = 0;
		this.isActive = false;
		this.timerId = null;
		this.onTick = onTick;
	}

	start() {
		if (!this.isActive) {
			this.isActive = true;
		}
		this.startTime = Date.now() - this.deltaTime;
		this.timerId = setInterval(() => {
			this.deltaTime = Date.now() - this.startTime;
			
			let time = new Date(this.deltaTime);
			let min = time.getMinutes();
			let sec = time.getSeconds();
			let ms = time.getMilliseconds();

			min = min < 10 ? '0' + min : min;
			sec = sec < 10 ? '0' + sec : sec;
			ms = Number.parseInt(ms / 100);

			this.onTick({min, sec, ms});
		}, 100);
		resetBtn.disabled = true;
	}
	lap() {
		let clockFaceOutText = clockFace.innerHTML;
   		outText.innerHTML += `<li>[${clockFaceOutText}]</li>, `;
	}
	stop() {
		clearInterval(this.timerId);
		this.timerId = null;
		this.isActive = false;
		resetBtn.disabled = false;
	}
	reset() {
		this.stop();
		this.startTime = 0;
		this.deltaTime = 0;
		this.onTick({ min: '00', sec: '00', ms: 0 });
	}
};
const timer = new Timer({
	onTick: updateClockFace,
});

startBtn.addEventListener('click', ()=> {
	if (!timer.isActive) {
		timer.start();
		startBtn.textContent = 'pause';
		return;
	}
	timer.stop();
	startBtn.textContent = 'continue';
});

resetBtn.addEventListener('click', ()=> {
	timer.reset();
	startBtn.textContent = 'start';
});

lapBtn.addEventListener('click', timer.lap.bind(timer));

function updateClockFace({min, sec, ms}){
	clockFace.textContent = `${min}:${sec}.${ms}`;
}
