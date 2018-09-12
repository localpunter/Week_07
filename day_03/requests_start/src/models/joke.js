const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Joke = function () {
  this.text = null;
}

Joke.prototype.getData = function () {
  const request = new Request('https://icanhazdadjoke.com');
  request.get((data) => {
    this.text = data.joke;
    PubSub.publish('Joke:joke-loaded', this.text)
  });
};

module.exports = Joke;
