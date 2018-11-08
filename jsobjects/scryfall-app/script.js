const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
// Create a request variable and assign a new XMLHttpRequest object to it.

request.open('GET', 'https://api.scryfall.com/symbology', true);
// Open a new connection, using a GET request on the URL endpoint
// console.log(request);

request.onload = function () {
  // Begin accessing JSON data here, using a generic function
  var aSymbol = JSON.parse(this.responseText);
for (var i = 0; i < aSymbol.data.length; i++) {
    // ^^ this loop counts the number of array elements (objects)
    app.appendChild(container).textContent = aSymbol.data[i].english;
    console.log(aSymbol.data[i].english);
    // ^^ this prints each array element to the console, using the var i,
    // to know what number element it's on
    // ^^ the ".dot-part" after data[i] (.symbol, .english, etc), 
    // tells what property of the specific object to get 
  }

  // if (request.status >= 200 && request.status < 400) {
    // data.forEach(cardSymbol => {
  //     // Log for each movie's title
  //     console.log(cardSymbol.list.object);
  //     console.log(cardSymbol.list.symbol);
  //
  //   });
  // } else {
  //   console.log('error');
    // const errorMessage = document.createElement('marquee');
    // errorMessage.textContent = `FAIL! Not working :(`;
    // app.appendChild(errorMessage);
}
// }

request.send();
