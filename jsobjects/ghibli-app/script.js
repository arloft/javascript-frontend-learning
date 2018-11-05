const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
// Create a request variable and assign a new XMLHttpRequest object to it.

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// Open a new connection, using a GET request on the URL endpoint

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // Log for each movie's title
      console.log(movie.title);
      console.log(movie.description);

      // Create a DIV with a 'card' CLASS
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      // Create an H1 and set the text content to the film's title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      // Create a P and set the text content to the film's description
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300); // Limit to 300 characters
      p.textContent = `${movie.description}…`; // End with an ellipses

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an H1 and a P
      card.appendChild(h1);
      card.appendChild(p);

    });
  } else {
    // console.log('error');
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `FAIL! Not working :(`;
    app.appendChild(errorMessage);
  }
}

request.send();
