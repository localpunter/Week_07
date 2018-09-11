const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {

  PubSub.subscribe('SelectView:input', (evt) => {
    const selectedPlanetName = evt.detail;
    const output = this.planets.filter(p => p.name === selectedPlanetName);
    this.publishResult(output[0]);
  });
};

SolarSystem.prototype.publishResult = function(planetData){
  PubSub.publish('SolarSystem:selected', planetData)
};

module.exports = SolarSystem;
