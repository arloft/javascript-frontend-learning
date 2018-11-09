const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
// Create a request variable and assign a new XMLHttpRequest object to it.

//	container.textContent = "this is a js-generated P element";
//  This ^^ line writes directly under the 'body' element.


request.open('GET', 'https://api.scryfall.com/symbology', true);
// Open a new connection, using a GET request on the URL endpoint
// console.log(request);

request.onload = function () {
  // Begin accessing JSON data here, using a generic function
	var mtgdata = JSON.parse(this.responseText);
	
	
	console.log(mtgdata); // View the entire JSON object
	
//	console.log(mtgdata.data.map (d => d.english) );
  
//	Below is the "long hand" version of ^^ the d => d.english function
  mtgdata.data.map (function(d) {
	  
//	  console.log(container);
	  const newP = document.createElement('p');
//	  console.log(newP);
	  newP.innerHTML = d.symbol + ": "+ d.english;
	  // Use 'innerHTML' instead of 'textContent' when creating a new page element, so you have a Node where you can attach new elements
	  document.body.appendChild(newP);
	  	  
	  return d.english;
  }) ;
	
} // End of "request.onload" function

// }

request.send();
