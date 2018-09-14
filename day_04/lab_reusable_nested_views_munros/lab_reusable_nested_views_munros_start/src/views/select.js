const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_and_append.js');
const MunroListItem = require('./munro_item.js');

const Select = function (section) {
  this.section = section
};

Select.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:all_munros_data', (event) => {
    const allMunros = event.detail;
    document.addEventListener('change', this.filterByRegion())
  })
};

Select.prototype.filterByRegion = function (region) {
  this.section.innerHTML = '';
  const filterMunros = allMunros.filter(munro => munro.region === region)
  this.render()
};

Select.prototype.render = function () {
  const container = createAndAppend('div', null, '', this.container)
  const menu = createAndAppend('select', null, '', container)
  this.getRegions()
  this.regions.forEach((region) => {
    const option = createAndAppend('option', null, region, menu )
    option.value = region
  });

  filterMunros.forEach((munro) => {
    const munroListItem = new MunroListItem(container, munro);
  })
};

module.exports = Select;
