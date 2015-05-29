ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function centerTurret(){
setTimeout(function(){ThunderConnector.command('left');},0);
setTimeout(function(){ThunderConnector.command('up');},6000);
setTimeout(function(){ThunderConnector.command('stop');},7000);
setTimeout(function(){ThunderConnector.command('down');},3000);
setTimeout(function(){ThunderConnector.command('right');},3000);
}

centerTurret();