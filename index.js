
var dash_button  = require('dash-button');

//import DashButton from 'dash-button';

const DASH_BUTTON_MAC_ADDRESS = 'A0:63:91:D6:82:33';

var button = new dash_button.DashButton(DASH_BUTTON_MAC_ADDRESS);

//let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);
debugger;

var subscription = button.addListener(async () => {
alert("hi");//do stuff
});

subscription.remove();
