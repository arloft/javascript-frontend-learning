// controls "Click Me" button actions
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}

// controls clicking on the <P> element with the ID of "p1"

function copyParagraph() {
	let myText = document.createElement('p');
	myText.textContent = "Found myText!";
	document.body.appendChild(myText);
}

let firstParagraph = document.getElementById('myText');
firstParagraph.addEventListener('click', copyParagraph);

// controls <P> tags click action for those assigned a CLASS "invaderParagraph"

function extraParagraph() {
	let newText = document.createElement('p');
	newText.textContent = "I'm made by clicking an H5 element that ALSO has a class 'invaderParagraph'";
	console.log(newText, someh5s);
	for (let n = 0; n < someh5s.length; n++) {
		someh5s[n].parentNode.insertBefore(newText, someh5s[n]);
		console.log(someh5s[n].textContent);
	}
}

let someh5s = document.getElementsByClassName('invaderParagraph');

for(let i = 0; i < someh5s.length; i++) {
  someh5s[i].addEventListener('click', extraParagraph);
	console.log("added a Click handler to "+someh5s);
}

// controls adding/removing a margin around the search field when hovering it with the mouse (using anonymous functions)

let theSearchField = document.getElementById('searchField');
document.getElementById('searchField').onmouseover = function() {
	theSearchField.style.margin="1em 0 1em 0";
}
document.getElementById('searchField').onmouseout = function() {
	theSearchField.style.margin="0";
}