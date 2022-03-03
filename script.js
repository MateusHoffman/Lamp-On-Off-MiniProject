const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const changeLamp = document.getElementById('changeLamp');
const switch__container = document.getElementById('switch__container');

function lampOn () {
	if (!isLampBroken ()){
		lamp.src = 'img/ligada.jpg'
	}
}

function lampOff () {
	if (!isLampBroken ()){
		lamp.src = 'img/desligada.jpg'
	}
}

function lampBroken () {
	lamp.src = 'img/quebrada.jpg'
}

function isLampBroken () {
	return lamp.src.indexOf ('quebrada') > -1
}

function changeLampNow () {
	lamp.src = 'img/desligada.jpg'
}

function isLampOff() {
	return lamp.src.includes("desligada")
}

function checkbox () {
	if (!isLampBroken() && isLampOff()){
		lamp.src = 'img/ligada.jpg'
	}else if(!isLampBroken() && !isLampOff()){
		lamp.src = 'img/desligada.jpg'
	}
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
changeLamp.addEventListener ('click', changeLampNow);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('click', lampBroken);
