ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
//the turret takes 22.3 milliseconds per degree
function goDown(degrees){
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('down');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

degrees = process.argv[2]|| 5;
console.log('degrees',degrees);
goDown(degrees);
