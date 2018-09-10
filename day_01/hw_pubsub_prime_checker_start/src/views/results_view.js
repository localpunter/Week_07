const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumberChecker:result-calculated', (event) => {
    const primeNumber = event.detail;
    this.displayResult(primeNumber);
  });
};

ResultView.prototype.displayResult = function (results) {
  const resultElement = document.querySelector('#result');
    if (results.isPrime === true){
    resultElement.textContent = `Yes ${results.number}
    is a prime number!`;

    }
    else{
    resultElement.textContent = `Sorry, ${results.number}
    is not a prime number`;
  }
};


module.exports = ResultView;
