var dash_button = require('node-dash-button');
var dash = dash_button("A0:63:91:D6:82:33"); //address from step above
dash.on("detected", function (){
debugger;
    console.log("omg found");
});


