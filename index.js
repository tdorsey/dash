import DashButton from 'dash-button';

const DASH_BUTTON_MAC_ADDRESS = 'xx:xx:xx:xx:xx:xx';

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);
Running Code When You Press Your Dash Button

Add a listener to your button. The listener will run when you press the button.

let subscription = button.addListener(async () => {
//do stuff
});

// Later, if you want to remove the listener do so with the subscription:
subscription.remove();
