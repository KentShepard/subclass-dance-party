var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition();
  this.size = 10;
  this.$node.addClass('squareDancer');

};

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.oldStep = makeDancer.prototype.step;

makeSquareDancer.prototype.step = function() {
  this.oldStep();
  this.resize();
};

makeSquareDancer.prototype.resize = function() {
  this.size === 30 ? this.size = 10 : this.size = 30;

  this.$node.animate({'border-width': this.size + 'px'}, 200)
};