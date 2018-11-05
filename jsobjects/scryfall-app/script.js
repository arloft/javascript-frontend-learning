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

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.responseText);
  console.log(data.data[0].object);
  //
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
