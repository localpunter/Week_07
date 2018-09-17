const createAndAppend = require('../helpers/create_and_append.js');



const MunroListItem = function(element, munro) {
  this.element = element;
  this.munro = munro;

};


MunroListItem.prototype.render = function () {
  // Create a div
  // Create h2 - h5
  // Append to the div
  // Append to h2 - h5
  const container = createAndAppend('div', null, '', this.element);
  const name = createAndAppend('h2', null, `Name: ${this.munro.name}`, container);
  const height = createAndAppend('h3', null, `Height: ${this.munro.height}`, container);
  const region = createAndAppend('h4', null, `Region: ${this.munro.region}`, container);
  const meaning = createAndAppend('h5', null, `Meaning: ${this.munro.meaning}`, container);



};



module.exports = MunroListItem
