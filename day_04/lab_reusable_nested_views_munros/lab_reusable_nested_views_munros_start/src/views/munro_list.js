const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_and_append.js');
const MunroListItem = require('./munro_item.js');

const MunroList = function(container) {
  this.container = container
  this.regions = null
}

MunroList.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:all_munros_data', (event) => {
    this.munros = event.detail
    this.render();
  });
};


MunroList.prototype.render = function () {
  const container = createAndAppend('div', null, '', this.container)
  const menu = createAndAppend('select', null, '', container)

  this.getRegions()
  this.regions.forEach((region) => {
    const option = createAndAppend('option', null, region, menu )
    option.value = region
  });

  this.munros.forEach((munro) => {
    const munroListItem = new MunroListItem(container, munro);
    munroListItem.render();
  })
};

  MunroList.prototype.getRegions = function () {
    const munroRegions = [];
    this.munros.forEach((munro) => {
      munroRegions.push(munro.region)
    });
    this.regions = munroRegions.filter((region, index, self) => self.indexOf(region) === index);
  };




module.exports = MunroList;
