const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';
const container = document.createElement('div');
container.setAttribute('class', 'container');
const emptyP = document.createElement('p');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
// Create a request variable and assign a new XMLHttpRequest object to it.

//	container.textContent = "this is a js-generated P element";


request.open('GET', 'https://api.scryfall.com/symbology', true);
// Open a new connection, using a GET request on the URL endpoint
// console.log(request);

request.onload = function () {
  // Begin accessing JSON data here, using a generic function
	var mtgdata = JSON.parse(this.responseText);
	
	
//  console.log(mtgdata);
//	console.log(mtgdata.data.map (d => d.english) );
  
//	Below is the "long hand" version of ^^ the d => d.english function
  console.log(mtgdata.data.map (function(d) {
	  container.appendChild('p');
	  p.textContent = d.english;
	  return d.english
  }) );
	
	
	
//for (var i = 0; i < mtgdata.data.length; i++) {
//    // ^^ this loop counts the number of array elements (objects)
//    app.appendChild(container).textContent = mtgdata.data[i].english;
//    console.log(mtgdata.data[i].english);
    // ^^ this prints each array element to the console, 
	//	using the var i to know what number element it's on.
    // ^^ the ".dot-part" after data[i] (.symbol, .english, etc), 
    // tells what property of the specific object to get.
  }

// }

request.send();
