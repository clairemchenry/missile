ThunderConnector = require('thunder-connector');
ThunderConnector.connect();

exports.turnLeftDegrees = function turnLeftDegrees(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	//console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('left');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

exports.turnRightDegrees = function turnRightDegrees(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	//console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('right');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}
exports.goUp = function goUp(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	//console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('up');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

exports.goDown = function goDown(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	//console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('down');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

exports.fire = function fire(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	//console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('fire');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

