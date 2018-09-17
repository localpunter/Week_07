const app = document.getElementById('root');
console.log('getElementById', app);

const logo = document.createElement('img');
logo.src = ('./image/ghibli.png');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


// create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest();

// open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
  // begin accessing JSON data here
  const data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // log each movies title and description
      //console.log('movie titles', movie.title);
      //console.log('movie description', movie.description);

      //create a div class with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      //create an h1 and set the text content to the films title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      // create a p and ser the text content to the films description
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 400); // Limit to 400 characters
      p.textContent = `${movie.description}...`; // end with an ellipses (...)

      // append the cards to the container element
      container.appendChild(card);

      // each card will contain an h1 and a new p
      card.appendChild(h1);
      card.appendChild(p);
      });

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Looks like it no workie :>('
  }
}

// send request
request.send();
