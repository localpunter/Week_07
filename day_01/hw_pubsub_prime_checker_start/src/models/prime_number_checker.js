const PubSub = require('../helpers/pub_sub.js')

const PrimeNumberChecker = function() {

};

PrimeNumberChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail
    const result = this.checkIfPrime(inputtedNumber);
    const results = {
      number: inputtedNumber,
      isPrime: result
    }
    // console.log(results);
    PubSub.publish('PrimeNumberChecker:result-calculated', results);
  });
};

PrimeNumberChecker.prototype.checkIfPrime = function (number) {
  if (number <= 1)
  return false
  for(let i = 2, s = Math.sqrt(number); i <= s; i++){
    if(number % i === 0)
    return false;
  }
  return true;
};


module.exports = PrimeNumberChecker;
