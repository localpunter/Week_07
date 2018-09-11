const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(){

};

SelectView.prototype.bindEvents = function(){
  const target = document.querySelector('.planets-menu');
  target.addEventListener('click', (evt) => {
    const selectedPlanetName = evt.target.id;
    PubSub.publish('SelectView:input', selectedPlanetName);
  });
};

module.exports = SelectView;
