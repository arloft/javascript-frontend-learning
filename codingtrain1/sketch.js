// var basicInput;
var output;
var storybox;
var submit;

function setup() {
	noCanvas();
	// basicInput = createInput("type stuff!");
	textfield = select("#storybox");
	// textfield.changed(newText);
	textfield.input(newTyping);
	output = select('#output');
	submit = select("#submit");
	submit.mousePressed(newText);
}

function newTyping() {
	output.html(textfield.value());
	// createP(basicInput.value());
}

function newText() {
	// console.log(basicInput.value());
	createP(textfield.value());

}
