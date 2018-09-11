const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:selected', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });
};

ResultView.prototype.render = function(planet){

  const infoContainer = document.querySelector('.planetinfobox');
  infoContainer.innerHTML = '';

  const imgContainer = document.querySelector('.planetimgbox');
  imgContainer.innerHTML = '';

  const planetName = document.createElement('h2');
  planetName.textContent = `${planet.name}`;
  infoContainer.appendChild(planetName);

  const planetInfo = document.createElement('p');
  planetInfo.setAttribute('style', 'white-space: pre;');
  planetInfo.textContent = `Day: ${planet.day} Earth days\r\nOrbit: ${planet.orbit} Earth days\r\nSurface Area: ${planet.surfaceArea} Earths\r\nVolume: ${planet.volume} Earths\r\nGravity: ${planet.gravity}g\r\nMoons: ${planet.moons}`;
  infoContainer.appendChild(planetInfo);

  const planetImage = document.createElement('img');
  planetImage.src = `./${planet.image}`;
  planetImage.alt = `A picture of ${planet.name}`
  imgContainer.appendChild(planetImage);


};

module.exports = ResultView;
