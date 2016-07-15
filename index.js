var DashButton = require('dash-button');

const DASH_BUTTON_MAC_ADDRESS = 'A0:63:91:D6:82:33';
let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);

var subscription = button.addListener(function(){
	process.stdout.write("hello: ");

});//do stuff

//subscription.remove();



