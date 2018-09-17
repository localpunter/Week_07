const MunroView = function (munro, listElement) {
  this.munro = munro;
  this.listElement = listElement;
}

MunroView.prototype.render = function () {
  // Create a div
  const munroContainer = document.createElement('div');
  // Create name h2
  const name = document.createElement('h2');
  name.textContent = this.munro.name;
  // Create the height paragraph
  const height = document.createElement('p')
  height.textContent = this.munro.height;
  // Append to the div
  munroContainer.appendChild(name);
  munroContainer.appendChild(height);

  // Append to the list Element
  this.listElement.appendChild(munroContainer);
};

module.exports = MunroView;
